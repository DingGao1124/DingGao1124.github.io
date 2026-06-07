import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type InfoListCardProps = {
  title: string
  description: string
  items: string[]
}

const InfoListCard = ({ title, description, items }: InfoListCardProps) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="flex flex-col gap-3 text-muted-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
)

export default InfoListCard
