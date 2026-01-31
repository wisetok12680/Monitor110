import { useQuery } from "@tanstack/react-query";
import { fetchStockPrice, fetchMultipleStocks, TOP_INDIAN_STOCKS, Stock } from "@/lib/stockApi";

export const useStockPrice = (symbol: string, enabled: boolean = true) => {
  return useQuery<Stock>({
    queryKey: ["stock-price", symbol],
    queryFn: () => fetchStockPrice(symbol),
    enabled: enabled && !!symbol,
    staleTime: 60 * 1000, // 1 minute
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
    retry: 2,
  });
};

export const useMultipleStocks = (symbols: string[], enabled: boolean = true) => {
  return useQuery<Stock[]>({
    queryKey: ["multiple-stocks", symbols],
    queryFn: () => fetchMultipleStocks(symbols),
    enabled: enabled && symbols.length > 0,
    staleTime: 60 * 1000, // 1 minute
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
    retry: 2,
  });
};

export const useTopStocks = () => {
  return useMultipleStocks(TOP_INDIAN_STOCKS);
};