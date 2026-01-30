import Navigation from "@/components/Navigation";
import NewsCard from "@/components/NewsCard";
import { getPortfolioNews } from "@/data/mockData";

const Index = () => {
  const news = getPortfolioNews();

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
            <p className="text-lg text-muted-foreground">
              No news available for your portfolio stocks.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Add stocks to your portfolio to see relevant news.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
