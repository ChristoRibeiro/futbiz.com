"use client"

import { createClient } from "@futbiz/supabase/client"
import type { User } from "@futbiz/supabase/types"
import { Avatar, AvatarFallback, AvatarImage } from "@futbiz/ui/avatar"
import { cn } from "@futbiz/ui/cn"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@futbiz/ui/dropdown-menu"
import { Icons } from "@futbiz/ui/icons"
import { ToggleGroup, ToggleGroupItem } from "@futbiz/ui/toggle-group"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"

export const DropdownUser = ({ user }: { user: User }) => {
  const router = useRouter()
  const supabase = createClient()

  const { theme, setTheme, themes } = useTheme()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-6 cursor-pointer hover:ring-2 hover:ring-border hover:ring-offset-2 hover:ring-offset-background">
          <AvatarImage
            src={user.user_metadata.picture}
            alt={user.user_metadata.full_name}
          />
          <AvatarFallback>
            {user.user_metadata.full_name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-full md:min-w-60">
        <DropdownMenuItem className="flex flex-col items-start focus:bg-transparent">
          <span className="font-medium">{user.user_metadata.full_name}</span>
          <span className="font-normal text-muted-foreground">
            {user.email}
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>Settings</span>
          <Icons.Settings className="ml-auto size-4" />
        </DropdownMenuItem>
        <DropdownMenuItem className="focus:bg-transparent">
          <span>Theme</span>
          <ToggleGroup
            type="single"
            className="rounded-full border border-border ml-auto gap-0 *:h-6 *:w-6 *:px-[5px]"
            defaultValue={theme}
          >
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
                {option === "light" && <Icons.Light className="size-3.5" />}
                {option === "dark" && <Icons.Dark className="size-3.5" />}
                {option === "system" && <Icons.Laptop className="size-3.5" />}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </DropdownMenuItem>
        <DropdownMenuSeparator color="" />
        <DropdownMenuItem onClick={handleSignOut}>
          <span>Sign out</span>
          <Icons.LogOut className="ml-auto size-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
