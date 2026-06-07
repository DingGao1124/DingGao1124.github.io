import { ExternalLink, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import type { LinkItem } from "../types"

const ContactCard = ({ links }: { links: LinkItem[] }) => (
  <Card>
    <CardHeader>
      <CardTitle>开放交流</CardTitle>
      <CardDescription>
        欢迎围绕数字孪生、具身智能、工业软件与智能制造研究进行交流。
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          <Button asChild>
            <a href="mailto:2231117@mail.dhu.edu.cn">
              <Mail data-icon="inline-start" />
              Email
            </a>
          </Button>
          {links.map((link) => (
            <Button key={link.href} asChild variant="outline">
              <a href={link.href} rel="noreferrer" target="_blank">
                {link.label}
                <ExternalLink data-icon="inline-end" />
              </a>
            </Button>
          ))}
        </div>
        <Separator />
        <p className="text-sm text-muted-foreground">
          隐私说明：首版页面仅公开邮箱与外链，不展示手机号、年龄或详细住址。
        </p>
      </div>
    </CardContent>
  </Card>
)

export default ContactCard
