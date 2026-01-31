import { Stock } from "@/data/mockData";
import { Link } from "react-router-dom";
import { ChevronRight, TrendingUp, TrendingDown } from "lucide-react";

interface StockRowProps {
  stock: Stock;
}

const StockRow = ({ stock }: StockRowProps) => {
  const isPositive = stock.change >= 0;

  return (
    <Link
      to={`/stock/${stock.id}`}
      className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-border/80 hover:bg-surface-elevated"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
          <span className="text-sm font-bold text-foreground">
            {stock.ticker.slice(0, 2)}
          </span>
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{stock.name}</h3>
          <p className="text-sm text-muted-foreground">{stock.ticker}</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="text-right">
          <p className="text-lg font-semibold text-foreground">
            ₹{stock.price.toFixed(2)}
          </p>
          <div
            className={`flex items-center justify-end gap-1 text-sm font-medium ${
              isPositive ? "text-positive" : "text-negative"
            }`}
          >
            {isPositive ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            <span>
              {isPositive ? "+" : ""}
              {stock.changePercent.toFixed(2)}%
            </span>
          </div>
        </div>
        <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default StockRow;
