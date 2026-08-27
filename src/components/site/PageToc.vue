<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, shallowRef } from "vue"

import { cn } from "@/lib/utils"

export type PageTocItem = {
  id: string
  label: string
}

const props = defineProps<{
  items: readonly PageTocItem[]
  label: string
}>()

const activeId = shallowRef(props.items[0]?.id ?? "")
const activeIndex = computed(() =>
  Math.max(
    0,
    props.items.findIndex((item) => item.id === activeId.value),
  ),
)
let observer: IntersectionObserver | undefined

function labelVisibility(index: number) {
  const distance = Math.abs(index - activeIndex.value)
  if (distance === 0) return "opacity-100"
  if (distance === 1) return "opacity-70"
  if (distance === 2) return "opacity-20"
  return "opacity-0"
}

onMounted(() => {
  const targets = props.items
    .map((item) => document.getElementById(item.id))
    .filter((target): target is HTMLElement => Boolean(target))

  observer = new IntersectionObserver(
    (entries) => {
      const current = entries.reduce<IntersectionObserverEntry | undefined>(
        (nearest, entry) => {
          if (!entry.isIntersecting) return nearest
          if (!nearest) return entry
          return entry.boundingClientRect.top < nearest.boundingClientRect.top
            ? entry
            : nearest
        },
        undefined,
      )

      if (current?.target.id) activeId.value = current.target.id
    },
    { rootMargin: "-18% 0px -68% 0px" },
  )

  targets.forEach((target) => observer?.observe(target))
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <aside class="xl:block ml-12">
    <nav class="page-toc group sticky top-28" :aria-label="label">
      <ol
        class="page-toc-list page-toc-list--faded relative flex flex-col gap-3 py-3"
      >
        <li
          v-for="(item, index) in items"
          :key="item.id"
          class="relative min-w-0"
        >
          <a
            :href="`#${item.id}`"
            :class="
              cn(
                'grid min-h-7 grid-cols-[0.625rem_minmax(0,1fr)] items-start gap-3 text-xs leading-4 text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground',
                activeId === item.id && 'text-foreground',
              )
            "
            :aria-current="activeId === item.id ? 'location' : undefined"
          >
            <span
              :class="
                cn(
                  'relative z-10 mt-1 size-2 rounded-full border border-border bg-background transition-[background-color,border-color,transform]',
                  activeId === item.id && 'scale-110 border-link bg-link',
                )
              "
              aria-hidden="true"
            />
            <span
              :class="
                cn(
                  'line-clamp-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100',
                  labelVisibility(index),
                )
              "
            >
              {{ item.label }}
            </span>
          </a>
        </li>
      </ol>
    </nav>
  </aside>
</template>

<style scoped>
.page-toc-list::before {
  position: absolute;
  inset-block: 0.75rem;
  inset-inline-start: 0.21875rem;
  width: 1px;
  background: var(--border);
  content: "";
}

.page-toc-list--faded {
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent,
    black 12%,
    black 88%,
    transparent
  );
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 12%,
    black 88%,
    transparent
  );
}

.page-toc:hover .page-toc-list--faded,
.page-toc:focus-within .page-toc-list--faded {
  -webkit-mask-image: linear-gradient(to bottom, black, black);
  mask-image: linear-gradient(to bottom, black, black);
}
</style>
