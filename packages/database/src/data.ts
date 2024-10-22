export const ContactType = {
  PLAYER: "PLAYER",
}

export const DealStatus = {
  LEAD: "LEAD",
  NEGOTIATION: "NEGOTIATION",
  SIGNED: "SIGNED",
  LOST: "LOST",
}

export const LEAGUE = {
  /** Asian Football Confederation */
  AFC: "AFC",
  /** Confederation of African Football */
  CAF: "CAF",
  /** Confederation of North, Central American and Caribbean Association Football */
  CONCACAF: "CONCACAF",
  /** Confederación Sudamericana de Fútbol */
  CONMEBOL: "CONMEBOL",
  /** Oceania Football Confederation */
  OFC: "OFC",
  /** Union of European Football Associations */
  UEFA: "UEFA",
}

export const isCountryId = (name: string): name is CountryId => {
  return Object.values(COUNTRY).includes(name)
}
export type CountryId = keyof typeof COUNTRY
export const COUNTRY = {
  // ===================== //
  // UEFA
  // ===================== //
  ALBANIA: "ALBANIA",
  ANDORRA: "ANDORRA",
  ARMENIA: "ARMENIA",
  AUSTRIA: "AUSTRIA",
  AZERBAIJAN: "AZERBAIJAN",
  BELARUS: "BELARUS",
  BELGIUM: "BELGIUM",
  BOSNIA_AND_HERZEGOVINA: "BOSNIA_AND_HERZEGOVINA",
  BULGARIA: "BULGARIA",
  CROATIA: "CROATIA",
  CYPRUS: "CYPRUS",
  CZECH_REPUBLIC: "CZECH_REPUBLIC",
  DENMARK: "DENMARK",
  ENGLAND: "ENGLAND",
  ESTONIA: "ESTONIA",
  FAROE_ISLANDS: "FAROE_ISLANDS",
  FINLAND: "FINLAND",
  FRANCE: "FRANCE",
  GEORGIA: "GEORGIA",
  GERMANY: "GERMANY",
  GIBRALTAR: "GIBRALTAR",
  GREECE: "GREECE",
  HUNGARY: "HUNGARY",
  ICELAND: "ICELAND",
  ISRAEL: "ISRAEL",
  ITALY: "ITALY",
  KAZAKHSTAN: "KAZAKHSTAN",
  KOSOVO: "KOSOVO",
  LATVIA: "LATVIA",
  LIECHTENSTEIN: "LIECHTENSTEIN",
  LITHUANIA: "LITHUANIA",
  LUXEMBOURG: "LUXEMBOURG",
  MALTA: "MALTA",
  MOLDOVA: "MOLDOVA",
  MONACO: "MONACO",
  MONTENEGRO: "MONTENEGRO",
  NETHERLANDS: "NETHERLANDS",
  NORTHERN_IRELAND: "NORTHERN_IRELAND",
  NORTH_MACEDONIA: "NORTH_MACEDONIA",
  NORWAY: "NORWAY",
  POLAND: "POLAND",
  PORTUGAL: "PORTUGAL",
  REPUBLIC_OF_IRELAND: "REPUBLIC_OF_IRELAND",
  ROMANIA: "ROMANIA",
  RUSSIA: "RUSSIA",
  SAN_MARINO: "SAN_MARINO",
  SCOTLAND: "SCOTLAND",
  SERBIA: "SERBIA",
  SLOVAKIA: "SLOVAKIA",
  SLOVENIA: "SLOVENIA",
  SPAIN: "SPAIN",
  SWEDEN: "SWEDEN",
  SWITZERLAND: "SWITZERLAND",
  TURKEY: "TURKEY",
  UKRAINE: "UKRAINE",
  WALES: "WALES",
}
