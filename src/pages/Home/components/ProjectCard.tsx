import { ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import type { Project } from "../types"

const ProjectCard = ({ project }: { project: Project }) => (
  <Card>
    <CardHeader>
      <CardTitle>{project.title}</CardTitle>
      <CardDescription>
        {[project.period, project.role].filter(Boolean).join(" · ") || "Portfolio 项目 · 待补充详情"}
      </CardDescription>
      <CardAction>
        <Badge variant="secondary">{project.category}</Badge>
      </CardAction>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col gap-4">
        <p className="leading-7">{project.description}</p>
        <ul className="flex flex-col gap-2 text-muted-foreground">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="leading-7">
              {highlight}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <Badge key={item} variant="outline">
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </CardContent>
    {project.links?.length ? (
      <CardFooter className="flex flex-wrap gap-2">
        {project.links.map((link) => (
          <Button key={link.href} asChild size="sm" variant="outline">
            <a href={link.href} rel="noreferrer" target="_blank">
              {link.label}
              <ExternalLink data-icon="inline-end" />
            </a>
          </Button>
        ))}
      </CardFooter>
    ) : null}
  </Card>
)

export default ProjectCard
