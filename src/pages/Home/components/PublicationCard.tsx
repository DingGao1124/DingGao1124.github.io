import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import type { Publication } from "../types"

const PublicationCard = ({ publication }: { publication: Publication }) => (
  <Card>
    <CardHeader>
      <CardTitle>{publication.title}</CardTitle>
      <CardDescription>{publication.meta}</CardDescription>
    </CardHeader>
    {publication.note ? (
      <CardContent>
        <p className="text-muted-foreground">{publication.note}</p>
      </CardContent>
    ) : null}
  </Card>
)

export default PublicationCard
