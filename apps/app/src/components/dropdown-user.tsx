"use client"

import { createClient } from "@futbiz/supabase/client"
import type { User } from "@futbiz/supabase/types"
import { Avatar, AvatarFallback, AvatarImage } from "@futbiz/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@futbiz/ui/dropdown-menu"
import { Icons } from "@futbiz/ui/icons"
import { Switch } from "@futbiz/ui/switch"
import { ToggleGroup, ToggleGroupItem } from "@futbiz/ui/toggle-group"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"

export const DropdownUser = ({ user }: { user: User }) => {
  const router = useRouter()
  const supabase = createClient()

  const { theme, setTheme } = useTheme()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
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
      <DropdownMenuContent align="end" className="min-w-full md:min-w-[12rem]">
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
        <DropdownMenuItem>
          {/* {theme === "light" ? (
            <Icons.Sun className="mr-2 h-4 w-4" />
          ) : (
            <Icons.Moon className="mr-2 h-4 w-4" />
          )} */}
          <span>Theme</span>
          <ToggleGroup type="multiple">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              S
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              L
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              D
            </ToggleGroupItem>
          </ToggleGroup>
          <Switch
            checked={theme === "dark"}
            onCheckedChange={toggleTheme}
            className="ml-auto"
          />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <span>Sign out</span>
          <Icons.LogOut className="ml-auto size-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
