import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import NewsCard from "@/components/NewsCard";
import PriceChart from "@/components/PriceChart";
import { getStockById, getNewsByTicker } from "@/data/mockData";
import { ArrowLeft, TrendingUp, TrendingDown, Building2, BarChart3, DollarSign, Activity } from "lucide-react";

const StockDetail = () => {
  const { id } = useParams<{ id: string }>();
  const stock = getStockById(id || "");
  const relatedNews = stock ? getNewsByTicker(stock.ticker) : [];

  if (!stock) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-6 py-8">
          <p className="text-muted-foreground">Stock not found.</p>
          <Link to="/portfolio" className="mt-4 inline-flex items-center gap-2 text-sm text-foreground hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </main>
      </div>
    );
  }

  const isPositive = stock.change >= 0;

  const metrics = [
    { label: "Market Cap", value: stock.marketCap, icon: Building2 },
    { label: "Volume", value: stock.volume, icon: BarChart3 },
    { label: "P/E Ratio", value: stock.pe.toFixed(2), icon: DollarSign },
    { label: "52W Range", value: `$${stock.weekLow52} - $${stock.weekHigh52}`, icon: Activity },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-8">
        {/* Back Link */}
        <Link
          to="/portfolio"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        {/* Stock Header */}
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary">
              <span className="text-xl font-bold text-foreground">
                {stock.ticker.slice(0, 2)}
              </span>
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                {stock.name}
              </h1>
              <p className="text-lg text-muted-foreground">{stock.ticker}</p>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-4xl font-semibold tracking-tight text-foreground">
              ₹{stock.price.toFixed(2)}
            </p>
            <div
              className={`mt-1 flex items-center gap-2 sm:justify-end ${
                isPositive ? "text-positive" : "text-negative"
              }`}
            >
              {isPositive ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span className="font-medium">
                {isPositive ? "+" : ""}${stock.change.toFixed(2)} ({isPositive ? "+" : ""}
                {stock.changePercent.toFixed(2)}%)
              </span>
              <span className="text-sm text-muted-foreground">today</span>
            </div>
          </div>
        </div>

        {/* Price Chart */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-medium text-foreground">Price Chart</h2>
          <PriceChart positive={isPositive} />
        </div>

        {/* Key Metrics */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-medium text-foreground">Key Metrics</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="rounded-xl border border-border bg-card p-4"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{metric.label}</span>
                  </div>
                  <p className="text-xl font-semibold text-foreground">{metric.value}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* About */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-medium text-foreground">About</h2>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="leading-relaxed text-muted-foreground">{stock.description}</p>
          </div>
        </div>

        {/* Related News */}
        {relatedNews.length > 0 && (
          <div>
            <h2 className="mb-4 text-lg font-medium text-foreground">Related News</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedNews.slice(0, 4).map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default StockDetail;
