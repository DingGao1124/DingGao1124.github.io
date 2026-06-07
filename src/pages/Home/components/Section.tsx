import type { ReactNode } from "react"

type SectionProps = {
  id: string
  title: string
  description?: string
  children: ReactNode
}

const Section = ({ id, title, description, children }: SectionProps) => (
  <section id={id} className="scroll-mt-24">
    <div className="flex flex-col gap-4">
      <div className="flex max-w-3xl flex-col gap-2">
        <h2 className="font-heading text-2xl font-semibold md:text-3xl">{title}</h2>
        {description ? (
          <p className="leading-7 text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {children}
    </div>
  </section>
)

export default Section
