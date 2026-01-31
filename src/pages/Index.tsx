import Navigation from "@/components/Navigation";
import NewsCard from "@/components/NewsCard";
import { getPortfolioNews } from "@/data/mockData";
import { Search } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const allNews = getPortfolioNews();
  
  // Filter news based on search query
  const news = searchQuery.length > 2 
    ? allNews.filter(article => 
        article.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.source.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allNews;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Your News Feed
          </h1>
          <p className="mt-2 text-muted-foreground">
            Latest updates from your portfolio stocks
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mt-4">
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

        <div className="grid gap-4 md:grid-cols-2">
          {news.map((article, index) => (
            <NewsCard
              key={article.id}
              article={article}
              featured={index === 0}
            />
          ))}
        </div>

        {news.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            {searchQuery.length > 2 ? (
              <>
                <p className="text-lg text-muted-foreground">
                  No news found matching "{searchQuery}".
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try a different search term or clear the search to see all news.
                </p>
              </>
            ) : (
              <>
                <p className="text-lg text-muted-foreground">
                  No news available for your portfolio stocks.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Add stocks to your portfolio to see relevant news.
                </p>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
