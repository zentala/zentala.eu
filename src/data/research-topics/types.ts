export type TopicStatus = 'not-started' | 'in-progress' | 'complete'
export type EffortLevel = 'Low' | 'Medium' | 'High'
export type DepthLevel = 'Low' | 'Medium' | 'Medium-Deep' | 'Deep'

export type ConceptId =
  | 'demographic'
  | 'language'
  | 'egov'
  | 'blockchain'
  | 'payment'
  | 'transportation'
  | 'robotics'
  | 'healthcare'
  | 'education'
  | 'culture'
  | 'security'
  | 'migration'
  | 'environment'
  | 'labor'
  | 'privacy'

export interface ResearchTopic {
  /** Unique ID: T1.1, T2.3, etc. */
  id: string
  title: string
  description: string
  /** 1–4 */
  tier: 1 | 2 | 3 | 4
  depth: DepthLevel
  effort: EffortLevel
  /** 1 = lowest, 5 = critical */
  strategicValue: 1 | 2 | 3 | 4 | 5
  researchApproach: string[]
  relatedConcepts: ConceptId[]
  /** Links to existing pages this topic relates to */
  existingContent: string
  status: TopicStatus
  /** Link to published research page when complete */
  researchPath?: string
}
