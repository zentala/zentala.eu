import { researchTopics } from './research-topics'
import type { ConceptId } from './research-topics'

export interface ConceptGroup {
  id: ConceptId
  name: string
  description: string
}

export const conceptGroups: ConceptGroup[] = [
  {
    id: 'demographic',
    name: 'Demographics',
    description: "Europe's aging population crisis",
  },
  {
    id: 'language',
    name: 'Language',
    description: 'English adoption and linguistic integration',
  },
  {
    id: 'egov',
    name: 'e-Government',
    description: 'Digital public services and administration',
  },
  {
    id: 'blockchain',
    name: 'Blockchain',
    description: 'Distributed ledger tech for government and finance',
  },
  {
    id: 'payment',
    name: 'Payments',
    description: 'Financial integration and digital currencies',
  },
  {
    id: 'transportation',
    name: 'Transportation',
    description: 'Autonomous vehicles and logistics',
  },
  {
    id: 'robotics',
    name: 'Robotics',
    description: 'Automation and reindustrialization',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Predictive medicine and health data',
  },
  {
    id: 'education',
    name: 'Education',
    description: 'e-Learning, skills certification, retraining',
  },
  {
    id: 'security',
    name: 'Tech Sovereignty',
    description: 'Cybersecurity and digital independence',
  },
  {
    id: 'migration',
    name: 'Migration',
    description: 'Digital borders and economic migration',
  },
  {
    id: 'environment',
    name: 'Environment',
    description: 'Green digital infrastructure',
  },
  {
    id: 'labor',
    name: 'Labor',
    description: 'Job displacement and workforce transitions',
  },
  {
    id: 'privacy',
    name: 'Privacy',
    description: 'GDPR, consent, and trust in digital systems',
  },
]

export function getTopicsForConcept(conceptId: ConceptId): string[] {
  return researchTopics
    .filter((t) => t.relatedConcepts.includes(conceptId))
    .map((t) => t.id)
}
