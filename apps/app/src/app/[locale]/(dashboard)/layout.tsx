import { DropdownUser } from "@/components/dropdown-user"
import type { LocaleKey } from "@/locales"
import { getI18n } from "@/locales/server"
import { routes } from "@/navigation"
import { getUser } from "@futbiz/supabase/queries"
import { buttonVariants } from "@futbiz/ui/button"
import { cn } from "@futbiz/ui/cn"
import { type Icon, Icons } from "@futbiz/ui/icons"
import Link from "next/link"
import { redirect } from "next/navigation"
import type React from "react"

const navItems: { icon: Icon; label: LocaleKey; href: string }[] = [
  {
    icon: Icons.Deals,
    label: "navbar.deals",
    href: routes.deals(),
  },
  {
    icon: Icons.Clubs,
    label: "navbar.clubs",
    href: routes.clubs(),
  },
  {
    icon: Icons.Players,
    label: "navbar.players",
    href: routes.players(),
  },
]

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const t = await getI18n()
  const { user } = await getUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <>
      <header
        className={cn(
          "h-14 bg-background",
          "flex items-center",
          "sticky border-border",
          "absolute w-full right-0 bottom-0 border-t md:top-0 md:border-b",
        )}
      >
        <div className="container">
          <nav className="flex items-center justify-around md:justify-start gap-2">
            {navItems.map(({ href, icon: Icon, label }) => (
              <Link
                href={href}
                className={cn(
                  "space-x-1.5 px-2",
                  buttonVariants({ variant: "ghost" }),
                )}
                key={href}
              >
                <Icon className="size-6 md:size-4" />
                <span className="hidden md:block">{t(label)}</span>
              </Link>
            ))}

            <div className="md:ml-auto flex items-center gap-2">
              <DropdownUser user={user} />
            </div>
          </nav>
        </div>
      </header>

      <main className="container h-screen w-screen overflow-y-auto pb-14 md:pb-0 md:pt-14">
        {children}
      </main>
    </>
  )
}
