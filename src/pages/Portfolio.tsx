import Navigation from "@/components/Navigation";
import StockRow from "@/components/StockRow";
import PortfolioPieChart from "@/components/PortfolioPieChart";
import AddToPortfolio from "@/components/AddToPortfolio";
import { portfolioStocks as initialStocks } from "@/data/mockData";
import { TrendingUp, TrendingDown, PieChart as PieChartIcon } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [portfolioStocks, setPortfolioStocks] = useState(initialStocks);

  const totalValue = portfolioStocks.reduce((sum, stock) => sum + stock.price * 100, 0);
  const totalChange = portfolioStocks.reduce((sum, stock) => sum + stock.change * 100, 0);
  const totalChangePercent = (totalChange / (totalValue - totalChange)) * 100;
  const isPositive = totalChange >= 0;

  const handleAddStock = (newStock: any) => {
    // Create a new stock object with mock data
    const stockToAdd = {
      id: Date.now().toString(),
      name: newStock.name,
      ticker: newStock.symbol,
      price: Math.random() * 1000 + 100, // Random price for demo
      change: (Math.random() - 0.5) * 20, // Random change
      changePercent: (Math.random() - 0.5) * 4,
      marketCap: newStock.market_cap,
      volume: `${Math.floor(Math.random() * 100)}M`,
      pe: Math.floor(Math.random() * 50) + 10,
      weekHigh52: Math.random() * 2000 + 500,
      weekLow52: Math.random() * 500 + 50,
      sector: newStock.sector,
      description: `${newStock.name} is a leading company in the ${newStock.sector} sector.`
    };

    setPortfolioStocks(prev => [...prev, stockToAdd]);
  };

  const existingStockSymbols = portfolioStocks.map(stock => stock.ticker);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                My Portfolio
              </h1>
              <p className="mt-2 text-muted-foreground">
                Track your investments and market performance
              </p>
            </div>
            <AddToPortfolio
              onAddStock={handleAddStock}
              existingStocks={existingStockSymbols}
            />
          </div>
        </div>

        {/* Portfolio Summary */}
        <div className="mb-8 rounded-xl border border-border bg-card p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
              <p className="text-4xl font-semibold tracking-tight text-foreground">
                ₹{totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
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
                ₹{Math.abs(totalChange).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                {" "}
                ({isPositive ? "+" : ""}{totalChangePercent.toFixed(2)}%)
              </span>
              <span className="text-sm text-muted-foreground">today</span>
            </div>
          </div>
        </div>

        {/* Portfolio Visualization */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <PieChartIcon className="h-5 w-5" />
            <h2 className="text-lg font-medium text-foreground">Portfolio Allocation</h2>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <PortfolioPieChart stocks={portfolioStocks} />
          </div>
        </div>

        {/* Stock List */}
        <div className="space-y-3">
          <h2 className="text-lg font-medium text-foreground">Holdings ({portfolioStocks.length})</h2>
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
