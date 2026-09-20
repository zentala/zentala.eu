/**
 * Shared prop types for the vision page components.
 * Keeps the page data typed in one place so the page file stays declarative.
 */

/** Accent colour used by a layer; maps to Tailwind palettes in LayerCard. */
export type LayerTone = 'indigo' | 'blue' | 'green';

/** One level of the stack: floor, middle or ceiling. */
export interface Layer {
  /** 1 = floor, 3 = ceiling. Drives the numbering and the connector text. */
  level: number;
  /** Short position name shown in the badge, e.g. "Floor". */
  position: string;
  title: string;
  /** One-sentence claim shown under the title. */
  summary: string;
  /** Concrete arguments or components of this layer. */
  points: string[];
  /** Existing page to read more. Must exist in dist/. */
  href: string;
  linkText: string;
  tone: LayerTone;
}

/** One step of the top-level argument chain. */
export interface FrameStep {
  label: string;
  text: string;
}

/** A link rendered as a button in the call to action. */
export interface Action {
  label: string;
  href: string;
}
