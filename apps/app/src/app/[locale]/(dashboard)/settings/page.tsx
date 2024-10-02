import { ButtonSignOut } from "@/components/button-signout"
import { getScopedI18n } from "@/locales/server"
import { getUser } from "@futbiz/supabase/queries"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@futbiz/ui/card"
import { Separator } from "@futbiz/ui/separator"
import { redirect } from "next/navigation"

export async function generateMetadata() {
  const t = await getScopedI18n("settings")
  return {
    title: `Futbiz - ${t("title")}`,
  }
}

export default async function Page() {
  const t = await getScopedI18n("settings")
  const { user } = await getUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <>
      <h3 className="text-2xl font-bold">{t("title")}</h3>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Informations du compte</CardTitle>
          <CardDescription>
            Gérez les informations de votre compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </CardContent>
      </Card>

      <Separator className="my-4" />
      <ButtonSignOut />
    </>
  )
}
