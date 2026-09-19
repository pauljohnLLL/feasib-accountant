// ---------------------------------------------------------------------------
// Shared data constants extracted from LandingPage.tsx
// ---------------------------------------------------------------------------

export const chartBars = [22, 34, 28, 45, 38, 52, 60, 55, 70, 66, 82, 90];

export interface ServiceItem {
  id: number;
  title: string;
  inclusions: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: 'Financial Assumption',
    inclusions: [
      'General Assumptions',
      'Asset Assumptions',
      'Liability Assumptions',
      'Equity Assumptions',
      'Revenue Assumptions',
      'Expense Assumptions',
    ],
  },
  {
    id: 2,
    title: 'Projected Financial Statements',
    inclusions: [
      'Statement of Financial Position / Balance Sheet',
      'Statement of Comprehensive Income / Income Statement / Profit and Loss Statement',
      'Statement of Cash Flows',
      'Statement of Changes in Equity',
    ],
  },
  {
    id: 3,
    title: 'Notes to the Financial Statements',
    inclusions: [
      'Notes for Income Statement Accounts',
      'Notes for Balance Sheet Accounts',
      'Notes for Cash Flow',
    ],
  },
  {
    id: 4,
    title: 'Initial Capital Requirement',
    inclusions: ['Capital Expenditures', 'Initial Working Capital', 'Pre-Operating Expenses'],
  },
  {
    id: 5,
    title: "Employee's Payroll",
    inclusions: [
      'Employee Salary',
      'Employee Benefits',
      '13th Month Pay',
      'SSS Contribution',
      'PhilHealth Contribution',
      'Pag-IBIG Contribution',
      'De Minimis Benefits',
    ],
  },
  {
    id: 6,
    title: 'Financial Ratios',
    inclusions: ['Liquidity Ratio', 'Efficiency Ratio', 'Solvency Ratio', 'Profitability Ratio'],
  },
  {
    id: 7,
    title: 'Cost-Volume-Profit Analysis',
    inclusions: ['Break-Even Point Analysis', 'Sensitivity Analysis'],
  },
  {
    id: 8,
    title: 'Capital Budgeting (Time Value of Money)',
    inclusions: [
      'Discounted Payback Period',
      'Undiscounted Payback Period',
      'Net Present Value',
      'Profitability Index',
      'Internal Rate of Return',
    ],
  },
  {
    id: 9,
    title: 'Feasibility Study Assistance (Other than Financial)',
    inclusions: [
      'Survey Questionnaire Writing and/or Validation',
      'Demand and Supply Analysis',
      'Assistance to non-financial-related chapters of the study',
      'Slide Presentations',
      'English Grammar and Plagiarism Checking',
    ],
  },
];

export interface FreeService {
  title: string;
  desc: string;
}

export const freeServicesData: FreeService[] = [
  {
    title: 'Financial Aspect Walkthrough',
    desc: 'A thorough explanation of how the output was computed/prepared. This will be done via MS Teams meeting and is recorded for the clients to rewatch as needed.',
  },
  {
    title: 'Revisions',
    desc: 'No charge for any minor revisions before and after the defense, given that it has not been repeatedly revised. Please refer to the revision policy for more details.',
  },
  {
    title: 'Feasibility Study Consultation',
    desc: 'Check and review your papers for any commonly revised items, then suggest the necessary corrections. Give some advice on how to ace their defense.',
  },
  {
    title: 'Other Assistance',
    desc: 'Assistance for other matters may vary depending on the service availed. Please refer to the pricing terms and conditions for more details.',
  },
];

export interface ServiceFlowStep {
  num: string;
  title: string;
  short: string;
  desc: string;
  image: string;
}

export const serviceFlowSteps: ServiceFlowStep[] = [
  {
    num: '01',
    title: 'Inquiry',
    short: 'Discuss your needs',
    desc: 'To clarify what outputs do you need and its requirements. Our team will check and review your available data as needed. Read and agree to our service terms and conditions.',
    image: 'Inquiryimage.png',
  },
  {
    num: '02',
    title: 'Initial Payment',
    short: 'Downpayment lock-in',
    desc: 'Once confirmed and accepted by the team, 50% down payment should be settled.',
    image: 'Initialpaymentimage.png',
  },
  {
    num: '03',
    title: 'Document Preparation',
    short: 'Drafting your file',
    desc: 'Once the necessary data has been sent and the down payment has been settled, assigned preparer will start the output. Our team will provide estimated time of completion for the draft output.',
    image: 'Documentpreparationimage.png',
  },
  {
    num: '04',
    title: 'Consultation Meeting',
    short: 'Progress review',
    desc: 'After preparation of the draft output, you/your group will be scheduled for a meeting to finalize and explain the output.',
    image: 'Consultationmeetingimage.png',
  },
  {
    num: '05',
    title: 'Final Payment',
    short: 'Balance clearance',
    desc: 'After the meeting, the finalized output and the recording will be sent by our team. Once the file is received, the payment balance should be settled.',
    image: 'Finalpaymentimage.png',
  },
  {
    num: '06',
    title: 'Revisions',
    short: 'Final adjustments',
    desc: "Just message our page for any revisions, if there's any. Revisions may or may not be conducted during a meeting, subject to agreement of both parties.",
    image: 'Revisionimage.png',
  },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
}

export const testimonialsData: Testimonial[] = [
  {
    name: 'Ma. Cristina Reyes',
    role: 'Business Admin Student',
    quote: 'Their feasibility work is so detailed. My panel was impressed with the sensitivity analysis!',
    initials: 'CR',
  },
  {
    name: 'Robert Santos',
    role: 'SME Owner',
    quote: 'The BIR tax mapping saved my business from penalties. Very professional and worth every cent.',
    initials: 'RS',
  },
  {
    name: 'Kevin Dela Cruz',
    role: 'MBA Graduate',
    quote: 'I recommend them for anyone struggling with financial forecasting. They make it simple to understand.',
    initials: 'KD',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    question: 'How long does a feasibility study take?',
    answer:
      'The timeline depends on the complexity of your study and the availability of your data. On average, it takes about 1 to 2 weeks for the initial draft, followed by a consultation meeting and final revisions.',
  },
  {
    question: 'Can you help with BIR registration?',
    answer:
      'We focus primarily on the Financial Aspect computations for feasibility studies. However, if you need non-financial assistance like BIR registration guidelines, we can point you to the right resources.',
  },
  {
    question: 'Do you provide the Excel files?',
    answer:
      'Yes! We provide the finalized Financial Aspect in both PDF format for submission and the raw Excel files so you can see the formulas and data sources behind the computations.',
  },
  {
    question: 'What are your payment terms?',
    answer:
      'We require a 50% downpayment to lock in your slot and begin drafting. The remaining 50% balance is due once the final output has been presented and approved during the consultation meeting.',
  },
];

export interface FinancialToolItem {
  id: string;
  iconType: 'sigma' | 'barchart' | 'hourglass' | 'trend' | 'folder' | 'sparkle';
  title: string;
  description: string;
  isMaster?: boolean;
  badge?: string;
}

export const financialToolsData: FinancialToolItem[] = [
  {
    id: 'slovins',
    iconType: 'sigma',
    title: "Slovin's Calculator",
    description:
      'Determine statistically significant sample sizes for market research to ensure your data representative of the target population.',
  },
  {
    id: 'supply-demand',
    iconType: 'barchart',
    title: 'Supply & Demand Architect',
    description:
      'Map market equilibrium and identify critical gaps in unit capacity through advanced econometric modeling.',
  },
  {
    id: 'payback-period',
    iconType: 'hourglass',
    title: 'Payback Period Analysis',
    description:
      'Calculate capital recovery timeframes with precise 10-year cash flow projections and NPV integration.',
  },
  {
    id: 'break-even',
    iconType: 'trend',
    title: 'Break-Even Point Analysis',
    description:
      'Identify the exact sales volume needed to cover all operational costs and reach profitability milestones.',
  },
  {
    id: 'financial-ratios',
    iconType: 'folder',
    title: 'Financial Ratio Intelligence',
    description:
      'Assess liquidity, solvency, efficiency, and profitability metrics instantly through a comprehensive suite of KPIs.',
  },
  {
    id: 'fina-ai',
    iconType: 'sparkle',
    title: 'FINA AI Strategic Synthesis',
    isMaster: true,
    badge: 'MASTER TOOL',
    description:
      'AI-powered engine that synthesizes all calculator data into a final, comprehensive feasibility verdict with executive summaries.',
  },
];
