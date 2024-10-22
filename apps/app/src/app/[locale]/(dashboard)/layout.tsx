import { DropdownUser } from "@/components/dropdown-user"
import type { LocaleKey } from "@/locales"
import { getI18n } from "@/locales/server"
import { TenantProvider } from "@/modules/tenant/tenant.context"
import { getTenantByAuthId } from "@/modules/tenant/tenant.data-access"
import { routes } from "@/navigation"
import { getUser } from "@futbiz/supabase/queries"
import { buttonVariants } from "@futbiz/ui/button"
import { cn } from "@futbiz/ui/cn"
import { type Icon, Icons } from "@futbiz/ui/icons"
import type { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"
import type React from "react"

const NAV_ITEMS: { icon: Icon; label: LocaleKey; href: string }[] = [
  { icon: Icons.Deals, label: "navbar.deals", href: routes.deals() },
  { icon: Icons.Clubs, label: "navbar.clubs", href: routes.clubs() },
  { icon: Icons.Players, label: "navbar.players", href: routes.players() },
  { icon: Icons.Market, label: "navbar.market", href: routes.market() },
]

export const metadata: Metadata = {
  title: {
    template: "%s ― Futbiz",
    default: "Futbiz",
  },
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const t = await getI18n()
  const { user } = await getUser()

  if (!user) {
    redirect("/login")
  }

  const tenant = await getTenantByAuthId(user.id)

  return (
    <TenantProvider tenant={tenant}>
      <header className={cn("h-14 bg-background flex items-center border-border absolute w-full right-0 bottom-0 border-t md:top-0 md:border-b")}>
        <div className="container">
          <nav className="flex items-center justify-around md:justify-start gap-2">
            {NAV_ITEMS.map(({ href, icon: Icon, label }) => (
              <Link key={href} href={href} className={cn("space-x-1.5 px-2", buttonVariants({ variant: "ghost" }))} prefetch>
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

      <main className="container pb-14 md:pb-14 md:pt-14">{children}</main>
    </TenantProvider>
  )
}
