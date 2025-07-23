export const useCases = [
  {
    id: 1, // Added ID for mapping
    title: "Competitive Intelligence for QuickCommerce",
    client: "One of India’s largest quick-commerce companies",
    industry: "QuickCommerce / E-commerce",
    challenge: [
      "Operating in a fast-moving, margin-sensitive market",
      "Lacked real-time visibility into competitor pricing, promotions, delivery fees, and discounting strategies",
    ],
    solution: [
      "Built a Competitive Intelligence Platform using large-scale, ethical web scraping",
      "Integrated descriptive analytics to benchmark city/zone-level fees and surcharges",
      "Predictive models to forecast competitor price shifts",
      "Prescriptive engine to optimize own pricing and promotional tactics for user cohorts",
    ],
    impact: [
      "95% accuracy in forecasting fee structure changes",
      "8–12% margin uplift via optimized pricing",
      "10–15% boost in repeat purchases in competitive zones",
    ],
    tech: "Python, AWS (Sagemaker, Glue, Redshift), React",
  },
  {
    id: 2, // Added ID for mapping
    title: "Automated Technician Dispatch System",
    client: "HVAC servicing agency (California)",
    industry: "Field Services / HVAC",
    challenge: [
      "Manual processing of service call emails",
      "Dispatcher decisions based on inconsistent, unstructured data",
      "No centralized decision logic for technician allocation",
    ],
    solution: [
      "Parsed emails using Azure AD-authenticated service",
      "Fetched job details using Vixxo API",
      "NLP engine for issue summarization & classification",
      "Automated Microsoft Dynamics GP population via stored procs",
      "Recommendation engine to suggest best-fit technicians",
    ],
    impact: [
      "End-to-end automation from email to technician assignment",
      "100% reduction in manual processing time",
      "Increased accuracy and consistency in dispatching",
    ],
    tech: "Python, React, SQL Server, AWS EC2, IoT",
  },
  {
    id: 3, // Added ID for mapping
    title: "AI-Powered Market Entry for Luxury Brands",
    client: "SaaS enabler for global brands entering China",
    industry: "Luxury Retail / Cross-Border SaaS",
    challenge: [
      "Manual matchmaking between brands and local vendors",
      "Unscalable processes and lack of data centralization",
      "No automated market intelligence for localization",
    ],
    solution: [
      "Built a data lake and pipelines for structured/unstructured data",
      "NLP + graph-based ML engine for vendor-brand matchmaking",
      "Auto-generated market-entry playbooks using LLMs for localization, compliance, pricing",
    ],
    impact: [
      "80% reduction in onboarding time",
      "3x increase in successful brand-vendor matches",
      "Rapid scale-up without increasing operations staff",
    ],
    tech: "AWS, Kafka, Faiss, Langchain, Spacy, LLMs, Pinecone, MongoDB",
  },
  {
    id: 4, // Added ID for mapping
    title: "Agile Productivity Enhancement Tool",
    client: "Agile Product Teams",
    industry: "Project Automation / Productivity",
    challenge: [
      "Managers lacked visibility into blockers and negative sentiment in standups",
      "Need for summarized insights across multiple teams and sprints",
    ],
    solution: [
      "Sentiment analysis (Google Sentiment API) and GPT-based theme extraction",
      "Clustering and embeddings using OpenAI + HuggingFace",
      "Daily and weekly pipeline summaries deployed using FastAPI on GKE",
    ],
    impact: [
      "30–50% improved decision-making efficiency",
      "Enhanced team morale tracking and resource allocation",
      "Executive-level visibility into team health",
    ],
    tech: "Python, Kubernetes, PostgreSQL, OpenAI, FastAPI",
  },
  {
    id: 5, // Added ID for mapping
    title: "AI-Powered Communication Module for Education",
    client: "Educational Institutions",
    industry: "Education / EdTech",
    challenge: [
      "Assessing students’ verbal aptitude at scale",
      "Lack of personalized, voice-interactive tools for language development",
    ],
    solution: [
      "Built voice-to-voice modules using IBM STT, GCP TTS, OpenAI GPT",
      "Exercises include jumbled sentences, reading aloud, story retelling",
      "AI feedback engine generates personalized insights",
    ],
    impact: [
      "Improved verbal aptitude and confidence",
      "Automated, scalable assessment workflows for educators",
      "Enhanced academic communication outcomes",
    ],
    tech: "GCP, Docker, IBM Watson, FastAPI, PlanetScale",
  },
  {
    id: 6, // Added ID for mapping
    title: "Retail Footfall Analytics",
    client: "Retail Chain",
    industry: "Retail / Computer Vision",
    challenge: [
      "Poor visibility into store-level foot traffic and crowd distribution",
      "Need for real-time analytics to optimize operations",
    ],
    solution: [
      "Real-time image/video data ingestion from edge devices",
      "YOLOV5-based footfall detection on NVIDIA Jetson Nano",
      "Analytics delivered via GCP ML pipelines and dashboards",
    ],
    impact: [
      "Improved staff scheduling and floor planning",
      "Real-time visibility into customer behavior",
      "Efficient operations in high-traffic zones",
    ],
    tech: "Python, YOLOV5, GCP Vertex, NVIDIA Jetson Nano",
  },
  {
    id: 7, // Added ID for mapping
    title: "Visual Inspection in Manufacturing",
    client: "Precision Equipment Manufacturer",
    industry: "Manufacturing / Embedded Vision",
    challenge: [
      "Manual inspection of tweezers was slow and inconsistent",
      "Needed automated defect detection based on complex visual criteria",
    ],
    solution: [
      "Built a visual inspection pipeline using computer vision algorithms",
      "Image preprocessing, parameter extraction, and defect computation",
      "Embedded solution with client-specific tolerance configurations",
    ],
    impact: ["Increased defect detection accuracy", "Significantly faster quality control cycles"],
    tech: "C++, Python, Embedded Systems",
  },
  {
    id: 8, // Added ID for mapping
    title: "IoT Analytics for Solar Energy Platform",
    client: "Renewable Energy Platform",
    industry: "Energy / IoT Analytics",
    challenge: [
      "Endless streams of IoT data from solar devices",
      "Manual mapping of edge devices",
      "No centralized dashboard for real-time monitoring",
    ],
    solution: [
      "Built webhook APIs to ingest data into Azure Kafka streams",
      "Spark Structured Streaming for processing and business logic",
      "Built a real-time dashboard portal using MEAN stack",
      "Alerting and access control baked in",
    ],
    impact: [
      "Real-time visibility into solar device health and energy output",
      "20M+ records processed per hour with auto-mapping",
      "Scalable, automated data platform",
    ],
    tech: "Python, Kafka, Spark, MongoDB, NodeJS, Angular, Azure",
  },
  {
    id: 9, // Added ID for mapping
    title: "Intelligent Expense Management for Logistics Workforce",
    client: "Leading Logistics Company",
    industry: "Logistics / Transportation",
    challenge: [
      "Employee travel, lodging, and food expenses were scattered across multiple platforms and manually maintained reimbursement sheets",
      "Extremely noisy, unstructured, and inconsistent data across sources",
      "No predictive visibility into future travel budgets or ability to detect potential fraud/compliance issues",
    ],
    solution: [
      "Built a unified Expense Management Dashboard aggregating data from platforms like MakeMyTrip, EaseMyTrip, Treebo, Ola, Uber, BlueSmart, and internal sheets",
      "Cleaned, processed, and transformed large volumes of noisy data using Apache Spark",
      "Created a scalable, centralized data model in GCP BigQuery",
      "Developed predictive models to forecast future travel and lodging expenses by employee level and trip type",
      "Built anomaly detection models to identify suspicious expenses and flag compliance risks",
    ],
    impact: [
      "30–35% reduction in manual effort for expense tracking and auditing",
      "20% improvement in accuracy of travel budget forecasts",
      "Early detection of 5–8% non-compliant or anomalous expense claims",
    ],
    tech: "Apache Spark, GCP (BigQuery, Dataflow), Python, Looker",
  },
  {
    id: 10, // Added ID for mapping
    title: "Intelligent Warranty Analytics for Consumer Electronics",
    client: "Leading global consumer electronics brand",
    industry: "Consumer Electronics / Retail",
    challenge: [
      "Warranty claims were increasing, but root cause analysis was slow and manual",
      "Lack of predictive insights into product failure patterns by region, usage type, and customer profile",
      "Difficulty in proactively managing warranty reserve budgets and supplier negotiations",
    ],
    solution: [
      "Developed a centralized Warranty Analytics Dashboard with automated ETL pipelines",
      "Applied machine learning models to predict high-risk failure categories and regions",
      "Built prescriptive insights for proactive part recalls, service interventions, and reserve planning",
    ],
    impact: [
      "20–25% reduction in warranty claims through early interventions",
      "15% improvement in accuracy of warranty reserve forecasting",
      "$5M+ annual savings in supplier recoveries and service optimizations",
    ],
    tech: "Python, Snowflake, Azure (ML Studio, Data Factory), Power BI",
  },
]

export type UseCase = (typeof useCases)[number]
