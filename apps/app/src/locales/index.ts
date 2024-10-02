import en from "./en"

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`
}[keyof ObjectType & (string | number)]

export type LocaleKey = NestedKeyOf<typeof en>

export function isLocaleKey(value: string): value is LocaleKey {
  return value in en
}
