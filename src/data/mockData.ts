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
  relatedTickers?: string[];
  isPopular?: boolean;
}

export const portfolioStocks: Stock[] = [
  {
    id: "1",
    name: "Apple Inc.",
    ticker: "AAPL",
    price: 178.72,
    change: 2.34,
    changePercent: 1.33,
    marketCap: "2.78T",
    volume: "52.3M",
    pe: 28.4,
    weekHigh52: 199.62,
    weekLow52: 164.08,
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide."
  },
  {
    id: "2",
    name: "Microsoft Corporation",
    ticker: "MSFT",
    price: 378.91,
    change: -1.23,
    changePercent: -0.32,
    marketCap: "2.81T",
    volume: "18.7M",
    pe: 35.2,
    weekHigh52: 420.82,
    weekLow52: 309.45,
    description: "Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide."
  },
  {
    id: "3",
    name: "NVIDIA Corporation",
    ticker: "NVDA",
    price: 495.22,
    change: 12.45,
    changePercent: 2.58,
    marketCap: "1.22T",
    volume: "41.2M",
    pe: 62.8,
    weekHigh52: 505.48,
    weekLow52: 222.97,
    description: "NVIDIA Corporation provides graphics, computing, and networking solutions in the United States, Taiwan, China, and internationally."
  },
  {
    id: "4",
    name: "Amazon.com, Inc.",
    ticker: "AMZN",
    price: 153.42,
    change: 0.87,
    changePercent: 0.57,
    marketCap: "1.59T",
    volume: "45.1M",
    pe: 78.3,
    weekHigh52: 185.10,
    weekLow52: 118.35,
    description: "Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions through online and physical stores worldwide."
  },
  {
    id: "5",
    name: "Tesla, Inc.",
    ticker: "TSLA",
    price: 248.50,
    change: -5.32,
    changePercent: -2.10,
    marketCap: "789.2B",
    volume: "112.4M",
    pe: 72.1,
    weekHigh52: 299.29,
    weekLow52: 152.37,
    description: "Tesla, Inc. designs, develops, manufactures, sells, and leases electric vehicles, and energy generation and storage systems."
  },
  {
    id: "6",
    name: "Alphabet Inc.",
    ticker: "GOOGL",
    price: 141.80,
    change: 1.15,
    changePercent: 0.82,
    marketCap: "1.77T",
    volume: "22.8M",
    pe: 25.6,
    weekHigh52: 151.55,
    weekLow52: 115.83,
    description: "Alphabet Inc. offers various products and platforms in the United States, Europe, the Middle East, Africa, and internationally."
  }
];

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    headline: "Apple Vision Pro Sales Exceed Wall Street Expectations in Q4",
    source: "Bloomberg",
    timestamp: "2 hours ago",
    summary: "Apple's spatial computing device has surpassed analyst predictions, with the company reporting stronger-than-expected demand in enterprise and developer segments.",
    relatedTickers: ["AAPL"],
    isPopular: true
  },
  {
    id: "2",
    headline: "NVIDIA Announces Next-Generation AI Chips, Stock Surges",
    source: "Reuters",
    timestamp: "3 hours ago",
    summary: "The chipmaker unveiled its latest AI accelerator lineup, promising 2x performance improvements. Shares jumped 4% in pre-market trading.",
    relatedTickers: ["NVDA"],
    isPopular: true
  },
  {
    id: "3",
    headline: "Microsoft Azure Revenue Grows 29% as Enterprise AI Adoption Accelerates",
    source: "Financial Times",
    timestamp: "4 hours ago",
    summary: "Cloud computing remains a bright spot for Microsoft as businesses increasingly adopt AI-powered services and infrastructure.",
    relatedTickers: ["MSFT"]
  },
  {
    id: "4",
    headline: "Tesla Expands Supercharger Network Across Europe",
    source: "CNBC",
    timestamp: "5 hours ago",
    summary: "The electric vehicle maker announced plans to add 2,000 new charging stations across major European markets by end of 2025.",
    relatedTickers: ["TSLA"],
    isPopular: true
  },
  {
    id: "5",
    headline: "Amazon Web Services Launches New AI Development Tools",
    source: "TechCrunch",
    timestamp: "6 hours ago",
    summary: "AWS unveiled a suite of machine learning tools aimed at simplifying AI model deployment for enterprise customers.",
    relatedTickers: ["AMZN"]
  },
  {
    id: "6",
    headline: "Federal Reserve Signals Potential Rate Cuts in Coming Months",
    source: "Wall Street Journal",
    timestamp: "7 hours ago",
    summary: "Fed officials indicated inflation is cooling enough to consider monetary policy easing, boosting market sentiment across sectors.",
    relatedTickers: ["AAPL", "MSFT", "GOOGL", "AMZN"],
    isPopular: true
  },
  {
    id: "7",
    headline: "Google DeepMind Achieves Breakthrough in Protein Structure Prediction",
    source: "Nature",
    timestamp: "8 hours ago",
    summary: "Alphabet's AI research division announced significant advances in computational biology, with potential implications for drug discovery.",
    relatedTickers: ["GOOGL"]
  },
  {
    id: "8",
    headline: "Tech Giants Face New EU Regulations on AI Transparency",
    source: "Politico",
    timestamp: "10 hours ago",
    summary: "European regulators are pushing for stricter disclosure requirements on AI systems, potentially affecting major US tech companies.",
    relatedTickers: ["AAPL", "MSFT", "GOOGL", "AMZN"],
    isPopular: true
  },
  {
    id: "9",
    headline: "Semiconductor Supply Chain Shows Signs of Recovery",
    source: "Nikkei Asia",
    timestamp: "12 hours ago",
    summary: "Industry analysts report improving chip availability as manufacturers ramp up production capacity after years of shortages.",
    relatedTickers: ["NVDA", "AAPL"]
  },
  {
    id: "10",
    headline: "Tesla Cybertruck Deliveries Begin, Mixed Reviews Emerge",
    source: "Automotive News",
    timestamp: "14 hours ago",
    summary: "Early Cybertruck owners share first impressions as Tesla's long-awaited electric pickup finally reaches customers.",
    relatedTickers: ["TSLA"]
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
  return newsArticles.filter(article => article.isPopular);
};

export const getPortfolioNews = (): NewsArticle[] => {
  const portfolioTickers = portfolioStocks.map(stock => stock.ticker);
  return newsArticles.filter(article =>
    article.relatedTickers?.some(ticker => portfolioTickers.includes(ticker))
  );
};
