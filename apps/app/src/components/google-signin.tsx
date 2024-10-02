"use client"

import { useScopedI18n } from "@/locales/client"
import { createClient } from "@futbiz/supabase/client"
import { Button } from "@futbiz/ui/button"

export function GoogleSignin() {
  const t = useScopedI18n("login")
  const supabase = createClient()

  const handleSignin = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`,
        queryParams: {
          prompt: "consent",
          access_type: "offline",
        },
        scopes: "https://www.googleapis.com/auth/userinfo.profile",
      },
    })
  }

  return (
    <Button onClick={handleSignin} variant="outline" className="font-mono">
      {t("authWithGoogle")}
    </Button>
  )
}
