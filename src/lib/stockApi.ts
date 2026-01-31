const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const RAPIDAPI_HOST = 'yahoo-finance15.p.rapidapi.com';

export interface YahooStockResponse {
  meta: {
    version: string;
    status: number;
    copywrite: string;
    symbol: string;
    processedTime: string;
  };
  body: Array<{
    symbol: string;
    longName?: string;
    shortName?: string;
    regularMarketPrice: number;
    regularMarketChange: number;
    regularMarketChangePercent: number;
    regularMarketVolume: number;
    marketCap?: number;
    currency: string;
    exchange: string;
    [key: string]: any;
  }>;
}

export interface Stock {
  id: string;
  name: string;
  ticker: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap?: string;
  volume?: string;
  peRatio?: number;
  weekHigh52?: number;
  weekLow52?: number;
  sector?: string;
  description?: string;
}

export async function fetchStockPrice(symbol: string): Promise<Stock> {
  try {
    const response = await fetch(
      `https://${RAPIDAPI_HOST}/api/v1/markets/stock/quotes?symbol=${symbol}.NS`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': RAPIDAPI_KEY,
          'X-RapidAPI-Host': RAPIDAPI_HOST,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: YahooStockResponse = await response.json();

    // API returns an array in body, so we take the first item
    const responseBody = Array.isArray(data.body) ? data.body[0] : data.body;
    
    if (!responseBody) {
      throw new Error(`No stock data found for ${symbol}`);
    }

    const stockData = responseBody;

    return {
      id: symbol,
      ticker: stockData.symbol?.replace('.NS', '') || data.meta.symbol.replace('.NS', ''),
      name: stockData.longName || stockData.shortName || 'Unknown',
      price: stockData.regularMarketPrice,
      change: stockData.regularMarketChange,
      changePercent: stockData.regularMarketChangePercent,
      volume: stockData.regularMarketVolume?.toString(),
      marketCap: stockData.marketCap?.toString(),
    };
  } catch (error) {
    console.error(`Error fetching stock ${symbol}:`, error);
    throw error;
  }
}

export async function fetchMultipleStocks(symbols: string[]): Promise<Stock[]> {
  const promises = symbols.map(symbol => fetchStockPrice(symbol));
  return Promise.all(promises);
}

// Top 10 Indian stocks by market cap/popularity
export const TOP_INDIAN_STOCKS = [
  'RELIANCE', 'TCS', 'HDFCBANK', 'ICICIBANK', 'INFY',
  'BAJFINANCE', 'KOTAKBANK', 'LT', 'AXISBANK', 'MARUTI'
];