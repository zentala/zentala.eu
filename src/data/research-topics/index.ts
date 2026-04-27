export type { TopicStatus, EffortLevel, DepthLevel, ConceptId, ResearchTopic } from './types'
export { tier1Topics } from './tier-1'
export { tier2Topics } from './tier-2'
export { tier3Topics } from './tier-3'
export { tier4Topics } from './tier-4'
export { tier5Topics } from './tier-5'

import { tier1Topics } from './tier-1'
import { tier2Topics } from './tier-2'
import { tier3Topics } from './tier-3'
import { tier4Topics } from './tier-4'
import { tier5Topics } from './tier-5'
import type { ResearchTopic } from './types'

export const researchTopics: ResearchTopic[] = [
  ...tier1Topics,
  ...tier2Topics,
  ...tier3Topics,
  ...tier4Topics,
  ...tier5Topics,
]
