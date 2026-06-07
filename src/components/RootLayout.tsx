import { Outlet } from "react-router"

import { Separator } from "@/components/ui/separator"

const navItems = [
  { href: "#profile", label: "简介" },
  { href: "#research", label: "研究方向" },
  { href: "#projects", label: "精选项目" },
  { href: "#publications", label: "论文与专利" },
  { href: "#experience", label: "经历" },
  { href: "#contact", label: "联系" },
]

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
          <a href="#profile" className="font-heading text-sm font-medium">
            高鼎 / Ding Gao
          </a>
          <nav aria-label="Primary navigation">
            <ul className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className="transition-colors hover:text-foreground" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Separator />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground md:px-8">
        <Separator />
        <p>© 2026 Ding Gao. Academic profile and selected portfolio.</p>
      </footer>
    </div>
  )
}

export default RootLayout
