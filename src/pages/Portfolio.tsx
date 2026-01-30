import Navigation from "@/components/Navigation";
import StockRow from "@/components/StockRow";
import { portfolioStocks } from "@/data/mockData";
import { TrendingUp, TrendingDown } from "lucide-react";

const Portfolio = () => {
  const totalValue = portfolioStocks.reduce((sum, stock) => sum + stock.price * 100, 0);
  const totalChange = portfolioStocks.reduce((sum, stock) => sum + stock.change * 100, 0);
  const totalChangePercent = (totalChange / (totalValue - totalChange)) * 100;
  const isPositive = totalChange >= 0;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            My Portfolio
          </h1>
          <p className="mt-2 text-muted-foreground">
            Track your investments and market performance
          </p>
        </div>

        {/* Portfolio Summary */}
        <div className="mb-8 rounded-xl border border-border bg-card p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
              <p className="text-4xl font-semibold tracking-tight text-foreground">
                ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div
              className={`flex items-center gap-2 rounded-lg px-4 py-2 ${
                isPositive ? "bg-positive/10" : "bg-negative/10"
              }`}
            >
              {isPositive ? (
                <TrendingUp className="h-5 w-5 text-positive" />
              ) : (
                <TrendingDown className="h-5 w-5 text-negative" />
              )}
              <span
                className={`text-lg font-semibold ${
                  isPositive ? "text-positive" : "text-negative"
                }`}
              >
                {isPositive ? "+" : ""}
                ${Math.abs(totalChange).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                {" "}
                ({isPositive ? "+" : ""}{totalChangePercent.toFixed(2)}%)
              </span>
              <span className="text-sm text-muted-foreground">today</span>
            </div>
          </div>
        </div>

        {/* Stock List */}
        <div className="space-y-3">
          <h2 className="text-lg font-medium text-foreground">Holdings</h2>
          <div className="space-y-2">
            {portfolioStocks.map((stock) => (
              <StockRow key={stock.id} stock={stock} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
