<script setup lang="ts">
import {
  education,
  experiences,
  honors,
  profileLinks,
  projects,
  publications,
  researchAreas,
  summaryTags,
} from "@/data/profile"

import ContactCard from "@/components/home/ContactCard.vue"
import ExperienceCard from "@/components/home/ExperienceCard.vue"
import InfoListCard from "@/components/home/InfoListCard.vue"
import ProfileHero from "@/components/home/ProfileHero.vue"
import ProjectCard from "@/components/home/ProjectCard.vue"
import PublicationCard from "@/components/home/PublicationCard.vue"
import ResearchAreaCard from "@/components/home/ResearchAreaCard.vue"
import Section from "@/components/home/Section.vue"
</script>

<template>
  <div class="mx-auto flex max-w-6xl flex-col gap-16 px-5 py-12 md:px-8 md:py-16">
    <ProfileHero :links="profileLinks" :tags="summaryTags" />

    <Section
      id="research"
      title="研究方向"
      description="研究兴趣围绕智能制造中的可解释建模、智能体协作、机器人执行和工业场景落地展开。"
    >
      <div class="grid gap-4 md:grid-cols-2">
        <ResearchAreaCard v-for="area in researchAreas" :key="area.title" :area="area" />
      </div>
    </Section>

    <Section
      id="projects"
      title="精选项目"
      description="以下项目来自简历与语雀 Portfolio。对于语雀中只有标题或附件的项目，首版保留明确占位，后续可继续补充。"
    >
      <div class="grid gap-4 lg:grid-cols-2">
        <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
      </div>
    </Section>

    <Section id="publications" title="论文与专利">
      <div class="grid gap-4">
        <PublicationCard
          v-for="publication in publications"
          :key="publication.title"
          :publication="publication"
        />
      </div>
    </Section>

    <Section
      id="experience"
      title="经历"
      description="研究与实习经历以摘要形式呈现，保留方向、组织和职责，不展开完整 CV 条目。"
    >
      <div class="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
        <div class="flex flex-col gap-4">
          <ExperienceCard
            v-for="experience in experiences"
            :key="`${experience.organization}-${experience.period}`"
            :experience="experience"
          />
        </div>
        <div class="flex flex-col gap-4">
          <InfoListCard title="教育背景" description="Education" :items="education" />
          <InfoListCard title="荣誉与竞赛" description="Selected honors" :items="honors" />
        </div>
      </div>
    </Section>

    <Section id="contact" title="联系">
      <ContactCard :links="profileLinks" />
    </Section>
  </div>
</template>

