import { useQuery } from "@tanstack/react-query";
import { fetchFinancialNews, searchNews } from "@/lib/newsApi";
import { NewsArticle } from "@/data/mockData";

export const useFinancialNews = () => {
  return useQuery<NewsArticle[]>({
    queryKey: ["financial-news"],
    queryFn: fetchFinancialNews,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 10 * 60 * 1000, // Refetch every 10 minutes
    retry: 2, // Retry failed requests 2 times
  });
};

export const useSearchNews = (query: string, enabled: boolean = false) => {
  return useQuery<NewsArticle[]>({
    queryKey: ["search-news", query],
    queryFn: () => searchNews(query),
    enabled: enabled && query.length > 2,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};