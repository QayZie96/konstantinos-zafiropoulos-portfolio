export const projects = {
    rocketeers: {
        title: "Rocketeers overview",
        href: "/projects/rocketeers/",
    },
    operations: {
        title: "Business & Marketplace Operations",
        href: "/projects/rocketeers/business-operations/",
    },
    repricing: {
        title: "Marketplace Repricing Engine",
        href: "/projects/rocketeers/repricing/",
    },
    finance: {
        title: "Financial & Operations Tracker",
        href: "/projects/rocketeers/financial-tracker/",
    },
    gym: {
        title: "Gym Progress System",
        href: "/projects/gym-progress/",
    },
    aiOutreach: {
        title: "AI Job Discovery & Outreach",
        href: "/projects/ai-job-outreach/",
    },
    rame: {
        title: "RAMÉ Creative Space",
        href: "/projects/rame/",
    },
    portfolio: {
        title: "This Astro portfolio",
        href: "/",
    },
} as const;

export type ProjectId = keyof typeof projects;

export const umbrellas = [
    {
        id: "operations-ecommerce",
        title: "Operations & E-commerce",
        description:
            "Running a multi-year marketplace business and improving the systems behind pricing, inventory, fulfilment, customer support, and seller performance.",
    },
    {
        id: "excel-vba-analytics",
        title: "Excel, VBA & Analytics",
        description:
            "Building practical workbooks, reporting systems, dashboards, automated charts, and data-quality controls around real operating needs.",
    },
    {
        id: "ai-automation",
        title: "AI Implementation & Automation",
        description:
            "Connecting LLMs to defined workflow steps with structured prompts, validation, caching, and deliberate human review.",
    },
    {
        id: "python-data-web",
        title: "Python, Data & Web",
        description:
            "Using Python, APIs, databases, WordPress, e-commerce integrations, and modern web tools to build useful end-to-end systems.",
    },
] as const;

export type UmbrellaId = (typeof umbrellas)[number]["id"];

type SkillDefinition = {
    id: string;
    label: string;
    umbrella: UmbrellaId;
    description: string;
    projects: ProjectId[];
};

export const skills = [
    {
        id: "marketplace-operations",
        label: "Marketplace Operations",
        umbrella: "operations-ecommerce",
        description: "End-to-end operation of listings, inventory, pricing, orders, fulfilment, support, disputes, and marketplace performance.",
        projects: ["rocketeers", "operations", "repricing"],
    },
    {
        id: "ecommerce-operations",
        label: "E-commerce Operations",
        umbrella: "operations-ecommerce",
        description: "Practical ownership of a digital commerce operation across eBay and Gameflip, from catalogue maintenance to customer outcomes.",
        projects: ["rocketeers", "operations"],
    },
    {
        id: "ecommerce-site-configuration",
        label: "E-commerce Site Configuration",
        umbrella: "operations-ecommerce",
        description: "Structuring product discovery, categories, cart interactions, and inquiry routes around a real WooCommerce storefront.",
        projects: ["rame"],
    },
    {
        id: "business-ownership",
        label: "Business Ownership",
        umbrella: "operations-ecommerce",
        description: "Seven years of direct responsibility for commercial decisions, daily execution, service quality, and process improvement.",
        projects: ["rocketeers", "operations", "finance"],
    },
    {
        id: "customer-operations",
        label: "Customer Operations",
        umbrella: "operations-ecommerce",
        description: "Order support, issue resolution, clear customer communication, and consistent service across thousands of transactions.",
        projects: ["rocketeers", "operations"],
    },
    {
        id: "pricing-operations",
        label: "Pricing Operations",
        umbrella: "operations-ecommerce",
        description: "Combining market references, rules, margin awareness, and human judgement to maintain large variation catalogues.",
        projects: ["rocketeers", "operations", "repricing"],
    },
    {
        id: "inventory-management",
        label: "Inventory Management",
        umbrella: "operations-ecommerce",
        description: "Maintaining structured digital inventory and availability across a catalogue containing more than 10,000 items.",
        projects: ["rocketeers", "operations", "finance"],
    },
    {
        id: "order-management",
        label: "Order Management",
        umbrella: "operations-ecommerce",
        description: "Handling order flow and fulfilment reliably while maintaining accurate records and customer communication.",
        projects: ["operations"],
    },
    {
        id: "seller-performance",
        label: "Seller Performance",
        umbrella: "operations-ecommerce",
        description: "Monitoring marketplace standards and protecting service quality across 23,000+ items sold with no negative feedback.",
        projects: ["rocketeers", "operations"],
    },
    {
        id: "dispute-resolution",
        label: "Dispute Resolution",
        umbrella: "operations-ecommerce",
        description: "Resolving marketplace cases and customer issues through evidence, clear communication, and customer-first judgement.",
        projects: ["operations"],
    },
    {
        id: "process-improvement",
        label: "Process Improvement",
        umbrella: "operations-ecommerce",
        description: "Identifying recurring operational friction and turning manual work into clearer, faster, and more repeatable processes.",
        projects: ["rocketeers", "operations", "repricing"],
    },
    {
        id: "commercial-analysis",
        label: "Commercial Analysis",
        umbrella: "operations-ecommerce",
        description: "Using sales, pricing, fee, inventory, and channel information to support day-to-day commercial decisions.",
        projects: ["rocketeers", "finance"],
    },
    {
        id: "commercial-operations",
        label: "Commercial Operations",
        umbrella: "operations-ecommerce",
        description: "Connecting operational activity with sales, fees, stock, channel performance, and approximate profitability.",
        projects: ["finance"],
    },
    {
        id: "operational-scaling",
        label: "Operational Scaling",
        umbrella: "operations-ecommerce",
        description: "Designing repeatable workflows able to support thousands of listings, variations, and customer transactions.",
        projects: ["rocketeers", "operations", "repricing"],
    },
    {
        id: "decision-making",
        label: "Commercial Decision-Making",
        umbrella: "operations-ecommerce",
        description: "Balancing available data with sourcing constraints, scarcity, customer impact, and commercial priorities.",
        projects: ["rocketeers", "operations", "repricing"],
    },
    {
        id: "sales-tracking",
        label: "Sales Tracking",
        umbrella: "operations-ecommerce",
        description: "Structuring historical sales and order activity so performance could be reviewed by month and channel.",
        projects: ["finance"],
    },
    {
        id: "revenue-monitoring",
        label: "Revenue Monitoring",
        umbrella: "operations-ecommerce",
        description: "Monitoring recorded turnover alongside operational drivers while keeping historical scope explicit.",
        projects: ["finance"],
    },
    {
        id: "channel-analysis",
        label: "Channel Analysis",
        umbrella: "operations-ecommerce",
        description: "Comparing marketplace and trading activity across the channels represented in the surviving workbook.",
        projects: ["finance"],
    },
    {
        id: "variation-management",
        label: "Variation Management",
        umbrella: "operations-ecommerce",
        description: "Maintaining consistent ordering and price alignment across complex multi-variation marketplace listings.",
        projects: ["repricing"],
    },
    {
        id: "bulk-marketplace-updates",
        label: "Bulk Marketplace Updates",
        umbrella: "operations-ecommerce",
        description: "Preparing, transferring, uploading, and reviewing large eBay FileExchange price revisions.",
        projects: ["repricing"],
    },
    {
        id: "ebay-fileexchange",
        label: "eBay FileExchange",
        umbrella: "operations-ecommerce",
        description: "Using structured FileExchange inputs and response files to apply and verify bulk listing revisions.",
        projects: ["repricing"],
    },
    {
        id: "excel",
        label: "Excel",
        umbrella: "excel-vba-analytics",
        description: "Building multi-sheet operational systems for pricing, financial tracking, inventory, and workout analytics.",
        projects: ["rocketeers", "repricing", "finance", "gym"],
    },
    {
        id: "vba",
        label: "VBA",
        umbrella: "excel-vba-analytics",
        description: "Automating chart creation, controls, navigation, and repeated workbook logic in the Gym Progress System.",
        projects: ["gym"],
    },
    {
        id: "web-queries",
        label: "Excel Web Queries",
        umbrella: "excel-vba-analytics",
        description: "Bringing external pricing references into an Excel-based repricing workflow for further review and transformation.",
        projects: ["repricing"],
    },
    {
        id: "data-transformation",
        label: "Data Transformation",
        umbrella: "excel-vba-analytics",
        description: "Normalizing and reshaping raw source data into structures suitable for analysis, matching, and bulk operations.",
        projects: ["repricing", "aiOutreach"],
    },
    {
        id: "data-quality",
        label: "Data Quality",
        umbrella: "excel-vba-analytics",
        description: "Checking mappings, numeric values, week headers, missing pairs, and bulk-update outputs before relying on results.",
        projects: ["repricing", "gym"],
    },
    {
        id: "error-reduction",
        label: "Error Reduction",
        umbrella: "excel-vba-analytics",
        description: "Adding structured checks and repeatable steps to reduce misalignment and manual mistakes in bulk pricing work.",
        projects: ["repricing"],
    },
    {
        id: "data-modelling",
        label: "Data Modelling",
        umbrella: "excel-vba-analytics",
        description: "Organizing current and historical workout records so consistent calculations and chart views can be generated.",
        projects: ["gym"],
    },
    {
        id: "data-visualisation",
        label: "Data Visualisation",
        umbrella: "excel-vba-analytics",
        description: "Designing readable progress charts and summary views around best-set, volume, and overall progression data.",
        projects: ["gym"],
    },
    {
        id: "dashboards",
        label: "Dashboard Design",
        umbrella: "excel-vba-analytics",
        description: "Creating a system-level progress dashboard and operational reporting views for fast interpretation.",
        projects: ["gym", "finance"],
    },
    {
        id: "financial-analysis",
        label: "Basic Financial Analysis",
        umbrella: "excel-vba-analytics",
        description: "Tracking historical turnover, fees, transactions, cancellations, and an internal approximate operating-profit measure.",
        projects: ["finance"],
    },
    {
        id: "operational-reporting",
        label: "Operational Reporting",
        umbrella: "excel-vba-analytics",
        description: "Turning detailed operating records into monthly summaries and decision-oriented views.",
        projects: ["finance", "gym"],
    },
    {
        id: "excel-automation",
        label: "Excel Automation",
        umbrella: "excel-vba-analytics",
        description: "Reducing repetitive workbook interaction through VBA-driven charts, buttons, and reusable analysis logic.",
        projects: ["gym"],
    },
    {
        id: "debugging",
        label: "Debugging",
        umbrella: "excel-vba-analytics",
        description: "Tracing data, formula, macro, integration, and workflow failures across Excel and Python projects.",
        projects: ["gym", "aiOutreach"],
    },
    {
        id: "interface-design",
        label: "Interface Design",
        umbrella: "excel-vba-analytics",
        description: "Designing workbook controls and views so a technically complex system remains straightforward to use.",
        projects: ["gym"],
    },
    {
        id: "system-architecture",
        label: "System Architecture",
        umbrella: "excel-vba-analytics",
        description: "Separating source data, historical mappings, controls, calculations, and presentation layers into a maintainable system.",
        projects: ["gym", "aiOutreach"],
    },
    {
        id: "iterative-development",
        label: "Iterative Development",
        umbrella: "excel-vba-analytics",
        description: "Improving working systems through repeated testing, feedback, diagnostics, and usability refinements.",
        projects: ["gym", "portfolio", "rame"],
    },
    {
        id: "ai-workflow-implementation",
        label: "AI Workflow Implementation",
        umbrella: "ai-automation",
        description: "Using an LLM for bounded suitability evaluation and outreach drafting inside a wider deterministic workflow.",
        projects: ["aiOutreach"],
    },
    {
        id: "google-gemini",
        label: "Google Gemini",
        umbrella: "ai-automation",
        description: "Integrating Gemini into a Python workflow through configurable prompts and structured responses.",
        projects: ["aiOutreach"],
    },
    {
        id: "prompt-design",
        label: "Prompt Design",
        umbrella: "ai-automation",
        description: "Defining clear evaluation criteria, input context, and output requirements for repeatable LLM-assisted steps.",
        projects: ["aiOutreach"],
    },
    {
        id: "structured-ai-outputs",
        label: "Structured AI Outputs",
        umbrella: "ai-automation",
        description: "Requesting machine-readable LLM responses so downstream workflow steps can validate and use them safely.",
        projects: ["aiOutreach"],
    },
    {
        id: "output-validation",
        label: "Output Validation",
        umbrella: "ai-automation",
        description: "Checking AI responses and workflow results before they are saved or presented for human review.",
        projects: ["aiOutreach"],
    },
    {
        id: "human-oversight",
        label: "Human Oversight",
        umbrella: "ai-automation",
        description: "Keeping final outreach decisions and message approval with a person rather than sending automatically.",
        projects: ["aiOutreach"],
    },
    {
        id: "deduplication",
        label: "Deduplication",
        umbrella: "ai-automation",
        description: "Preventing repeated processing by normalizing vacancy records and checking previously saved jobs.",
        projects: ["aiOutreach"],
    },
    {
        id: "caching",
        label: "Caching",
        umbrella: "ai-automation",
        description: "Using persistent SQLite records to avoid unnecessary repeat AI evaluation of known vacancies.",
        projects: ["aiOutreach"],
    },
    {
        id: "workflow-automation",
        label: "Workflow Automation",
        umbrella: "ai-automation",
        description: "Connecting data retrieval, filtering, AI evaluation, draft generation, storage, and scheduling into one workflow.",
        projects: ["aiOutreach"],
    },
    {
        id: "python",
        label: "Python",
        umbrella: "python-data-web",
        description: "Building a modular automation that retrieves, normalizes, filters, evaluates, and stores job data.",
        projects: ["aiOutreach"],
    },
    {
        id: "rest-api-integration",
        label: "REST API Integration",
        umbrella: "python-data-web",
        description: "Retrieving job data from Arbeitnow, Remotive, and Adzuna and connecting external AI and spreadsheet services.",
        projects: ["aiOutreach"],
    },
    {
        id: "sqlite",
        label: "SQLite",
        umbrella: "python-data-web",
        description: "Persisting evaluated vacancy state locally to support validation and efficient repeat runs.",
        projects: ["aiOutreach"],
    },
    {
        id: "data-normalization",
        label: "Data Normalization",
        umbrella: "python-data-web",
        description: "Converting different job-source schemas into one consistent internal record structure.",
        projects: ["aiOutreach"],
    },
    {
        id: "google-sheets-api",
        label: "Google Sheets API",
        umbrella: "python-data-web",
        description: "Checking saved vacancies and writing qualifying results to a structured Google Sheets dashboard.",
        projects: ["aiOutreach"],
    },
    {
        id: "google-apps-script",
        label: "Google Apps Script",
        umbrella: "python-data-web",
        description: "Supporting the spreadsheet-facing workflow and presentation of saved automation results.",
        projects: ["aiOutreach"],
    },
    {
        id: "powershell",
        label: "PowerShell",
        umbrella: "python-data-web",
        description: "Providing a repeatable Windows execution wrapper for the local automation.",
        projects: ["aiOutreach"],
    },
    {
        id: "task-scheduling",
        label: "Task Scheduling",
        umbrella: "python-data-web",
        description: "Configuring the automation for daily execution with Windows Task Scheduler while retaining manual review.",
        projects: ["aiOutreach"],
    },
    {
        id: "html-css",
        label: "HTML & CSS",
        umbrella: "python-data-web",
        description: "Building semantic, responsive portfolio pages and reusable visual components with custom styling.",
        projects: ["portfolio", "rame"],
    },
    {
        id: "wordpress",
        label: "WordPress",
        umbrella: "python-data-web",
        description: "Developing and administering a client website with WordPress, including page construction, configuration, local testing, and ongoing refinement.",
        projects: ["rame"],
    },
    {
        id: "woocommerce",
        label: "WooCommerce",
        umbrella: "python-data-web",
        description: "Configuring a practical store experience across product presentation, categories, cart behaviour, and related shopping settings.",
        projects: ["rame"],
    },
    {
        id: "elementor",
        label: "Elementor",
        umbrella: "python-data-web",
        description: "Building responsive client-facing pages and reusable content sections with Elementor while following an established visual direction.",
        projects: ["rame"],
    },
    {
        id: "theme-customization",
        label: "Theme & CSS Customization",
        umbrella: "python-data-web",
        description: "Adapting Blocksy, Elementor, and plugin interfaces with targeted CSS so the storefront feels visually coherent.",
        projects: ["rame"],
    },
    {
        id: "plugin-integration",
        label: "WordPress Plugin Integration",
        umbrella: "python-data-web",
        description: "Selecting, configuring, and styling focused plugins while considering overlap, compatibility, and maintenance burden.",
        projects: ["rame"],
    },
    {
        id: "inquiry-workflows",
        label: "Form & Inquiry Workflows",
        umbrella: "python-data-web",
        description: "Turning open-ended custom-product requests into a structured inquiry flow with useful specification fields.",
        projects: ["rame"],
    },
    {
        id: "wordpress-maintenance",
        label: "WordPress Maintenance",
        umbrella: "python-data-web",
        description: "Supporting an evolving site through backups, plugin reviews, compatibility checks, and local-environment troubleshooting.",
        projects: ["rame"],
    },
    {
        id: "client-requirements",
        label: "Client Requirements Translation",
        umbrella: "python-data-web",
        description: "Translating a client's visual references and functional requests into practical pages, interactions, and iterative improvements.",
        projects: ["rame"],
    },
    {
        id: "local-wordpress-development",
        label: "Local WordPress Development",
        umbrella: "python-data-web",
        description: "Using WordPress Studio on Windows to maintain a separate working copy for safer experimentation and troubleshooting.",
        projects: ["rame"],
    },
    {
        id: "astro",
        label: "Astro",
        umbrella: "python-data-web",
        description: "Building this multi-page static portfolio with reusable components and centralized content data.",
        projects: ["portfolio"],
    },
    {
        id: "git-github",
        label: "Git & GitHub",
        umbrella: "python-data-web",
        description: "Using branches, commits, pull requests, and public repositories to manage and present project work.",
        projects: ["portfolio", "aiOutreach"],
    },
    {
        id: "netlify",
        label: "Netlify",
        umbrella: "python-data-web",
        description: "Deploying and reviewing the Astro portfolio through a Git-connected static hosting workflow.",
        projects: ["portfolio"],
    },
    {
        id: "responsive-web-design",
        label: "Responsive Web Design",
        umbrella: "python-data-web",
        description: "Adapting navigation, typography, project cards, galleries, and content layouts for narrow screens.",
        projects: ["portfolio", "rame"],
    },
    {
        id: "documentation",
        label: "Documentation",
        umbrella: "python-data-web",
        description: "Documenting setup, workflow decisions, limitations, and human-review boundaries for practical reuse.",
        projects: ["aiOutreach"],
    },
] satisfies SkillDefinition[];

export type SkillId = (typeof skills)[number]["id"];

export const skillById = Object.fromEntries(
    skills.map((skill) => [skill.id, skill]),
) as Record<SkillId, (typeof skills)[number]>;

export function getSkill(id: string) {
    const skill = skillById[id as SkillId];

    if (!skill) {
        throw new Error(`Unknown skill id: ${id}`);
    }

    return skill;
}

export function skillsForUmbrella(umbrella: UmbrellaId) {
    return skills.filter((skill) => skill.umbrella === umbrella);
}
