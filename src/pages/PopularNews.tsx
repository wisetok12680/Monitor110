import Navigation from "@/components/Navigation";
import NewsCard from "@/components/NewsCard";
import { useFinancialNews, useSearchNews } from "@/hooks/use-news";
import { Flame, Loader2, Search } from "lucide-react";
import { useState } from "react";

const PopularNews = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Use API data if available, otherwise fallback to mock data
  const { data: apiNews = [], isLoading: isLoadingApi, error: apiError } = useFinancialNews();
  const { data: searchResults = [], isLoading: isSearching } = useSearchNews(searchQuery, searchQuery.length > 2);

  // Determine which data to display
  const displayNews = searchQuery.length > 2 ? searchResults : apiNews;
  const isLoading = searchQuery.length > 2 ? isSearching : isLoadingApi;
  const hasError = apiError && searchQuery.length <= 2;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
              <Flame className="h-5 w-5 text-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                Popular Today
              </h1>
              <p className="text-muted-foreground">
                Trending financial news and market updates
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search financial news, stocks, companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-border bg-card pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            <span className="ml-2 text-muted-foreground">
              {searchQuery.length > 2 ? "Searching news..." : "Loading latest news..."}
            </span>
          </div>
        )}

        {hasError && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-lg text-muted-foreground mb-2">
              Unable to load latest news from external sources.
            </p>
            <p className="text-sm text-muted-foreground">
              Showing cached news data. News API may be temporarily unavailable.
            </p>
          </div>
        )}

        {!isLoading && !hasError && (
          <>
            <div className="grid gap-4 md:grid-cols-2">
              {displayNews.map((article, index) => (
                <NewsCard
                  key={article.id}
                  article={article}
                  featured={index === 0 && searchQuery.length <= 2}
                />
              ))}
            </div>

            {displayNews.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-lg text-muted-foreground">
                  {searchQuery.length > 2
                    ? `No search results found for "${searchQuery}"`
                    : "No trending news at the moment."
                  }
                </p>
                {searchQuery.length > 2 && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Search is currently unavailable. News API may be temporarily down.
                  </p>
                )}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default PopularNews;
