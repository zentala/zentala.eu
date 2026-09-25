import type { BenefitEntry, BenefitKind } from './types'
import { countries } from './countries'
import { regions } from './regions'
import { stakeholders } from './stakeholders'

export type { BenefitEntry, BenefitKind, BenefitTile, BenefitLink } from './types'

/** Every entry the picker offers, in the order the groups are shown. */
export const benefitEntries: BenefitEntry[] = [...countries, ...regions, ...stakeholders]

export const benefitGroups: { kind: BenefitKind; label: string; entries: BenefitEntry[] }[] = [
  { kind: 'country', label: 'Countries', entries: countries },
  { kind: 'region', label: 'Regions', entries: regions },
  { kind: 'stakeholder', label: 'Your role', entries: stakeholders },
]

/** The entry shown when a reader arrives with no country and no hash. */
export const defaultEntrySlug = 'citizens'

export const findEntry = (slug: string): BenefitEntry | undefined =>
  benefitEntries.find((entry) => entry.slug === slug)

/**
 * Browser language to entry slug. Only languages with an implemented country
 * entry appear here: suggesting a page we do not have is the promise-gap this
 * page exists to close.
 */
export const languageToSlug: Record<string, string> = {
  de: 'germany',
  fr: 'france',
  pl: 'poland',
  it: 'italy',
  es: 'spain',
  sv: 'sweden',
  nl: 'netherlands',
  uk: 'ukraine',
  cs: 'central-europe',
  sk: 'central-europe',
  hu: 'central-europe',
  pt: 'southern-europe',
  el: 'southern-europe',
  da: 'northern-europe',
  fi: 'northern-europe',
  nb: 'northern-europe',
  no: 'northern-europe',
  et: 'baltic-states',
  lv: 'baltic-states',
  lt: 'baltic-states',
  ro: 'south-eastern-europe',
  bg: 'south-eastern-europe',
  hr: 'south-eastern-europe',
  sr: 'south-eastern-europe',
}
