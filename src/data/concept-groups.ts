import type { ConceptId } from './research-topics'

export interface ConceptGroup {
  id: ConceptId
  name: string
  description: string
  /** Topic IDs in this concept */
  topics: string[]
}

export const conceptGroups: ConceptGroup[] = [
  {
    id: 'demographic',
    name: 'Demographics',
    description: "Europe's aging population crisis",
    topics: ['T1.1', 'T2.4', 'T3.4'],
  },
  {
    id: 'language',
    name: 'Language',
    description: 'English adoption and linguistic integration',
    topics: ['T1.4', 'T2.1', 'T3.4'],
  },
  {
    id: 'egov',
    name: 'e-Government',
    description: 'Digital public services and administration',
    topics: ['T1.3', 'T2.2', 'T3.1', 'T3.2', 'T3.5', 'T4.2', 'T4.3'],
  },
  {
    id: 'blockchain',
    name: 'Blockchain',
    description: 'Distributed ledger tech for government and finance',
    topics: ['T2.2', 'T2.3', 'T3.2', 'T3.5'],
  },
  {
    id: 'payment',
    name: 'Payments',
    description: 'Financial integration and digital currencies',
    topics: ['T2.3'],
  },
  {
    id: 'transportation',
    name: 'Transportation',
    description: 'Autonomous vehicles and logistics',
    topics: ['T2.5', 'T2.6', 'T4.4'],
  },
  {
    id: 'robotics',
    name: 'Robotics',
    description: 'Automation and reindustrialization',
    topics: ['T1.1', 'T2.4', 'T2.5', 'T2.6', 'T3.3', 'T4.1', 'T4.4'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Predictive medicine and health data',
    topics: ['T1.1', 'T2.4', 'T3.1'],
  },
  {
    id: 'education',
    name: 'Education',
    description: 'e-Learning, skills certification, retraining',
    topics: ['T1.4', 'T2.1', 'T2.6', 'T3.1', 'T4.3', 'T4.4'],
  },
  {
    id: 'security',
    name: 'Tech Sovereignty',
    description: 'Cybersecurity and digital independence',
    topics: ['T1.2', 'T1.3', 'T1.5', 'T2.2', 'T2.3', 'T3.2', 'T3.3', 'T3.5'],
  },
  {
    id: 'migration',
    name: 'Migration',
    description: 'Digital borders and economic migration',
    topics: ['T1.1', 'T1.4', 'T1.5', 'T3.4', 'T4.2'],
  },
  {
    id: 'environment',
    name: 'Environment',
    description: 'Green digital infrastructure',
    topics: ['T4.1'],
  },
  {
    id: 'labor',
    name: 'Labor',
    description: 'Job displacement and workforce transitions',
    topics: ['T2.5', 'T4.4'],
  },
  {
    id: 'privacy',
    name: 'Privacy',
    description: 'GDPR, consent, and trust in digital systems',
    topics: ['T3.5', 'T4.2'],
  },
]
