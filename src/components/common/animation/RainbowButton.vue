<script setup lang="ts">
import { computed } from 'vue'
import { ArrowUpRight } from '@lucide/vue'

const props = defineProps<{
  href: string
  label: string
}>()

const isExternal = computed(() => /^https?:\/\//.test(props.href))
</script>

<template>
  <a
    class="rainbow-button group text-primary-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noreferrer' : undefined"
  >
    {{ label }}
    <ArrowUpRight
      class="size-3.5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      aria-hidden="true"
    />
  </a>
</template>

<style scoped>
/*
 * MagicUI rainbow button structure (https://magicui.design/docs/components/rainbow-button)
 * with a vivid rainbow ring and glow over a warm surface that matches the site themes.
 * Upstream chroma runs 0.134–0.26 at hues 25.9 / 302 / 251 / 225 / 133.
 */
.rainbow-button {
  --color-1: oklch(74% 0.17 40);
  --color-2: oklch(70% 0.2 330);
  --color-3: oklch(72% 0.16 255);
  --color-4: oklch(78% 0.13 210);
  --color-5: oklch(82% 0.17 140);
  --rainbow-surface: #2f2a22;
  --rainbow-speed: 2s;
  --rainbow-radius: 0.75rem;

  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  height: 2.25rem;
  padding-inline: 1.25rem;
  border: 0.125rem solid transparent;
  border-radius: var(--rainbow-radius);
  background-image:
    linear-gradient(var(--rainbow-surface), var(--rainbow-surface)),
    linear-gradient(
      var(--rainbow-surface) 50%,
      color-mix(in oklab, var(--rainbow-surface) 60%, transparent) 80%,
      transparent
    ),
    linear-gradient(
      90deg,
      var(--color-1),
      var(--color-5),
      var(--color-3),
      var(--color-4),
      var(--color-2)
    );
  background-clip: padding-box, border-box, border-box;
  background-origin: border-box;
  background-size: 200%;
  animation: rainbow var(--rainbow-speed) infinite linear;
  font-size: 0.8125rem;
  font-weight: 500;
  white-space: nowrap;
  scale: 1;
  transition: scale 220ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Slight lift on hover; a press squashes fast and springs back past 1 on release. */
.rainbow-button:hover {
  scale: 1.03;
}

.rainbow-button:active {
  scale: 0.95;
  transition-duration: 90ms;
  transition-timing-function: ease-out;
}

.dark .rainbow-button {
  --color-1: oklch(72% 0.17 40);
  --color-2: oklch(70% 0.19 330);
  --color-3: oklch(72% 0.15 255);
  --color-4: oklch(76% 0.13 210);
  --color-5: oklch(78% 0.17 140);
  --rainbow-surface: oklch(92% 0.012 85);
}

/* Blurred rainbow glow that trails below the button. */
.rainbow-button::before {
  position: absolute;
  bottom: -20%;
  left: 50%;
  z-index: 0;
  width: 60%;
  height: 20%;
  translate: -50% 0;
  background-image: linear-gradient(
    90deg,
    var(--color-1),
    var(--color-5),
    var(--color-3),
    var(--color-4),
    var(--color-2)
  );
  background-size: 200%;
  opacity: 0.75;
  filter: blur(0.75rem);
  animation: rainbow var(--rainbow-speed) infinite linear;
  content: '';
}
</style>
