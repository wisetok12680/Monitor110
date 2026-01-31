// Mock data for stocks and news
export interface Stock {
  id: string;
  name: string;
  ticker: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap: string;
  volume: string;
  pe: number;
  weekHigh52: number;
  weekLow52: number;
  description: string;
}

export interface NewsArticle {
  id: string;
  headline: string;
  source: string;
  timestamp: string;
  summary: string;
  url?: string;
  relatedTickers?: string[];
  stockTags?: string[];
  isPopular?: boolean;
}

export const portfolioStocks: Stock[] = [
  {
    id: "1",
    name: "Tata Consultancy Services",
    ticker: "TCS",
    price: 3850,
    change: 125,
    changePercent: 3.36,
    marketCap: "14.2L Cr",
    volume: "2.8M",
    pe: 28.4,
    weekHigh52: 4200,
    weekLow52: 3450,
    description: "Tata Consultancy Services is an Indian multinational IT services and consulting company providing digital solutions globally."
  },
  {
    id: "2",
    name: "Reliance Industries Limited",
    ticker: "RELIANCE",
    price: 1395,
    change: 42,
    changePercent: 3.11,
    marketCap: "18.9L Cr",
    volume: "11.2M",
    pe: 22.6,
    weekHigh52: 1611,
    weekLow52: 1114,
    description: "Reliance Industries is a diversified conglomerate involved in petrochemicals, refining, oil and gas, retail, and digital services."
  },
  {
    id: "3",
    name: "HDFC Bank Limited",
    ticker: "HDFCBANK",
    price: 1895,
    change: 58,
    changePercent: 3.16,
    marketCap: "12.8L Cr",
    volume: "1.95M",
    pe: 24.2,
    weekHigh52: 2145,
    weekLow52: 1678,
    description: "HDFC Bank is India's largest private sector bank, offering comprehensive banking and financial services."
  },
  {
    id: "4",
    name: "Infosys Limited",
    ticker: "INFY",
    price: 1825,
    change: -15,
    changePercent: -0.81,
    marketCap: "7.6L Cr",
    volume: "3.2M",
    pe: 31.8,
    weekHigh52: 2095,
    weekLow52: 1512,
    description: "Infosys is a global leader in IT services and consulting, delivering innovative digital solutions to clients worldwide."
  },
  {
    id: "5",
    name: "Bajaj Finance Limited",
    ticker: "BAJFINANCE",
    price: 7425,
    change: 185,
    changePercent: 2.55,
    marketCap: "4.2L Cr",
    volume: "850K",
    pe: 42.1,
    weekHigh52: 8125,
    weekLow52: 6285,
    description: "Bajaj Finance is a leading non-banking finance company providing consumer durables finance, personal loans, and investment products."
  },
  {
    id: "6",
    name: "ICICI Bank Limited",
    ticker: "ICICIBANK",
    price: 1125,
    change: 32,
    changePercent: 2.93,
    marketCap: "8.5L Cr",
    volume: "2.1M",
    pe: 20.4,
    weekHigh52: 1285,
    weekLow52: 958,
    description: "ICICI Bank is a leading private sector bank in India, providing banking and financial services to retail and corporate clients."
  },
  {
    id: "7",
    name: "Wipro Limited",
    ticker: "WIPRO",
    price: 652,
    change: -8,
    changePercent: -1.21,
    marketCap: "3.8L Cr",
    volume: "2.9M",
    pe: 18.5,
    weekHigh52: 745,
    weekLow52: 512,
    description: "Wipro is an Indian IT services company providing consulting, technology, and outsourcing services to global enterprises."
  },
  {
    id: "8",
    name: "Kotak Mahindra Bank",
    ticker: "KOTAKBANK",
    price: 1845,
    change: 55,
    changePercent: 3.07,
    marketCap: "3.2L Cr",
    volume: "1.2M",
    pe: 19.2,
    weekHigh52: 2125,
    weekLow52: 1562,
    description: "Kotak Mahindra Bank is a leading Indian bank offering banking services, investment banking, and financial solutions."
  },
  {
    id: "9",
    name: "Larsen & Toubro Limited",
    ticker: "LT",
    price: 3185,
    change: 95,
    changePercent: 3.08,
    marketCap: "4.1L Cr",
    volume: "1.5M",
    pe: 26.8,
    weekHigh52: 3562,
    weekLow52: 2685,
    description: "Larsen & Toubro is India's leading engineering and construction company involved in infrastructure, defense, and industrial projects."
  },
  {
    id: "10",
    name: "Axis Bank Limited",
    ticker: "AXISBANK",
    price: 1142,
    change: 28,
    changePercent: 2.51,
    marketCap: "3.4L Cr",
    volume: "1.8M",
    pe: 18.9,
    weekHigh52: 1325,
    weekLow52: 945,
    description: "Axis Bank is a leading private sector bank in India, providing retail and corporate banking services."
  }
];

export const newsArticles: NewsArticle[] = [
  {
    id: "p1",
    headline: "TCS Wins $2.5 Billion Digital Transformation Contract: Global Expansion Continues",
    source: "Economic Times",
    timestamp: "45 minutes ago",
    summary: "Tata Consultancy Services secures major enterprise contract from Fortune 500 company, strengthening its position in global digital services market.",
    url: "https://economictimes.indiatimes.com/tcs-wins-2-5-billion-contract-digital-transformation-2026-01-31",
    relatedTickers: ["TCS"],
    stockTags: ["India", "IT", "TCS", "Enterprise"],
    isPopular: false
  },
  {
    id: "p2",
    headline: "Reliance Jio Expands 5G Coverage: 100 Million Subscribers Milestone Achieved",
    source: "Business Standard",
    timestamp: "1 hour ago",
    summary: "Jio Platforms marks record growth with nationwide 5G deployment reaching over 100 million subscribers across metro and tier-2 cities.",
    url: "https://www.business-standard.com/article/companies/reliance-jio-5g-100-million-subscribers-milestone-2026",
    relatedTickers: ["RELIANCE"],
    stockTags: ["India", "Jio", "5G", "Telecom"],
    isPopular: false
  },
  {
    id: "p3",
    headline: "HDFC Bank Digital UPI Transactions Cross $500 Billion: Record Quarter Reported",
    source: "Mint",
    timestamp: "2 hours ago",
    summary: "India's largest private bank achieves unprecedented digital payment milestone, with UPI transactions surpassing all traditional payment channels combined.",
    url: "https://www.livemint.com/market/hdfc-bank-upi-500-billion-transactions-record-2026",
    relatedTickers: ["HDFCBANK"],
    stockTags: ["India", "Banking", "UPI", "Digital"],
    isPopular: false
  },
  {
    id: "p4",
    headline: "Infosys Launches AI-Powered Automation Platform: Industry Game-Changer",
    source: "Financial Express",
    timestamp: "3 hours ago",
    summary: "Infosys introduces next-generation automation platform combining machine learning and RPA, targeting 40% efficiency gains for enterprise clients.",
    url: "https://www.financialexpress.com/business/infosys-ai-automation-platform-launch-2026",
    relatedTickers: ["INFY"],
    stockTags: ["India", "IT", "Infosys", "AI"],
    isPopular: false
  },
  {
    id: "p5",
    headline: "Bajaj Finance Crosses 50 Million Active Customers: Lending Growth Accelerates",
    source: "Moneycontrol",
    timestamp: "4 hours ago",
    summary: "NBFC giant achieves customer scale milestone driven by digital lending innovation and strong rural market penetration across India.",
    url: "https://www.moneycontrol.com/news/bajaj-finance-50-million-customers-2026",
    relatedTickers: ["BAJFINANCE"],
    stockTags: ["India", "NBFC", "Lending", "Finance"],
    isPopular: false
  },
  {
    id: "p6",
    headline: "ICICI Bank Launches Advanced AI Chatbot: Customer Service Revolution",
    source: "Indian Express",
    timestamp: "5 hours ago",
    summary: "ICICI Bank deploys sophisticated AI-driven customer service bot handling 10 million interactions daily with 98% resolution rate.",
    url: "https://indianexpress.com/icici-bank-ai-chatbot-customer-service-2026",
    relatedTickers: ["ICICIBANK"],
    stockTags: ["India", "Banking", "AI", "ICICI"],
    isPopular: false
  },
  {
    id: "p7",
    headline: "Wipro Secures $1.8B Deal: Cloud Migration Services Boom in Enterprise",
    source: "The Hindu Business",
    timestamp: "6 hours ago",
    summary: "Wipro lands major cloud transformation contract from global retail giant, marking strong momentum in enterprise digital migration services.",
    url: "https://www.thehindubuinessnext.in/wipro-1-8b-cloud-deal-2026",
    relatedTickers: ["WIPRO"],
    stockTags: ["India", "IT", "Wipro", "Cloud"],
    isPopular: false
  },
  {
    id: "p8",
    headline: "Kotak Mahindra Bank Eyes Market Leadership: Strategic Expansion Begins",
    source: "Business Today",
    timestamp: "7 hours ago",
    summary: "Kotak Bank announces aggressive expansion strategy targeting market leadership through retail and SME lending segments.",
    url: "https://www.businesstoday.in/kotak-mahindra-bank-expansion-strategy-2026",
    relatedTickers: ["KOTAKBANK"],
    stockTags: ["India", "Banking", "Kotak", "Growth"],
    isPopular: false
  },
  {
    id: "p9",
    headline: "Larsen & Toubro Wins $3B Infrastructure Contract: Growth Momentum Strong",
    source: "Constructions Week India",
    timestamp: "8 hours ago",
    summary: "L&T bags major infrastructure project from Indian government, further solidifying position as nation's leading engineering and construction company.",
    url: "https://constructionweeksindia.com/lt-3b-contract-infrastructure-2026",
    relatedTickers: ["LT"],
    stockTags: ["India", "Infrastructure", "L&T", "Construction"],
    isPopular: false
  },
  {
    id: "p10",
    headline: "Axis Bank Reports Strongest Quarter: Growth Accelerates in Retail Banking",
    source: "Deccan Chronicle",
    timestamp: "9 hours ago",
    summary: "Axis Bank's Q3 results showcase exceptional growth in retail and digital banking segments, with asset quality improving significantly.",
    url: "https://www.deccanchronicle.com/axis-bank-quarterly-results-2026",
    relatedTickers: ["AXISBANK"],
    stockTags: ["India", "Banking", "Axis", "Results"],
    isPopular: false
  },
  {
    id: "1",
    headline: "AI Market Cap Surges Past $1 Trillion: Tech Giants Lead the Charge",
    source: "Bloomberg",
    timestamp: "30 minutes ago",
    summary: "Artificial intelligence companies have collectively reached a $1 trillion market valuation, with NVIDIA and Microsoft driving unprecedented growth in the sector.",
    url: "https://www.bloomberg.com/news/articles/2026-01-31/ai-market-cap-surges-past-1-trillion-tech-giants-lead-charge",
    relatedTickers: ["NVDA", "MSFT", "GOOGL"],
    isPopular: true
  },
  {
    id: "2",
    headline: "Federal Reserve Signals Three Rate Cuts in 2026: Markets React with Optimism",
    source: "Wall Street Journal",
    timestamp: "1 hour ago",
    summary: "Fed Chair Jerome Powell's dovish comments spark a broad market rally, with tech stocks leading gains as investors anticipate easier monetary policy.",
    url: "https://www.wsj.com/finance/federal-reserve-signals-three-rate-cuts-2026-markets-react-optimism-2026-01-31",
    relatedTickers: ["AAPL", "MSFT", "NVDA", "TSLA"],
    isPopular: true
  },
  {
    id: "3",
    headline: "Tesla's Full Self-Driving Software Achieves 99.9% Safety Rating in Latest Tests",
    source: "Reuters",
    timestamp: "2 hours ago",
    summary: "Elon Musk announces breakthrough autonomous driving technology, with FSD v12 achieving unprecedented safety metrics and imminent nationwide rollout.",
    url: "https://www.reuters.com/technology/tesla-full-self-driving-software-achieves-99-9-safety-rating-latest-tests-2026-01-31/",
    relatedTickers: ["TSLA"],
    isPopular: true
  },
  {
    id: "4",
    headline: "Apple Vision Pro Sales Exceed Expectations: 500K Units in First Quarter",
    source: "CNBC",
    timestamp: "3 hours ago",
    summary: "Apple's spatial computing device becomes the fastest-selling product in company history, with enterprise adoption driving unexpected demand.",
    url: "https://www.cnbc.com/2026/01/31/apple-vision-pro-sales-exceed-expectations-500k-units-first-quarter.html",
    relatedTickers: ["AAPL"],
    isPopular: true
  },
  {
    id: "5",
    headline: "Cryptocurrency Market Hits New All-Time High: Bitcoin Surpasses $200,000",
    source: "CoinDesk",
    timestamp: "4 hours ago",
    summary: "Digital assets rally as institutional adoption accelerates, with major corporations adding Bitcoin to their balance sheets amid ETF inflows.",
    url: "https://www.coindesk.com/markets/2026/01/31/cryptocurrency-market-hits-new-all-time-high-bitcoin-surpasses-200000/",
    relatedTickers: [],
    stockTags: ["Crypto", "Bitcoin", "Digital Assets", "ETF"],
    isPopular: true
  },
  {
    id: "6",
    headline: "Microsoft's AI Revenue Tops $50 Billion Annually: Cloud Business Transforms",
    source: "Financial Times",
    timestamp: "5 hours ago",
    summary: "Azure AI services drive explosive growth, with Copilot adoption reaching 200 million daily active users across enterprise and consumer segments.",
    url: "https://www.ft.com/content/microsoft-ai-revenue-tops-50-billion-annually-cloud-business-transforms-2026-01-31",
    relatedTickers: ["MSFT"],
    isPopular: true
  },
  {
    id: "7",
    headline: "Amazon's Advertising Business Overtakes Google: $60B Revenue Milestone",
    source: "TechCrunch",
    timestamp: "6 hours ago",
    summary: "E-commerce giant's ad platform achieves parity with Google, driven by superior targeting and integration with Prime ecosystem.",
    url: "https://techcrunch.com/2026/01/31/amazon-advertising-business-overtakes-google-60b-revenue-milestone/",
    relatedTickers: ["AMZN", "GOOGL"],
    isPopular: true
  },
  {
    id: "8",
    headline: "Quantum Computing Breakthrough: IBM Achieves 1000-Qubit Processor",
    source: "Nature",
    timestamp: "7 hours ago",
    summary: "IBM's Condor quantum processor demonstrates practical quantum advantage, opening doors for drug discovery and financial modeling applications.",
    url: "https://www.nature.com/articles/quantum-computing-breakthrough-ibm-achieves-1000-qubit-processor-2026",
    relatedTickers: [],
    stockTags: ["Quantum", "Technology", "Innovation", "Computing"],
    isPopular: true
  },
  {
    id: "9",
    headline: "Electric Vehicle Market Share Hits 35%: Traditional Automakers Accelerate Transition",
    source: "Automotive News",
    timestamp: "8 hours ago",
    summary: "Global EV adoption reaches critical mass, with legacy manufacturers investing $500B in electric platforms to compete with Tesla and Chinese rivals.",
    url: "https://www.autonews.com/automotive-news/electric-vehicle-market-share-hits-35-traditional-automakers-accelerate-transition",
    relatedTickers: ["TSLA"],
    stockTags: ["EV", "Automotive", "Sustainability", "Transition"],
    isPopular: true
  },
  {
    id: "10",
    headline: "Space Economy Reaches $1 Trillion: Private Companies Lead Commercial Expansion",
    source: "Space News",
    timestamp: "9 hours ago",
    summary: "Commercial space industry surpasses expectations, with satellite internet, space tourism, and asteroid mining creating new economic opportunities.",
    url: "https://spacenews.com/space-economy-reaches-1-trillion-private-companies-lead-commercial-expansion-2026/",
    relatedTickers: [],
    stockTags: ["Space", "Commercial", "Technology", "Economy"],
    isPopular: true
  },
  {
    id: "11",
    headline: "Sustainable Investing Assets Top $50 Trillion Globally: ESG Funds Dominate",
    source: "Bloomberg",
    timestamp: "10 hours ago",
    summary: "Environmental, Social, and Governance investments become the largest asset class, with climate tech and renewable energy driving portfolio performance.",
    url: "https://www.bloomberg.com/news/articles/2026-01-31/sustainable-investing-assets-top-50-trillion-globally-esg-funds-dominate",
    relatedTickers: [],
    stockTags: ["ESG", "Sustainability", "Climate", "Investing"],
    isPopular: true
  },
  {
    id: "12",
    headline: "5G Advanced Networks Deployed Nationwide: IoT Revolution Accelerates",
    source: "Telecom Review",
    timestamp: "11 hours ago",
    summary: "Next-generation wireless technology enables smart cities, autonomous vehicles, and industrial IoT, creating $1.3 trillion in economic value.",
    url: "https://telecomreview.com/5g-advanced-networks-deployed-nationwide-iot-revolution-accelerates-2026/",
    relatedTickers: [],
    stockTags: ["5G", "IoT", "Technology", "Infrastructure"],
    isPopular: true
  },
  {
    id: "13",
    headline: "Biotech Breakthrough: CRISPR Gene Editing Cures Rare Diseases",
    source: "Science Magazine",
    timestamp: "12 hours ago",
    summary: "CRISPR technology achieves clinical success in treating genetic disorders, with FDA approval expected for multiple therapies in coming months.",
    url: "https://www.sciencemag.org/news/2026/01/biotech-breakthrough-crispr-gene-editing-cures-rare-diseases",
    relatedTickers: [],
    stockTags: ["Biotech", "CRISPR", "Healthcare", "Innovation"],
    isPopular: true
  },
  {
    id: "14",
    headline: "Global Supply Chain Resilience: Semiconductor Production Returns to Normal",
    source: "Nikkei Asia",
    timestamp: "13 hours ago",
    summary: "Chip manufacturing capacity reaches pre-pandemic levels, with new fabs in the US and Europe reducing dependency on Asian suppliers.",
    url: "https://asia.nikkei.com/Business/Tech/Semiconductors/global-supply-chain-resilience-semiconductor-production-returns-normal",
    relatedTickers: ["NVDA", "AAPL", "TSLA"],
    stockTags: ["Semiconductors", "Supply Chain", "Manufacturing", "Resilience"],
    isPopular: true
  },
  {
    id: "15",
    headline: "Digital Asset Regulation Framework Announced: SEC Approves Comprehensive Rules",
    source: "Cointelegraph",
    timestamp: "14 hours ago",
    summary: "US Securities and Exchange Commission establishes clear guidelines for crypto trading, paving the way for mainstream institutional adoption.",
    url: "https://cointelegraph.com/news/digital-asset-regulation-framework-announced-sec-approves-comprehensive-rules-2026",
    relatedTickers: [],
    stockTags: ["Crypto", "Regulation", "SEC", "Digital Assets"],
    isPopular: true
  },
  {
    id: "16",
    headline: "Fusion Energy Milestone: Commercial Power Generation Achieved",
    source: "MIT Technology Review",
    timestamp: "15 hours ago",
    summary: "Nuclear fusion technology reaches economic viability, with first commercial plants expected to come online within five years.",
    url: "https://www.technologyreview.com/2026/01/31/fusion-energy-milestone-commercial-power-generation-achieved/",
    relatedTickers: [],
    stockTags: ["Fusion", "Energy", "Nuclear", "Clean Energy"],
    isPopular: true
  },
  {
    id: "17",
    headline: "Metaverse Economy Grows 300%: Virtual Real Estate Market Booms",
    source: "The Verge",
    timestamp: "16 hours ago",
    summary: "Digital worlds create $500B in economic activity, with virtual land sales surpassing traditional real estate in some markets.",
    url: "https://www.theverge.com/2026/01/31/metaverse-economy-grows-300-virtual-real-estate-market-booms",
    relatedTickers: ["META"],
    stockTags: ["Metaverse", "Virtual Reality", "Digital Economy", "Gaming"],
    isPopular: true
  },
  {
    id: "18",
    headline: "Carbon Capture Technology Scales: 1 Billion Tons Sequestered Annually",
    source: "Scientific American",
    timestamp: "17 hours ago",
    summary: "Direct air capture systems achieve commercial scale, with governments committing $100B to accelerate climate technology deployment.",
    url: "https://www.scientificamerican.com/article/carbon-capture-technology-scales-1-billion-tons-sequestered-annually-2026/",
    relatedTickers: [],
    stockTags: ["Climate", "Carbon Capture", "Sustainability", "Technology"],
    isPopular: true
  },
  {
    id: "19",
    headline: "Autonomous Shipping Revolution: First Driverless Cargo Vessels Deployed",
    source: "Maritime Executive",
    timestamp: "18 hours ago",
    summary: "Self-navigating cargo ships reduce shipping costs by 40%, with global fleet conversion accelerating maritime industry transformation.",
    url: "https://www.maritime-executive.com/article/autonomous-shipping-revolution-first-driverless-cargo-vessels-deployed-2026",
    relatedTickers: [],
    stockTags: ["Shipping", "Autonomous", "Maritime", "Logistics"],
    isPopular: true
  },
  {
    id: "20",
    headline: "Brain-Computer Interface Breakthrough: Neuralink Implants Restore Mobility",
    source: "New England Journal of Medicine",
    timestamp: "19 hours ago",
    summary: "Neural implants enable paralyzed patients to control prosthetic limbs with thought, marking a new era in medical technology and human augmentation.",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2026001",
    relatedTickers: [],
    stockTags: ["Neuralink", "Biotech", "Medical", "Innovation"],
    isPopular: true
  },
  {
    id: "21",
    headline: "Hydrogen Economy Takes Off: Fuel Cell Vehicles Hit 10 Million Units",
    source: "Green Tech Media",
    timestamp: "20 hours ago",
    summary: "Zero-emission hydrogen vehicles achieve market adoption, with infrastructure expansion creating new opportunities in energy storage and transportation.",
    url: "https://www.greentechmedia.com/articles/read/hydrogen-economy-takes-off-fuel-cell-vehicles-hit-10-million-units-2026",
    relatedTickers: [],
    stockTags: ["Hydrogen", "Fuel Cell", "Clean Energy", "Transportation"],
    isPopular: true
  },
  {
    id: "22",
    headline: "AI Drug Discovery Revolution: 50 New Therapies Approved in 2025",
    source: "Nature Biotechnology",
    timestamp: "21 hours ago",
    summary: "Machine learning accelerates pharmaceutical development, with AI-designed drugs showing 90% success rate in clinical trials compared to traditional methods.",
    url: "https://www.nature.com/articles/nbt.4501-2026",
    relatedTickers: [],
    stockTags: ["AI", "Drug Discovery", "Biotech", "Healthcare"],
    isPopular: true
  },
  {
    id: "23",
    headline: "Vertical Farming Market Reaches $50 Billion: Urban Agriculture Transforms Food Supply",
    source: "Agricultural Economics",
    timestamp: "22 hours ago",
    summary: "Indoor farming technology reduces water usage by 95% and increases crop yields by 300%, revolutionizing global food production systems.",
    url: "https://www.agriculturaleconomics.com/vertical-farming-market-reaches-50-billion-urban-agriculture-transforms-2026",
    relatedTickers: [],
    stockTags: ["Agriculture", "Vertical Farming", "Sustainability", "Food"],
    isPopular: true
  },
  {
    id: "24",
    headline: "Satellite Internet Constellation Complete: Global Broadband Coverage Achieved",
    source: "SpaceNews",
    timestamp: "23 hours ago",
    summary: "Low Earth orbit satellite networks provide high-speed internet to every corner of the planet, bridging the digital divide and enabling global connectivity.",
    url: "https://spacenews.com/satellite-internet-constellation-complete-global-broadband-coverage-achieved-2026/",
    relatedTickers: [],
    stockTags: ["Satellite", "Internet", "Connectivity", "Space"],
    isPopular: true
  },
  {
    id: "25",
    headline: "Robotics Workforce Integration: 100 Million Cobots Deployed Worldwide",
    source: "Robotics Business Review",
    timestamp: "24 hours ago",
    summary: "Collaborative robots enhance workplace productivity by 40%, with AI-driven automation transforming manufacturing and service industries globally.",
    url: "https://www.roboticsbusinessreview.com/robotics-workforce-integration-100-million-cobots-deployed-worldwide-2026/",
    relatedTickers: [],
    stockTags: ["Robotics", "Automation", "AI", "Manufacturing"],
    isPopular: true
  }
];

export const getStockById = (id: string): Stock | undefined => {
  return portfolioStocks.find(stock => stock.id === id);
};

export const getNewsByTicker = (ticker: string): NewsArticle[] => {
  return newsArticles.filter(article => 
    article.relatedTickers?.includes(ticker)
  );
};

export const getPopularNews = (): NewsArticle[] => {
  return newsArticles.filter(article => 
    article.isPopular && !article.stockTags?.some(tag => tag.includes('India'))
  );
};

export const getPortfolioNews = (): NewsArticle[] => {
  // Focus on Indian market news and companies
  const indianTickers = ['RELIANCE', 'TCS', 'INFY', 'HDFCBANK', 'ICICIBANK', 'BAJFINANCE', 'KOTAKBANK', 'LT', 'AXISBANK', 'MARUTI', 'ADANIPORTS', 'ADANIGREEN', 'TATAPOWER', 'WIPRO', 'ONGC'];
  
  return newsArticles.filter(article => {
    // Include articles with Indian stock tags
    const hasIndianTags = article.stockTags?.some(tag => tag.includes('India'));
    
    // Include articles with Indian company tickers
    const hasIndianTickers = article.relatedTickers?.some(ticker => indianTickers.includes(ticker));
    
    return hasIndianTags || hasIndianTickers;
  });
};
