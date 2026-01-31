import { Link, useLocation } from "react-router-dom";
import { TrendingUp, Newspaper, Briefcase } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "News", icon: Newspaper },
    { path: "/popular", label: "Popular", icon: TrendingUp },
    { path: "/portfolio", label: "Portfolio", icon: Briefcase },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <nav className="flex h-16 items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/80"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
              <span className="text-sm font-bold text-background">FN</span>
            </div>
            <span className="hidden sm:inline">Monitor110</span>
          </Link>

          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
