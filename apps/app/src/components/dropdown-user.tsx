"use client"

import { useScopedI18n } from "@/locales/client"
import { routes } from "@/navigation"
import { createClient } from "@futbiz/supabase/client"
import type { User } from "@futbiz/supabase/types"
import { Avatar, AvatarFallback, AvatarImage } from "@futbiz/ui/avatar"
import { cn } from "@futbiz/ui/cn"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@futbiz/ui/dropdown-menu"
import { Icons } from "@futbiz/ui/icons"
import { ToggleGroup, ToggleGroupItem } from "@futbiz/ui/toggle-group"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useRouter } from "next/navigation"

export const DropdownUser = ({ user }: { user: User }) => {
  const router = useRouter()
  const supabase = createClient()
  const t = useScopedI18n("dropdown-user")

  const { theme, setTheme, themes } = useTheme()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar
          className={cn(
            "size-6 cursor-pointer",
            "hover:ring-2 hover:ring-border hover:ring-offset-2 hover:ring-offset-background",
            "focus:ring-2 focus:ring-border focus:ring-offset-2 focus:ring-offset-background",
          )}
        >
          <AvatarImage src={user.user_metadata.picture} alt={user.user_metadata.full_name} />
          <AvatarFallback>
            <p className="text-xs">{user.user_metadata.full_name.slice(0, 2).toUpperCase()}</p>
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-full md:min-w-60">
        <DropdownMenuItem className="flex flex-col items-start focus:bg-transparent">
          <DropdownMenuLabel className="pb-0.5">{user.user_metadata.full_name}</DropdownMenuLabel>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href={routes.settings()}>
            <DropdownMenuLabel>{t("account-settings")}</DropdownMenuLabel>
            <DropdownMenuShortcut>
              <Icons.UserSettings className="size-4" />
            </DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="focus:bg-transparent">
          <DropdownMenuLabel>{t("theme")}</DropdownMenuLabel>
          <DropdownMenuShortcut>
            <ToggleGroup type="single" className="rounded-full border border-border ml-auto gap-0 *:h-6 *:w-6 *:px-[5px]" defaultValue={theme}>
              <legend className="sr-only">Select a display theme:</legend>
              {themes.map((option) => (
                <ToggleGroupItem
                  key={option}
                  value={option}
                  aria-label={option}
                  className={cn(
                    "rounded-full",
                    option === theme
                      ? "border border-border"
                      : "border border-transparent bg-transparent text-muted-foreground hover:text-foreground",
                  )}
                  onClick={() => setTheme(option)}
                >
                  {option === "light" && <Icons.ThemeLight className="size-3.5" />}
                  {option === "dark" && <Icons.ThemeDark className="size-3.5" />}
                  {option === "system" && <Icons.ThemeSystem className="size-3.5" />}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleSignOut}>
          <DropdownMenuLabel>{t("sign-out")}</DropdownMenuLabel>
          <DropdownMenuShortcut>
            <Icons.LogOut className="size-4" />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
