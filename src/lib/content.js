import { IMG } from './images'

/* ------------------------------------------------------------------ */
/* DIVISION 01 — FIRE PROTECTION & SECURITY SYSTEMS                    */
/* ------------------------------------------------------------------ */
export const fireServices = [
  {
    id: 'fire-suppression',
    num: '01',
    title: 'Fire Suppression Systems',
    subtitle: 'Yard Hydrant & Sprinkler Systems',
    description:
      'Installation and project execution services for fire suppression infrastructure, including yard hydrant networks and sprinkler systems.',
    points: ['Yard hydrant networks', 'Sprinkler systems', 'Fire suppression piping', 'Industrial fire protection infrastructure'],
    image: IMG.fireSuppression,
    icon: 'Flame',
    link: '/services/fire-protection#fire-suppression',
  },
  {
    id: 'fm-200',
    num: '02',
    title: 'FM-200 Gas Suppression System',
    subtitle: 'Clean Agent Fire Suppression',
    description:
      'Specialized gas-based fire suppression systems for applications requiring dedicated, engineered fire protection solutions.',
    points: ['Clean-agent suppression', 'FM-200 cylinder installations', 'Control & release infrastructure', 'Engineered system execution'],
    image: IMG.fm200,
    icon: 'Cylinder',
    link: '/services/fire-protection#fm-200',
  },
  {
    id: 'fire-detection',
    num: '03',
    title: 'Addressable Fire Detection & Alarm',
    subtitle: 'Detection & Alarm Infrastructure',
    description:
      'Fire detection, addressable systems, alarm installations and complete fire alarm infrastructure for buildings and facilities.',
    points: ['Addressable panels', 'Smoke & heat detectors', 'Alarm installations', 'Notification infrastructure'],
    image: IMG.detection,
    icon: 'Siren',
    link: '/services/fire-protection#fire-detection',
  },
  {
    id: 'cctv',
    num: '04',
    title: 'Security & Surveillance — CCTV',
    subtitle: 'Monitoring & Surveillance',
    description:
      'Security and surveillance solutions designed for commercial and industrial environments requiring reliable monitoring.',
    points: ['CCTV camera systems', 'Surveillance infrastructure', 'Monitoring systems', 'Security camera installation'],
    image: IMG.cctv,
    icon: 'Cctv',
    link: '/services/fire-protection#cctv',
  },
  {
    id: 'public-address',
    num: '05',
    title: 'Public Address & Access Control',
    subtitle: 'Communication & Entry Management',
    description:
      'Integrated communication and access management systems for buildings, campuses and industrial facilities.',
    points: ['Public address systems', 'Audio communication', 'Access control', 'Entry management systems'],
    image: IMG.access,
    icon: 'Megaphone',
    link: '/services/fire-protection#public-address',
  },
  {
    id: 'nurse-call',
    num: '06',
    title: 'Nurse Call System',
    subtitle: 'Healthcare Communication',
    description:
      'Nurse call and communication systems for healthcare and care environments requiring dependable patient–staff connectivity.',
    points: ['Patient call systems', 'Nurse station communication', 'Call buttons', 'Communication infrastructure'],
    image: IMG.nurseCall,
    icon: 'Bell',
    link: '/services/fire-protection#nurse-call',
  },
]

/* ------------------------------------------------------------------ */
/* DIVISION 02 — HEAVY ENGINEERING                                     */
/* ------------------------------------------------------------------ */
export const heavyServices = [
  {
    id: 'steel-fabrication',
    num: '01',
    title: 'Steel Structural Fabrication & Erection',
    subtitle: 'Structure Fabrication and Installation',
    description:
      'Steel structural fabrication, sheet metal fabrication, structural installation and erection work carried out to project requirements.',
    points: ['Steel structures', 'Structural fabrication', 'Sheet metal fabrication', 'Structural erection'],
    image: IMG.steel,
    icon: 'Building2',
    link: '/services/heavy-engineering#steel-fabrication',
  },
  {
    id: 'sheet-metal',
    num: '02',
    title: 'Sheet Metal Fabrication & Erection',
    subtitle: 'Fabricated Components & Installation',
    description:
      'Fabrication and erection services covering sheet metal works and general industrial fabrication requirements.',
    points: ['Sheet metal fabrication', 'Fabricated components', 'Industrial fabrication', 'Installation & erection'],
    image: IMG.sheetMetal,
    icon: 'Layers',
    link: '/services/heavy-engineering#sheet-metal',
  },
  {
    id: 'piping',
    num: '03',
    title: 'Utility & Process Piping',
    subtitle: 'SS · CS · MS Piping Systems',
    description:
      'Utility and process piping systems executed across different material specifications for industrial and commercial plants.',
    points: ['Utility pipelines', 'Process piping', 'Stainless steel piping — SS', 'Carbon steel piping — CS', 'Mild steel piping — MS'],
    image: IMG.piping,
    icon: 'GitBranch',
    link: '/services/heavy-engineering#piping',
  },
  {
    id: 'water-supply',
    num: '04',
    title: 'Water Supply & Sanitary Installation',
    subtitle: 'Water Infrastructure & Plumbing',
    description:
      'Water infrastructure, supply systems and sanitary installation work for commercial and industrial projects.',
    points: ['Water supply networks', 'Plumbing infrastructure', 'Sanitary installation', 'Distribution systems'],
    image: IMG.water,
    icon: 'Droplets',
    link: '/services/heavy-engineering#water-supply',
  },
  {
    id: 'water-treatment',
    num: '05',
    title: 'Water Treatment Plants & STPI RO Systems',
    subtitle: 'Treatment & Purification Systems',
    description:
      'Water treatment infrastructure and specialized RO systems installed and commissioned for project requirements.',
    points: ['Water treatment plants', 'RO systems', 'Water purification infrastructure', 'Treatment system installation'],
    image: IMG.treatment,
    icon: 'Filter',
    link: '/services/heavy-engineering#water-treatment',
  },
  {
    id: 'demolition',
    num: '06',
    title: 'Demolition, Dismantling & Sifting Work',
    subtitle: 'Site Preparation & Material Removal',
    description:
      'Specialized demolition, dismantling, debris handling and site clearance related work carried out in a controlled manner.',
    points: ['Demolition', 'Dismantling', 'Site preparation', 'Material removal', 'Sifting work'],
    image: IMG.demolition,
    icon: 'Hammer',
    link: '/services/heavy-engineering#demolition',
  },
]

/* ------------------------------------------------------------------ */
/* DIVISION OVERVIEW CARDS                                             */
/* ------------------------------------------------------------------ */
export const divisions = [
  {
    num: '01',
    title: 'Fire Protection & Security Systems',
    description:
      'Comprehensive fire protection, detection, suppression and security solutions supporting safety, monitoring and protection requirements.',
    image: IMG.divisionFire,
    link: '/services/fire-protection',
    items: [
      'Fire Suppression',
      'FM-200',
      'Fire Detection & Alarm',
      'CCTV Surveillance',
      'Public Address',
      'Access Control',
      'Nurse Call',
    ],
  },
  {
    num: '02',
    title: 'Heavy Engineering',
    description:
      'Fabrication, structural erection, piping systems, utilities, water infrastructure, treatment systems and specialized industrial execution.',
    image: IMG.divisionHeavy,
    link: '/services/heavy-engineering',
    items: [
      'Steel Fabrication',
      'Structural Erection',
      'Sheet Metal',
      'Process Piping',
      'Utility Piping',
      'Water Infrastructure',
      'Demolition & Dismantling',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* INDUSTRIES                                                          */
/* ------------------------------------------------------------------ */
export const industries = [
  {
    title: 'Shopping Malls',
    description: 'Integrated fire protection, security and services infrastructure for large retail environments.',
    image: IMG.mall,
  },
  {
    title: 'Commercial Buildings',
    description: 'Building systems execution covering protection, utilities and mechanical requirements.',
    image: IMG.commercial,
  },
  {
    title: 'Industrial Facilities',
    description: 'Heavy engineering, piping and safety systems for plants and industrial sites.',
    image: IMG.industrial,
  },
  {
    title: 'Retail Showrooms',
    description: 'Detection, surveillance and services installation for retail and showroom spaces.',
    image: IMG.retail,
  },
  {
    title: 'Restaurants & Cafés',
    description: 'Kitchen-safe protection, detection and services for food & beverage outlets.',
    image: IMG.restaurant,
  },
  {
    title: 'Healthcare Facilities',
    description: 'Nurse call, detection and utility systems for hospitals and care environments.',
    image: IMG.healthcare,
  },
  {
    title: 'Offices & Corporate Spaces',
    description: 'Access control, surveillance and services for corporate workplaces.',
    image: IMG.office,
  },
  {
    title: 'Infrastructure Projects',
    description: 'Fabrication, piping and project execution for large-scale infrastructure works.',
    image: IMG.infrastructure,
  },
]

/* ------------------------------------------------------------------ */
/* PROJECTS                                                            */
/* Placeholders — replace with verified project information only.      */
/* ------------------------------------------------------------------ */
export const projectFilters = [
  'All Projects',
  'Fire Protection',
  'Security',
  'Heavy Engineering',
  'Fabrication',
  'Piping',
  'Water Systems',
  'Commercial Projects',
]

export const projects = [
  {
    id: 1,
    name: 'Fire Suppression Network — Placeholder Project',
    category: 'Fire Protection',
    scope: 'Yard Hydrant · Sprinkler Piping · System Execution',
    location: 'Location to be updated',
    image: IMG.proj1,
    featured: true,
  },
  {
    id: 2,
    name: 'Addressable Detection & Alarm — Placeholder Project',
    category: 'Fire Protection',
    scope: 'Addressable Panels · Detectors · Alarm Infrastructure',
    location: 'Location to be updated',
    image: IMG.proj3,
  },
  {
    id: 3,
    name: 'CCTV & Access Control — Placeholder Project',
    category: 'Security',
    scope: 'CCTV Surveillance · Access Control · Monitoring',
    location: 'Location to be updated',
    image: IMG.proj4,
  },
  {
    id: 4,
    name: 'Steel Structural Erection — Placeholder Project',
    category: 'Heavy Engineering',
    scope: 'Structural Fabrication · Erection · Installation',
    location: 'Location to be updated',
    image: IMG.proj2,
    featured: true,
  },
  {
    id: 5,
    name: 'Sheet Metal Fabrication — Placeholder Project',
    category: 'Fabrication',
    scope: 'Sheet Metal Fabrication · Components · Erection',
    location: 'Location to be updated',
    image: IMG.proj6,
  },
  {
    id: 6,
    name: 'Utility & Process Piping — Placeholder Project',
    category: 'Piping',
    scope: 'SS / CS / MS Piping · Utility Lines · Testing',
    location: 'Location to be updated',
    image: IMG.proj5,
    featured: true,
  },
  {
    id: 7,
    name: 'Water Supply & Sanitary Works — Placeholder Project',
    category: 'Water Systems',
    scope: 'Supply Network · Sanitary Installation · Distribution',
    location: 'Location to be updated',
    image: IMG.proj8,
  },
  {
    id: 8,
    name: 'Water Treatment & RO Installation — Placeholder Project',
    category: 'Water Systems',
    scope: 'Treatment Plant · RO System · Commissioning Support',
    location: 'Location to be updated',
    image: IMG.treatment,
  },
  {
    id: 9,
    name: 'Commercial Fit-Out Services — Placeholder Project',
    category: 'Commercial Projects',
    scope: 'Protection Systems · Services · Project Execution',
    location: 'Location to be updated',
    image: IMG.proj7,
  },
]

/* ------------------------------------------------------------------ */
/* PROCESS                                                             */
/* ------------------------------------------------------------------ */
export const process = [
  { num: '01', title: 'Requirement Understanding', description: 'Understand client requirements, project scope and site conditions.' },
  { num: '02', title: 'Planning & Coordination', description: 'Plan resources, technical requirements, systems and execution methodology.' },
  { num: '03', title: 'Project Execution', description: 'Execute work according to project requirements and specifications.' },
  { num: '04', title: 'Inspection & Testing', description: 'Review installation, system requirements and execution quality.' },
  { num: '05', title: 'Project Handover', description: 'Coordinate final completion and handover.' },
]

/* ------------------------------------------------------------------ */
/* WHY CHOOSE                                                          */
/* ------------------------------------------------------------------ */
export const whyChoose = [
  {
    num: '01',
    title: 'Integrated Capabilities',
    description: 'Multiple engineering, protection, infrastructure and project services coordinated under one company.',
    icon: 'Workflow',
  },
  {
    num: '02',
    title: 'Technical Expertise',
    description: 'Solutions across fire protection, security systems, fabrication, piping and water infrastructure.',
    icon: 'Cpu',
  },
  {
    num: '03',
    title: 'Project Execution',
    description: 'Professional execution focused on project requirements and coordinated implementation.',
    icon: 'HardHat',
  },
  {
    num: '04',
    title: 'Quality & Reliability',
    description: 'A focus on workmanship, technical requirements, coordination and dependable service.',
    icon: 'BadgeCheck',
  },
]

/* ------------------------------------------------------------------ */
/* TENDER CAPABILITIES                                                 */
/* ------------------------------------------------------------------ */
export const tenderCapabilities = [
  'Engineering Contracts',
  'Fire Protection Contracts',
  'Security System Contracts',
  'Heavy Engineering Contracts',
  'Steel Fabrication',
  'Piping Contracts',
  'Water Infrastructure',
  'Commercial Project Execution',
  'Tender-Based Work',
]

/* ------------------------------------------------------------------ */
/* CONTACT — placeholders, replace with real details                   */
/* ------------------------------------------------------------------ */
export const contactInfo = {
  phone: '+91 00000 00000',
  phoneHref: 'tel:+910000000000',
  email: 'info@yadavsanitation.com',
  whatsapp: 'https://wa.me/910000000000',
  address: 'Registered office address to be updated',
  hours: 'Monday – Saturday · 09:30 – 18:30',
  mapQuery: 'Yadav Sanitation',
}

export const projectCategories = [
  'Fire Suppression',
  'Fire Detection & Alarm',
  'FM-200',
  'CCTV',
  'Public Address',
  'Access Control',
  'Nurse Call',
  'Steel Fabrication',
  'Structural Erection',
  'Sheet Metal',
  'Utility Piping',
  'Process Piping',
  'Water Supply',
  'Sanitary Installation',
  'Water Treatment',
  'Demolition',
  'Dismantling',
  'Other',
]

/* ------------------------------------------------------------------ */
/* NAVIGATION                                                          */
/* ------------------------------------------------------------------ */
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact', to: '/contact' },
]

export const heroKeywords =
  'ENGINEERING • FIRE PROTECTION • HEAVY ENGINEERING • INFRASTRUCTURE'
