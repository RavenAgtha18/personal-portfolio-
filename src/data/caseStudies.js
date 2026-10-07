/**
 * Single source of truth for strategic enterprise case studies.
 * Strictly reflects verified scope, operational workflows, and the 5 key focus areas:
 * 1. Dynamic Aging Day tracking (Protrack)
 * 2. Item Expiry and Disposal Management (Stokku)
 * 3. Monthly Output reporting (Finish-info)
 * 4. EUDR compliance & chain-of-custody documentation (SnapPack)
 * 5. Currency conversion feature (FinWise)
 */
export const caseStudies = {
  protrack: {
    number: '01',
    name: 'Protrack',
    label: 'MES / Shop-Floor Tracking',
    headline: 'Dynamic Aging Day Tracking & WIP Visibility Engine',
    problem: 'Production tracking suffered from operational blindspots and delay in detecting batches lingering at work-center bottlenecks.',
    requirements: [
      'Replace manual spreadsheet travelers with scanned route card checkpoints.',
      'Compute dynamic aging days based on entry timestamps to alert on station bottlenecks.',
      'Provide real-time WIP status across all production divisions for plant supervisors.',
    ],
    solution: 'A shop-floor MES tracking platform that maps physical batches to digital route cards, computes dynamic aging metrics, and logs station handoffs.',
    implementation: ['Laravel', 'JavaScript', 'Tailwind CSS', 'Flowbite', 'MySQL'],
    focusTopic: 'Dynamic Aging Day Tracking',
    company: 'PT. Harrison And Gil-Java',
    slug: 'protrack',
  },
  stokku: {
    number: '02',
    name: 'Stokku',
    label: 'Inventory & Materials',
    headline: 'Item Expiry and Disposal Management with FEFO Routing',
    problem: 'Warehouse materials risked expiration and production delays when shelf-life dates, low-stock thresholds, and multi-tier rack coordinates were untracked.',
    requirements: [
      'Track individual batch expiry dates with automated early-warning notifications.',
      'Enforce First-Expired, First-Out (FEFO) picking logic and digital disposal audit logging.',
      'Support inter-divisional material requisitions with automated replenishment triggers.',
    ],
    solution: 'An enterprise material lifecycle and warehouse stock control platform managing two-tier rack zoning, FEFO rotation, and audited disposal logs.',
    implementation: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
    focusTopic: 'Item Expiry & Disposal Management',
    company: 'PT. Harrison And Gil-Java',
    slug: 'stokku',
  },
  'finish-info': {
    number: '03',
    name: 'Finish-Info',
    label: 'Material Yield & MES',
    headline: 'Monthly Output Reporting & Automated Cutting Lists',
    problem: 'Manual paper blueprint interpretations created textile scrap waste and delayed monthly production output reporting for executive leadership.',
    requirements: [
      'Digitize cutting lists and fabric specifications directly to workshop terminals.',
      'Calculate fabric nesting yields dynamically to minimize raw material waste.',
      'Aggregate real-time cutting completions into standardized monthly output reports.',
    ],
    solution: 'A material control gateway combining IP-restricted terminal access, reactive fabric yield calculation, and automated monthly output reporting.',
    implementation: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
    focusTopic: 'Monthly Output Reporting & Nesting Yields',
    company: 'PT. Harrison And Gil-Java',
    slug: 'finish-info',
  },
  snappack: {
    number: '04',
    name: 'SnapPack',
    label: 'Supply Chain & Compliance',
    headline: 'EUDR Compliance Traceability & Digital Shipping Archive',
    problem: 'Manual shipping photo archiving caused documentation delays and lacked verifiable chain-of-custody records required for export audits.',
    requirements: [
      'Eliminate physical SD card transfers with instant box-to-image mobile uploads.',
      'Capture verified inspector signatures for binding export dispatch documentation.',
      'Maintain immutable chain-of-custody records to support EUDR timber traceability standards.',
    ],
    solution: 'A paperless shipping documentation system connecting warehouse packing gates to indexed cloud media archives with digital signatures.',
    implementation: ['Laravel 11', 'Vue.js 3', 'Tailwind CSS', 'MySQL'],
    focusTopic: 'EUDR Compliance Traceability',
    company: 'PT. Harrison And Gil-Java',
    slug: 'snappack',
  },
  finwise: {
    number: '05',
    name: 'FinWise',
    label: 'FinTech Intelligence',
    headline: 'Currency Conversion Engine & ACID Budget Ledger',
    problem: 'Cross-currency expenditures and fragmented budget allocations caused manual reconciliation errors and unplanned budget overruns.',
    requirements: [
      'Provide accurate multi-currency conversion and exchange rate calculations.',
      'Enforce parent-to-sub-category budget limits at the moment of transaction entry.',
      'Ensure complete ledger consistency through ACID-compliant database transactions.',
    ],
    solution: 'A financial tracking engine featuring dynamic multi-currency calculation, category budget ceilings, and interactive liquidity analytics.',
    implementation: ['Laravel', 'JavaScript', 'Tailwind CSS', 'Flowbite'],
    focusTopic: 'Currency Conversion Feature',
    company: 'Personal / FinTech',
    slug: 'finwise',
  },
};

export const caseStudyList = Object.values(caseStudies);
