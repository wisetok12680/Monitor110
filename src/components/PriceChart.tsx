interface PriceChartProps {
  positive?: boolean;
}

const PriceChart = ({ positive = true }: PriceChartProps) => {
  // Generate smooth random path for chart
  const generatePath = () => {
    const points = [];
    const width = 400;
    const height = 120;
    const segments = 20;
    
    let y = height / 2 + (Math.random() - 0.5) * 30;
    
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * width;
      y = y + (Math.random() - (positive ? 0.4 : 0.6)) * 15;
      y = Math.max(10, Math.min(height - 10, y));
      points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
    }
    
    return points.join(' ');
  };

  const path = generatePath();
  const strokeColor = positive ? 'hsl(var(--positive))' : 'hsl(var(--negative))';
  const gradientId = `gradient-${positive ? 'positive' : 'negative'}`;

  return (
    <div className="relative h-32 w-full overflow-hidden rounded-xl bg-secondary/30">
      <svg
        viewBox="0 0 400 120"
        className="h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={strokeColor} stopOpacity="0.2" />
            <stop offset="100%" stopColor={strokeColor} stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Area fill */}
        <path
          d={`${path} L 400 120 L 0 120 Z`}
          fill={`url(#${gradientId})`}
        />
        
        {/* Line */}
        <path
          d={path}
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Time labels */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-between px-4 text-xs text-muted-foreground">
        <span>9:30</span>
        <span>12:00</span>
        <span>16:00</span>
      </div>
    </div>
  );
};

export default PriceChart;
