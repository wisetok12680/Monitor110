import Navigation from "@/components/Navigation";
import NewsCard from "@/components/NewsCard";
import { getPopularNews } from "@/data/mockData";
import { Flame } from "lucide-react";

const PopularNews = () => {
  const popularNews = getPopularNews();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3">
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
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {popularNews.map((article, index) => (
            <NewsCard
              key={article.id}
              article={article}
              featured={index === 0}
            />
          ))}
        </div>

        {popularNews.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-lg text-muted-foreground">
              No trending news at the moment.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default PopularNews;
