import { MetricCard } from "@/components/MetricCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  TrendingUp, 
  Eye, 
  Users, 
  BarChart3,
  ExternalLink
} from "lucide-react"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts"

export default function Analytics() {
  const trafficData = [
    { name: "Organic Search", value: 450, color: "hsl(var(--admin-blue))" },
    { name: "Paid Ads", value: 320, color: "hsl(var(--metric-yellow-foreground))" },
    { name: "Social Media", value: 280, color: "hsl(var(--metric-pink-foreground))" },
    { name: "Direct", value: 380, color: "hsl(var(--metric-green-foreground))" }
  ]

  const landingPagesData = [
    { name: "Home Page", views: 1200 },
    { name: "About", views: 800 },
    { name: "Products", views: 650 },
    { name: "Blog", views: 450 },
    { name: "Contact", views: 300 }
  ]

  const topPosts = [
    {
      id: 1,
      title: "The Future of Virtual Reality in Education",
      views: 2345,
      engagement: "12.5%"
    },
    {
      id: 2,
      title: "Immersive Learning Experiences",
      views: 1890,
      engagement: "10.2%"
    },
    {
      id: 3,
      title: "Latest AR Equipment Review",
      views: 1567,
      engagement: "8.7%"
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Track your content performance and engagement.</p>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Most Viewed Post"
          value="2.3K"
          icon={Eye}
          variant="yellow"
          subtitle="VR in Education"
        />
        <MetricCard
          title="Top Author"
          value="John D."
          icon={Users}
          variant="pink"
          subtitle="12 posts this month"
        />
        <MetricCard
          title="Total Visitors"
          value="45.2K"
          icon={TrendingUp}
          variant="green"
          subtitle="↑ 18% from last month"
        />
        <MetricCard
          title="Bounce Rate"
          value="24.5%"
          icon={BarChart3}
          variant="blue"
          subtitle="↓ 3% improvement"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="hsl(var(--admin-blue))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top Landing Pages */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Top Landing Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={landingPagesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="views" 
                  stroke="hsl(var(--admin-blue))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--admin-blue))", strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Performing Posts */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Top Performing Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPosts.map((post, index) => (
              <div key={post.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-admin-blue text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium">{post.title}</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {post.views.toLocaleString()} views
                      </span>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {post.engagement} engagement
                      </span>
                    </div>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground cursor-pointer" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}