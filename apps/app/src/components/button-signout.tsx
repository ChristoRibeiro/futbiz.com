"use client"

import { createClient } from "@futbiz/supabase/client"
import { Button } from "@futbiz/ui/button"
import { useRouter } from "next/navigation"

export function ButtonSignOut() {
  const router = useRouter()
  const supabase = createClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <Button variant="destructive" onClick={handleSignOut}>
      Sign Out
    </Button>
  )
}
