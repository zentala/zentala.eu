/**
 * Shared shapes for the /benefits pages.
 *
 * A benefit entry answers one question for one reader: what does an aging
 * Europe that shares a working language, a digital state and cheap robots do
 * for me? Every entry therefore hangs off the frame in
 * `.plan/vision/aging-society-frame.md`, not off the older three-pillars story.
 */

/** Which picker group an entry belongs to. */
export type BenefitKind = 'country' | 'region' | 'stakeholder';

/** One claim: a short title and the mechanism behind it. */
export interface BenefitTile {
  title: string
  body: string
}

/** A link from an entry into the argument that supports it. */
export interface BenefitLink {
  href: string
  label: string
}

export interface BenefitEntry {
  /** URL segment: `/benefits/<slug>`, and the picker's tab id. */
  slug: string
  /** The one display name, used in the picker, the heading and the page title. */
  name: string
  kind: BenefitKind
  /** Two-letter code for a flag image; regions and stakeholders use `EU`. */
  flag: string
  /** Emoji shown instead of a flag for stakeholder entries. */
  icon?: string
  /** One or two sentences naming this reader's version of the demographic problem. */
  lead: string
  /** Countries covered by a region entry; also fed to the picker's search. */
  members?: string[]
  tiles: BenefitTile[]
  links?: BenefitLink[]
}
