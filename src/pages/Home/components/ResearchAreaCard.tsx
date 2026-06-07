import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import type { ResearchArea } from "../types"

const ResearchAreaCard = ({ area }: { area: ResearchArea }) => (
  <Card>
    <CardHeader>
      <CardTitle>{area.title}</CardTitle>
      <CardDescription>{area.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <Badge variant="outline">Research Area</Badge>
    </CardContent>
  </Card>
)

export default ResearchAreaCard
