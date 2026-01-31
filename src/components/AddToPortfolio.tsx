import React, { useState, useEffect } from 'react';
import { Search, Plus, X } from 'lucide-react';
import Papa from 'papaparse';

interface StockOption {
  symbol: string;
  name: string;
  sector: string;
  market_cap: string;
}

interface AddToPortfolioProps {
  onAddStock: (stock: StockOption) => void;
  existingStocks: string[];
}

const AddToPortfolio: React.FC<AddToPortfolioProps> = ({ onAddStock, existingStocks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [stockOptions, setStockOptions] = useState<StockOption[]>([]);
  const [filteredOptions, setFilteredOptions] = useState<StockOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Load stock data from CSV
  useEffect(() => {
    const loadStockData = async () => {
      try {
        const response = await fetch('/stocks.csv');
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const stocks: StockOption[] = results.data
              .filter((row: any) => row.symbol && row.name) // Filter out empty rows
              .map((row: any) => ({
                symbol: row.symbol,
                name: row.name,
                sector: row.sector,
                market_cap: row.market_cap
              }));
            setStockOptions(stocks);
            setIsLoading(false);
          },
          error: (error) => {
            console.error('Error parsing CSV:', error);
            setIsLoading(false);
          }
        });
      } catch (error) {
        console.error('Error loading CSV:', error);
        setIsLoading(false);
      }
    };

    loadStockData();
  }, []);

  // Filter options based on search query
  useEffect(() => {
    if (searchQuery.length === 0) {
      setFilteredOptions([]);
      setSelectedIndex(-1);
      return;
    }

    const filtered = stockOptions
      .filter(stock =>
        !existingStocks.includes(stock.symbol) && // Exclude already added stocks
        (stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
         stock.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         stock.sector.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      .slice(0, 10); // Limit to 10 results

    setFilteredOptions(filtered);
    setSelectedIndex(-1);
  }, [searchQuery, stockOptions, existingStocks]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev =>
        prev < filteredOptions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleAddStock(filteredOptions[selectedIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchQuery('');
    }
  };

  const handleAddStock = (stock: StockOption) => {
    onAddStock(stock);
    setSearchQuery('');
    setIsOpen(false);
    setSelectedIndex(-1);
  };

  const formatMarketCap = (marketCap: string) => {
    const value = parseFloat(marketCap);
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}T`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}B`;
    }
    return `$${value}M`;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
      >
        <Plus className="h-4 w-4" />
        Add to Portfolio
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-96 bg-background border border-border rounded-lg shadow-xl z-50">
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search stocks by name, symbol, or sector..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {isLoading && (
              <div className="flex items-center justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                <span className="ml-2 text-sm text-muted-foreground">Loading stocks...</span>
              </div>
            )}

            {!isLoading && filteredOptions.length > 0 && (
              <div className="mt-3 max-h-64 overflow-y-auto border-t border-border">
                {filteredOptions.map((stock, index) => (
                  <button
                    key={stock.symbol}
                    onClick={() => handleAddStock(stock)}
                    className={`w-full text-left px-4 py-3 border-b border-border last:border-b-0 transition-colors ${
                      index === selectedIndex
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-sm">{stock.symbol}</div>
                        <div className="text-xs text-muted-foreground truncate max-w-48">
                          {stock.name}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">
                          {formatMarketCap(stock.market_cap)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stock.sector}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {!isLoading && searchQuery && filteredOptions.length === 0 && (
              <div className="py-4 text-center text-sm text-muted-foreground">
                No stocks found matching "{searchQuery}"
              </div>
            )}

            {!isLoading && !searchQuery && (
              <div className="py-4 text-center text-sm text-muted-foreground">
                Start typing to search for stocks...
              </div>
            )}
          </div>
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsOpen(false);
            setSearchQuery('');
          }}
        />
      )}
    </div>
  );
};

export default AddToPortfolio;