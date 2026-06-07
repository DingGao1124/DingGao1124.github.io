import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import type { Experience } from "../types"

const ExperienceCard = ({ experience }: { experience: Experience }) => (
  <Card>
    <CardHeader>
      <CardTitle>{experience.organization}</CardTitle>
      <CardDescription>
        {experience.role} · {experience.period}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="leading-7 text-muted-foreground">{experience.summary}</p>
    </CardContent>
  </Card>
)

export default ExperienceCard
