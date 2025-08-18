import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface MetricCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  variant?: "yellow" | "pink" | "green" | "blue"
  subtitle?: string
}

export function MetricCard({ 
  title, 
  value, 
  icon: Icon, 
  variant = "blue",
  subtitle 
}: MetricCardProps) {
  const variants = {
    yellow: "bg-metric-yellow text-metric-yellow-foreground border-metric-yellow-foreground/20",
    pink: "bg-metric-pink text-metric-pink-foreground border-metric-pink-foreground/20",
    green: "bg-metric-green text-metric-green-foreground border-metric-green-foreground/20",
    blue: "bg-metric-blue text-metric-blue-foreground border-metric-blue-foreground/20"
  }

  return (
    <Card className={`${variants[variant]} transition-all duration-300 hover:shadow-lg hover:scale-105`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium opacity-80">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            {subtitle && (
              <p className="text-xs opacity-70 mt-1">{subtitle}</p>
            )}
          </div>
          <Icon className="h-8 w-8 opacity-80" />
        </div>
      </CardContent>
    </Card>
  )
}