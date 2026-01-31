import { NewsArticle } from "@/data/mockData";
import { findStockTags } from "@/data/stockUtils";

// GNews API response types
interface GNewsArticle {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

interface GNewsResponse {
  totalArticles: number;
  articles: GNewsArticle[];
  information?: {
    realTimeArticles?: {
      message: string;
    };
  };
}

// Convert GNews article to our NewsArticle format
const convertToNewsArticle = async (apiArticle: GNewsArticle, id: string): Promise<NewsArticle> => {
  // Extract tickers from title and description (basic regex for common tickers)
  const text = `${apiArticle.title} ${apiArticle.description || ""}`;
  const tickerRegex = /\b[A-Z]{1,5}\b/g;
  const potentialTickers = text.match(tickerRegex) || [];
  const commonTickers = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA", "META", "NFLX", "SPY", "QQQ"];

  const relatedTickers = potentialTickers.filter(ticker =>
    commonTickers.includes(ticker) || ticker.length >= 2
  ).slice(0, 3); // Limit to 3 tickers

  // Find stock tags from instruments CSV
  const stockTags = await findStockTags(text);

  return {
    id,
    headline: apiArticle.title,
    source: apiArticle.source.name,
    timestamp: new Date(apiArticle.publishedAt).toLocaleString(),
    summary: apiArticle.description || "No description available",
    url: apiArticle.url,
    relatedTickers: relatedTickers.length > 0 ? relatedTickers : undefined,
    stockTags: stockTags.length > 0 ? stockTags : undefined,
    isPopular: true // Mark all fetched news as popular for now
  };
};

const GNEWS_API_KEY = import.meta.env.VITE_GNEWS_API_KEY || "e3f522575abed15922b9e4e05280d79b";
const GNEWS_API_BASE_URL = "https://gnews.io/api/v4";

export const fetchFinancialNews = async (): Promise<NewsArticle[]> => {
  if (!GNEWS_API_KEY) {
    console.warn("GNews API key not found. Using mock data.");
    const { getPopularNews } = await import("@/data/mockData");
    return getPopularNews();
  }

  try {
    console.log("🔄 Attempting to fetch news from GNews API...");

    // Try a single API call first to check if API is available
    const testResponse = await fetch(`${GNEWS_API_BASE_URL}/top-headlines?category=business&lang=en&country=us&max=1&apikey=${GNEWS_API_KEY}`);

    if (!testResponse.ok) {
      if (testResponse.status === 403) {
        console.warn("❌ GNews API rate limit reached. Using mock data.");
      } else {
        console.warn(`❌ GNews API error: ${testResponse.status}. Using mock data.`);
      }
      const { getPopularNews } = await import("@/data/mockData");
      return getPopularNews();
    }

    // If test call succeeds, make the full API calls
    const apiCalls = [
      fetch(`${GNEWS_API_BASE_URL}/top-headlines?category=business&lang=en&country=in&max=10&apikey=${GNEWS_API_KEY}`),
      fetch(`${GNEWS_API_BASE_URL}/top-headlines?lang=en&country=in&max=10&apikey=${GNEWS_API_KEY}`),
      fetch(`${GNEWS_API_BASE_URL}/search?q=finance&lang=en&country=in&max=10&apikey=${GNEWS_API_KEY}`),
    ];

    const responses = await Promise.allSettled(apiCalls);
    const allArticles: NewsArticle[] = [];

    for (let i = 0; i < responses.length; i++) {
      const response = responses[i];

      if (response.status === 'fulfilled') {
        const res = response.value;

        if (!res.ok) {
          console.warn(`API call ${i + 1} failed: ${res.status}`);
          continue;
        }

        const data: GNewsResponse = await res.json();

        if (data.articles && data.articles.length > 0) {
          const convertedArticles = await Promise.all(
            data.articles.map((article, index) =>
              convertToNewsArticle(article, `api-${i}-${index}`)
            )
          );
          allArticles.push(...convertedArticles);
        }
      } else {
        console.warn(`API call ${i + 1} rejected:`, response.reason);
      }
    }

    // Remove duplicates based on URL and limit to 30 articles
    const uniqueArticles = allArticles.filter((article, index, self) =>
      index === self.findIndex(a => a.url === article.url)
    ).slice(0, 30);

    if (uniqueArticles.length > 0) {
      console.log(`✅ Successfully fetched ${uniqueArticles.length} unique articles from GNews API`);
      return uniqueArticles;
    } else {
      console.log("❌ No articles fetched from API, using mock data");
      const { getPopularNews } = await import("@/data/mockData");
      return getPopularNews();
    }
  } catch (error) {
    console.error("❌ Failed to fetch news from GNews API:", error);
    const { getPopularNews } = await import("@/data/mockData");
    return getPopularNews();
  }
};

export const searchNews = async (query: string): Promise<NewsArticle[]> => {
  if (!GNEWS_API_KEY) {
    console.warn("GNews API key not found. Search unavailable.");
    return [];
  }

  try {
    console.log(`🔍 Searching for: "${query}"`);

    // Test API availability first
    const testResponse = await fetch(`${GNEWS_API_BASE_URL}/top-headlines?category=business&lang=en&country=us&max=1&apikey=${GNEWS_API_KEY}`);

    if (!testResponse.ok) {
      if (testResponse.status === 403) {
        console.warn("❌ GNews API rate limit reached. Search unavailable.");
      } else {
        console.warn(`❌ GNews API error: ${testResponse.status}. Search unavailable.`);
      }
      return [];
    }

    // If test succeeds, proceed with search
    const searchUrl = `${GNEWS_API_BASE_URL}/search?q=${encodeURIComponent(query)}&lang=en&country=in&max=10&apikey=${GNEWS_API_KEY}`;

    console.log('Search URL:', searchUrl);

    const response = await fetch(searchUrl);

    if (!response.ok) {
      console.warn(`Search API failed with status: ${response.status}`);
      return [];
    }

    const data: GNewsResponse = await response.json();

    if (data.articles && data.articles.length > 0) {
      console.log(`✅ Found ${data.articles.length} articles for "${query}"`);

      const convertedArticles = await Promise.all(
        data.articles.map((article, index) =>
          convertToNewsArticle(article, `search-${index}`)
        )
      );

      return convertedArticles.slice(0, 20);
    } else {
      console.log(`❌ No articles found for "${query}"`);
      return [];
    }
  } catch (error) {
    console.error("❌ Search failed:", error);
    return [];
  }
};