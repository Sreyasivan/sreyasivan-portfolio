import { cache } from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { toMediaRef } from '@/data/media'
import type { MediaRef } from '@/data/types'
import { toBehaviour, type PetBehaviour } from '@/components/pet/behaviour'

export type PetSettings = { enabled: boolean; showOnPhones: boolean; sprite?: string; behaviour: PetBehaviour }
export type BrandIcons = { faviconLight?: MediaRef; faviconDark?: MediaRef; appleIcon?: MediaRef }

/** Pet settings from the admin (Sidebar → Pet); defaults keep the built-in pet. */
export const getPetSettings = cache(async (): Promise<PetSettings> => {
  const payload = await getPayload({ config: configPromise })
  const doc = (await payload.findGlobal({ slug: 'pet', depth: 1 }).catch(() => null)) as
    | ({ enabled?: boolean | null; showOnPhones?: boolean | null; sprite?: unknown } & Record<string, unknown>)
    | null
  const sprite = toMediaRef(doc?.sprite)?.url
  // There is no built-in pet: it shows only once a sprite sheet is uploaded and switched on.
  return { enabled: !!doc?.enabled && !!sprite, showOnPhones: doc?.showOnPhones ?? true, sprite, behaviour: toBehaviour(doc) }
})

/** Uploaded favicons (Brand → Favicon & icons); empty fields fall back to the built-in SS logo. */
export const getBrandIcons = cache(async (): Promise<BrandIcons> => {
  const payload = await getPayload({ config: configPromise })
  const doc = (await payload.findGlobal({ slug: 'brand', depth: 1 }).catch(() => null)) as { faviconLight?: unknown; faviconDark?: unknown; appleIcon?: unknown } | null
  return { faviconLight: toMediaRef(doc?.faviconLight), faviconDark: toMediaRef(doc?.faviconDark), appleIcon: toMediaRef(doc?.appleIcon) }
})
