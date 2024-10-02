import { GoogleSignin } from "@/components/google-signin"
import { getScopedI18n } from "@/locales/server"

export async function generateMetadata() {
  const t = await getScopedI18n("login")
  return {
    title: t("title"),
  }
}

export default function Page() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center size-96">
        <h1 className="text-4xl font-bold mb-6">Futbiz</h1>
        <GoogleSignin />
      </div>
    </div>
  )
}
