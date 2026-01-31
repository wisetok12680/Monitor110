import { NewsArticle } from "@/data/mockData";
import { Clock, ExternalLink } from "lucide-react";

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

const NewsCard = ({ article, featured = false }: NewsCardProps) => {
  const handleClick = () => {
    if (article.url) {
      window.open(article.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <article
      onClick={handleClick}
      className={`group cursor-pointer rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-border/80 hover:bg-surface-elevated hover:shadow-md ${
        featured ? "md:col-span-2" : ""
      } ${article.url ? 'cursor-pointer' : 'cursor-default'}`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="font-medium text-foreground/70">{article.source}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.timestamp}
            </span>
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </div>

        <h3 
          className={`font-semibold leading-tight text-foreground transition-colors group-hover:text-foreground/80 ${
            featured ? "text-xl md:text-2xl" : "text-lg"
          }`}
        >
          {article.headline}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {article.summary}
        </p>

        {article.relatedTickers && article.relatedTickers.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {article.relatedTickers.map((ticker) => (
              <span
                key={ticker}
                className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
              >
                ${ticker}
              </span>
            ))}
          </div>
        )}

        {article.stockTags && article.stockTags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {article.stockTags.map((stock) => (
              <span
                key={stock}
                className="rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {stock}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default NewsCard;
