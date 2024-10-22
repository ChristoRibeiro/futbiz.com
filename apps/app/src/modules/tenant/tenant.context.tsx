"use client"

import type { Tenant } from "@futbiz/database/db"
import { type PropsWithChildren, createContext, useContext, useRef } from "react"
import { createStore, useStore } from "zustand"

// ===================== //
// Store
// ===================== //

interface TenantProps {
  tenant: Tenant | null
  isLoading: boolean
  hasError: boolean
}

interface TenantState extends TenantProps {
  setTenant: (tenant: Tenant) => void
  resetTenant: () => void
}

const createTenantStore = (initPros?: Partial<TenantProps>) => {
  const DEFAULT_PROPS: TenantProps = {
    tenant: null,
    isLoading: false,
    hasError: false,
  }
  return createStore<TenantState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initPros,
    setTenant: (tenant) =>
      set({
        tenant,
        isLoading: false,
        hasError: false,
      }),
    resetTenant: () =>
      set({
        tenant: null,
        isLoading: false,
        hasError: false,
      }),
  }))
}

type TenantStore = ReturnType<typeof createTenantStore>

// ===================== //
// Context
// ===================== //

const TenantContext = createContext<TenantStore | null>(null)

export const TenantProvider = ({ children, tenant }: PropsWithChildren<{ tenant?: Tenant | null }>) => {
  const storeRef = useRef<TenantStore>()

  if (!storeRef.current) {
    storeRef.current = createTenantStore({ tenant })
  }

  return <TenantContext.Provider value={storeRef.current}>{children}</TenantContext.Provider>
}

/**
 * Example usage:
 *
 * ```tsx
 * const tenant = useTenantContext((state) => state.tenant)
 * ```
 */
export function useTenantContext<T>(selector: (state: TenantState) => T): T {
  const store = useContext(TenantContext)
  if (!store) {
    throw new Error("Missing TenantStoreProvider in the tree")
  }
  return useStore(store, selector)
}
