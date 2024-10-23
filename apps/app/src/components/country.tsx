import { isLocaleKey } from "@/locales"
import { getI18n } from "@/locales/server"
import { type CountryId, isCountryId } from "@futbiz/database/data"

const COUNTRY_FLAG: Record<CountryId, string> = {
  ALBANIA: "🇦🇱",
  ANDORRA: "🇦🇩",
  ARMENIA: "🇦🇲",
  AUSTRIA: "🇦🇹",
  AZERBAIJAN: "🇦🇿",
  BELARUS: "🇧🇾",
  BELGIUM: "🇧🇪",
  BOSNIA_AND_HERZEGOVINA: "🇧🇦",
  BULGARIA: "🇧🇬",
  CROATIA: "🇭🇷",
  CYPRUS: "🇨🇾",
  CZECH_REPUBLIC: "🇨🇿",
  DENMARK: "🇩🇰",
  ENGLAND: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  ESTONIA: "🇪🇪",
  FAROE_ISLANDS: "🇫🇴",
  FINLAND: "🇫🇮",
  FRANCE: "🇫🇷",
  GEORGIA: "🇬🇪",
  GERMANY: "🇩🇪",
  GIBRALTAR: "🇬🇮",
  GREECE: "🇬🇷",
  HUNGARY: "🇭🇺",
  ICELAND: "🇮🇸",
  ISRAEL: "🇮🇱",
  ITALY: "🇮🇹",
  KAZAKHSTAN: "🇰🇿",
  KOSOVO: "🇽🇰",
  LATVIA: "🇱🇻",
  LIECHTENSTEIN: "🇱🇮",
  LITHUANIA: "🇱🇹",
  LUXEMBOURG: "🇱🇺",
  MALTA: "🇲🇹",
  MOLDOVA: "🇲🇩",
  MONACO: "🇲🇨",
  MONTENEGRO: "🇲🇪",
  NETHERLANDS: "🇳🇱",
  NORTHERN_IRELAND: "🇮🇪",
  NORTH_MACEDONIA: "🇲🇰",
  NORWAY: "🇳🇴",
  POLAND: "🇵🇱",
  PORTUGAL: "🇵🇹",
  REPUBLIC_OF_IRELAND: "🇮🇪",
  ROMANIA: "🇷🇴",
  RUSSIA: "🇷🇺",
  SAN_MARINO: "🇸🇲",
  SCOTLAND: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  SERBIA: "🇷🇸",
  SLOVAKIA: "🇸🇰",
  SLOVENIA: "🇸🇮",
  SPAIN: "🇪🇸",
  SWEDEN: "🇸🇪",
  SWITZERLAND: "🇨🇭",
  TURKEY: "🇹🇷",
  UKRAINE: "🇺🇦",
  WALES: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
}

type Props = {
  id: CountryId | (string & {})
  flag?: boolean
}

/**
 * Display a country translated name (if available) with a flag.
 */
export async function Country({ id, flag = true }: Props) {
  const t = await getI18n()

  const countryFlag = isCountryId(id) ? COUNTRY_FLAG[id] : id
  const countryName = isCountryId(id) && isLocaleKey(`data.country.${id}`) ? t(`data.country.${id}`) : id

  return (
    <div className="inline-flex items-center gap-2">
      {flag && <span>{countryFlag}</span>}
      <span>{countryName}</span>
    </div>
  )
}
