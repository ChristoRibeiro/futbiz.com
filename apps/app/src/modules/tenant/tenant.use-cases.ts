import * as dataAccess from "./tenant.data-access"

/** Get the tenant by the public.user id */
export function getTenantByAuthId(authId: string) {
  return dataAccess.getTenantByAuthId(authId)
}
