# 📈 Clear Market Feed - Your Personal Financial Dashboard

Ever felt lost trying to keep up with the Indian stock market? Yeah, we've been there too. **Monitor110** is like having a personal financial assistant in your pocket—it brings together everything you need to know about your investments and the market, all in one beautiful, easy-to-use dashboard.

Think of it as your personal command center for Indian market intelligence. We've built this platform from the ground up with real people in mind: whether you're a seasoned investor or just starting out, you'll find exactly what you need without the noise and complexity that plagues traditional financial apps.

## 🎯 What You Can Actually Do With This

- **Your Personal News Feed**: Get handpicked news about the Indian companies you actually care about. No spam, no distractions—just the stories that matter.
- **Popular Market Buzz**: Stay in the loop with what everyone else is talking about in Indian markets. Know what's trending before everyone else does.
- **Your Portfolio Snapshot**: Add your favorite Indian stocks and watch them all in one place. See exactly how your picks are performing with live price data.
- **Deep Dive Into Stocks**: Click on any stock and get the full picture—detailed performance metrics, 52-week highs/lows, P/E ratios, all the good stuff.
- **Beautifully Simple**: Dark theme, lightning-fast navigation, and a design that actually makes sense. No 47-menu dropdowns. Just clean, simple interfaces.

## 🔌 How We Get Your Data

We're not making this up out of thin air. Here's where the real-time magic comes from:

### **GNews API** - Your News Lifeline
We pull live financial news from [GNews](https://gnews.io/), focusing on Indian market headlines.

- Live business headlines from trusted sources
- Smart search that actually understands what you're looking for
- Automatic detection of stock mentions in articles
- Intelligent fallback when APIs get overwhelmed

### **Yahoo Finance API via RapidAPI** - Real Stock Prices
Using the [Yahoo Finance API](https://rapidapi.com/) through RapidAPI, we fetch real-time stock quotes for Indian securities. It's blazingly fast and incredibly reliable.

- Real-time price quotes for NSE-listed stocks
- Market cap, volume, and performance metrics
- 52-week highs and lows
- Change percentages so you know at a glance if you're winning or losing

### **PapaParse** - Parsing Stock Lists
Under the hood, we use [PapaParse](https://www.papaparse.com/) to handle CSV files containing comprehensive stock data. This lets us offer a powerful stock search feature that's actually instant.

## 🛠️ Built With Modern Magic

**Frontend Technologies:**
- **React 18** - The latest in component-based UI magic
- **TypeScript** - Catch bugs before they embarrass you in production
- **Vite** - Fast development, even faster builds
- **Tailwind CSS** - Make it look good without the CSS headaches
- **Shadcn/ui + Radix UI** - Accessible, beautiful components out of the box
- **Recharts** - Charts that don't look like they're from 2005
- **React Router v6** - Seamless navigation between pages
- **TanStack Query (React Query)** - Smart data fetching that handles caching like a pro

**Build & Dev Tools:**
- **Vitest** - Testing that's as fast as your app
- **ESLint** - Keep the code clean and consistent
- **PostCSS** - CSS preprocessing for maximum flexibility

## 🚀 Get Up and Running

### What You'll Need
- Node.js (v16 or newer)
- npm or your package manager of choice
- A free API key from [GNews](https://gnews.io/) (optional, but recommended for production)
- A RapidAPI account with access to Yahoo Finance API

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository** (or navigate to your project folder):
```bash
git clone https://github.com/yourusername/clear-market-feed.git
cd clear-market-feed
```

2. **Install all the dependencies**:
```bash
npm install
```

3. **Set up your API keys** (create a `.env.local` file in the root):
```env
# GNews API - Get free at https://gnews.io/
VITE_GNEWS_API_KEY=your_free_gnews_api_key_here

# RapidAPI - Get at https://rapidapi.com/
VITE_RAPIDAPI_KEY=your_rapidapi_key_here
VITE_RAPIDAPI_HOST=yahoo-finance15.p.rapidapi.com
```

4. **Fire it up**:
```bash
npm run dev
```

That's it! Head to `http://localhost:5173` and start exploring the market. The app will create a dev server that auto-refreshes as you make changes.

## 📝 Available Commands

```bash
# Development
npm run dev              # Start the dev server with hot reload

# Production
npm run build            # Build for production (creates optimized bundle)
npm run preview          # Preview your production build locally

# Code Quality
npm run lint             # Check code for style and error issues
npm run test             # Run the test suite once
npm run test:watch      # Run tests in watch mode (keeps running)
```

## 📂 How the Code is Organized

```
clear-market-feed/
├── src/
│   ├── components/              # All the React components
│   │   ├── Navigation.tsx       # Main navigation bar
│   │   ├── NewsCard.tsx         # Individual news article cards
│   │   ├── StockRow.tsx         # Stock list item component
│   │   ├── PriceChart.tsx       # Mini price charts
│   │   ├── PortfolioPieChart.tsx # Portfolio allocation visualization
│   │   ├── AddToPortfolio.tsx   # Add stock modal
│   │   └── ui/                  # Base components from shadcn/ui
│   │
│   ├── pages/                   # Full page components
│   │   ├── Index.tsx            # Home - Your personalized news feed
│   │   ├── PopularNews.tsx      # Popular stories everyone's talking about
│   │   ├── Portfolio.tsx        # Your investment dashboard
│   │   ├── StockDetail.tsx      # Detailed view for a single stock
│   │   └── NotFound.tsx         # 404 page
│   │
│   ├── lib/                     # The boring but important stuff
│   │   ├── newsApi.ts           # GNews API integration
│   │   ├── stockApi.ts          # Yahoo Finance API integration
│   │   ├── utils.ts             # Utility functions
│   │   └── api.ts               # General API helpers
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── use-toast.ts         # Toast notification logic
│   │   ├── use-mobile.tsx       # Mobile device detection
│   │   └── use-news.ts          # News fetching logic
│   │
│   ├── data/                    # Data layer
│   │   ├── mockData.ts          # Fallback data when APIs are down
│   │   └── stockUtils.ts        # Stock data utilities
│   │
│   ├── App.tsx                  # Main app component with routing
│   ├── main.tsx                 # Entry point
│   └── ...
├── public/                      # Static assets
├── .env.example                 # Template for environment variables
├── package.json                 # Project dependencies
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
└── tailwind.config.ts          # Tailwind CSS configuration
```

## 🔧 Technical Nitty-Gritty

### Styling
Everything is styled with **Tailwind CSS**. We're using utility-first CSS classes, which means you can build complex UIs without touching a single CSS file. Combined with shadcn/ui components, we get a beautiful, consistent design system out of the box.

### Type Safety
We're 100% TypeScript. This means fewer runtime errors and better IDE support. Your code editor will actually help you while you're coding—no more guessing at function signatures.

### Routing
**React Router v6** handles navigation between pages. Click on a stock, go to your portfolio, check popular news—all without a full page refresh. It's smooth as butter.

## 🤝 How the Data Flows

1. **When you first load the app** - React Query fetches news from GNews API (with our mock data as a fallback)
2. **When you click a stock** - We fetch real-time price data from Yahoo Finance API via RapidAPI
3. **When the API gets angry** (rate limit) - We seamlessly switch to our hand-crafted mock data
4. **When you add stocks to your portfolio** - It's all stored locally (for now) and shows alongside real market data

## 🎨 Design Philosophy

We believe financial apps don't need to be boring or overwhelming. Clear Market Feed is designed for **clarity, speed, and simplicity**. Every feature serves a purpose. Every button has a reason to exist.

- **Dark theme** because staring at a bright screen while checking stocks at 3am is terrible
- **One-click access** to everything—no buried menus or confusing navigation
- **Responsive design** that works beautifully on phones, tablets, and desktops
- **Accessible** to everyone, regardless of their tech expertise level

## ⚡ Performance Notes

- **Vite** builds are lightning-fast because of ES modules
- **Code splitting** ensures you only load what you need
- **React Query** caching prevents unnecessary API calls
- **Lazy loading** for non-critical components
- **Optimized images** and assets

## 🐛 Known Quirks & Gotchas

- **GNews API has rate limits** - We handle this gracefully, but if you're making 1000 requests per minute, you might hit them
- **RapidAPI requires authentication** - Make sure your keys are properly set up, or you'll get errors
- **Stock prices are in INR** - All prices are displayed in Indian Rupees (₹)
- **Mock data is static** - It won't change, but it's there when APIs fail

## 🚦 Environment Variables

```env
# Must have for production
VITE_GNEWS_API_KEY=your_api_key           # Get from gnews.io
VITE_RAPIDAPI_KEY=your_key                # Get from rapidapi.com
VITE_RAPIDAPI_HOST=yahoo-finance15.p.rapidapi.com

# Optional (with sensible defaults)
VITE_API_TIMEOUT=5000                     # API timeout in milliseconds
```

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com)
- [TanStack Query](https://tanstack.com/query/latest)
- [GNews API Docs](https://gnews.io/docs)
- [Yahoo Finance API](https://rapidapi.com/api-sports/api/api-sports)

## 📄 License

This project is open source and available under the MIT License.

## 💬 Contributing

Found a bug? Want to add a feature? We'd love your help! Fork the repo, make your changes, and submit a pull request. Let's make financial dashboards awesome together.

## 🙌 Acknowledgments

- The incredible open-source community that makes projects like this possible
- GNews for reliable financial news data
- Yahoo Finance for stock price information
- Shadcn for the beautiful UI component library
- Everyone using this platform—you make it all worth it

---

**Built with ❤️ for everyone who's ever wondered what the market's doing.**

### News API Service (`src/lib/newsApi.ts`)

- `fetchFinancialNews()`: Fetches top business headlines
- `searchNews(query)`: Searches news by query
- Automatic fallback to mock data on API failures

### React Query Hooks (`src/hooks/use-news.ts`)

- `useFinancialNews()`: Hook for fetching financial news
- `useSearchNews(query)`: Hook for searching news
- Built-in caching and error handling
