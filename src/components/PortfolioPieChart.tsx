import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface Stock {
  id: string;
  name: string;
  ticker: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap?: string;
  volume?: string;
  peRatio?: number;
  weekHigh52?: number;
  weekLow52?: number;
  sector?: string;
  description?: string;
}

interface PortfolioPieChartProps {
  stocks: Stock[];
}

const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8',
  '#82CA9D', '#FFC658', '#FF7C7C', '#8DD1E1', '#D084D0'
];

const PortfolioPieChart: React.FC<PortfolioPieChartProps> = ({ stocks }) => {
  // Calculate total portfolio value for percentage calculation
  const totalValue = stocks.reduce((sum, stock) => sum + stock.price * 100, 0);

  // Prepare data for pie chart (using volume as the metric, but could be market cap)
  const chartData = stocks.map((stock, index) => {
    const volume = parseFloat(stock.volume?.replace(/[KM]/g, '') || '0');
    const multiplier = stock.volume?.includes('M') ? 1000000 : stock.volume?.includes('K') ? 1000 : 1;
    const volumeValue = volume * multiplier;

    return {
      name: stock.ticker,
      value: volumeValue,
      fullName: stock.name,
      price: stock.price,
      change: stock.change,
      changePercent: stock.changePercent,
      color: COLORS[index % COLORS.length],
      percentage: ((stock.price * 100) / totalValue * 100).toFixed(1)
    };
  });

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
          <p className="font-semibold">{data.fullName}</p>
          <p className="text-sm text-muted-foreground">{data.name}</p>
          <p className="text-sm">Price: ₹{data.price.toFixed(2)}</p>
          <p className="text-sm">Portfolio: {data.percentage}%</p>
          <div className="flex items-center gap-1 mt-1">
            {data.change >= 0 ? (
              <TrendingUp className="h-3 w-3 text-green-500" />
            ) : (
              <TrendingDown className="h-3 w-3 text-red-500" />
            )}
            <span className={`text-sm ${data.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {data.change >= 0 ? '+' : ''}{data.change.toFixed(2)} ({data.changePercent.toFixed(2)}%)
            </span>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    if (percent < 0.05) return null; // Don't show labels for slices smaller than 5%

    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize="12"
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-full h-96 relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value, entry: any) => (
              <span style={{ color: entry.color }}>
                {value} ({entry.payload?.percentage}%)
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PortfolioPieChart;