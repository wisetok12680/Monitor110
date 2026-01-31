import Papa from 'papaparse';

// Interface for instrument data from CSV
export interface InstrumentData {
  instrument_token: string;
  exchange_token: string;
  tradingsymbol: string;
  name: string;
  last_price: string;
  expiry: string;
  strike: string;
  tick_size: string;
  lot_size: string;
  instrument_type: string;
  segment: string;
  exchange: string;
}

// Top 20 most valuable Indian stocks by market cap (as of 2024)
// Focusing on the largest and most prominent companies
const TOP_100_STOCKS = new Set([
  // Banking & Financial Services (Top banks)
  'HDFCBANK', 'ICICIBANK', 'KOTAKBANK', 'AXISBANK', 'SBIN', 'BAJFINANCE',

  // IT & Technology (Top IT companies)
  'TCS', 'INFY', 'WIPRO', 'HCLTECH', 'TECHM',

  // Oil & Gas (Energy majors)
  'RELIANCE', 'ONGC', 'NTPC',

  // Pharmaceuticals (Top pharma)
  'SUNPHARMA', 'DRREDDY',

  // FMCG (Fast moving consumer goods)
  'ITC', 'HINDUNILVR', 'NESTLEIND',

  // Auto & Auto Ancillaries
  'MARUTI', 'BAJAJ-AUTO', 'TATAMOTORS',

  // Metals & Mining
  'TATASTEEL', 'HINDALCO', 'COALINDIA',

  // Cement
  'ULTRACEMCO', 'SHREECEM'
]);

// Cache for loaded instruments
let instrumentsCache: InstrumentData[] | null = null;
let stockMapCache: Map<string, string> | null = null;

/**
 * Load and parse the instruments CSV file
 */
export async function loadInstruments(): Promise<InstrumentData[]> {
  if (instrumentsCache) {
    return instrumentsCache;
  }

  try {
    const response = await fetch('/src/data/instruments.csv');
    const csvText = await response.text();

    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          instrumentsCache = results.data as InstrumentData[];
          resolve(instrumentsCache);
        },
        error: (error) => {
          console.error('Error parsing instruments CSV:', error);
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error('Error loading instruments CSV:', error);
    return [];
  }
}

/**
 * Get a map of stock symbols to company names for top 100 stocks only
 */
export async function getStockMap(): Promise<Map<string, string>> {
  if (stockMapCache) {
    return stockMapCache;
  }

  const instruments = await loadInstruments();
  const stockMap = new Map<string, string>();

  // Filter for equity instruments and only include top 100 stocks
  instruments
    .filter(instrument =>
      instrument.instrument_type === 'EQ' &&
      TOP_100_STOCKS.has(instrument.tradingsymbol?.trim().toUpperCase())
    )
    .forEach(instrument => {
      const symbol = instrument.tradingsymbol?.trim();
      const name = instrument.name?.trim();

      if (symbol && name && symbol !== 'N/A' && name !== 'N/A') {
        stockMap.set(symbol.toUpperCase(), name);
        // Also add company name as key for reverse lookup (but limit to avoid conflicts)
        const shortName = name.split(' ')[0].toUpperCase(); // First word only
        if (shortName.length > 2 && !stockMap.has(shortName)) {
          stockMap.set(shortName, symbol);
        }
      }
    });

  stockMapCache = stockMap;
  console.log(`Loaded ${stockMap.size} top 100 stock symbols from instruments CSV`);
  return stockMap;
}

/**
 * Find stock symbols mentioned in text (more precise matching)
 */
export async function findStockTags(text: string): Promise<string[]> {
  if (!text || text.trim().length === 0) {
    return [];
  }

  const stockMap = await getStockMap();
  const foundStocks = new Set<string>();
  const words = text.toUpperCase().match(/\b\w+\b/g) || [];

  // Check each word against our stock map with stricter matching
  for (const word of words) {
    if (stockMap.has(word)) {
      // Get the symbol (not the company name) for display
      const symbol = stockMap.get(word)!;
      // If the found item is already a symbol, use it; otherwise get the symbol
      const displaySymbol = word.length <= 10 ? word : symbol;
      foundStocks.add(displaySymbol);
    }
  }

  // Limit to maximum 3 stock tags per article to avoid clutter
  return Array.from(foundStocks).slice(0, 3);
}