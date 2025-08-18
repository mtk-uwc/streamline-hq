import { MetricCard } from "@/components/MetricCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Eye, 
  FileText, 
  Users, 
  TrendingUp, 
  PlusCircle,
  Calendar,
  User
} from "lucide-react"

export default function Dashboard() {
  const recentActivity = [
    {
      id: 1,
      action: "New post published",
      title: "Latest Industry Trends Analysis",
      author: "John Doe",
      time: "2 hours ago",
      type: "post"
    },
    {
      id: 2,
      action: "Team member added",
      title: "Sarah Johnson joined as Content Manager",
      author: "Admin",
      time: "5 hours ago",
      type: "team"
    },
    {
      id: 3,
      action: "Equipment updated",
      title: "VR Headset specifications modified",
      author: "Mike Wilson",
      time: "1 day ago",
      type: "equipment"
    },
    {
      id: 4,
      action: "Post viewed",
      title: "Virtual Reality in Education reached 1K views",
      author: "System",
      time: "2 days ago",
      type: "analytics"
    }
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "post": return <FileText className="h-4 w-4" />
      case "team": return <User className="h-4 w-4" />
      case "equipment": return <PlusCircle className="h-4 w-4" />
      default: return <TrendingUp className="h-4 w-4" />
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case "post": return "bg-metric-yellow text-metric-yellow-foreground"
      case "team": return "bg-metric-green text-metric-green-foreground"
      case "equipment": return "bg-metric-pink text-metric-pink-foreground"
      default: return "bg-metric-blue text-metric-blue-foreground"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening.</p>
        </div>
        <Button className="bg-gradient-admin hover:opacity-90 transition-opacity">
          <PlusCircle className="h-4 w-4 mr-2" />
          Quick Add
        </Button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Posts"
          value="847"
          icon={FileText}
          variant="yellow"
          subtitle="↑ 12% from last month"
        />
        <MetricCard
          title="Engagements"
          value="1,234"
          icon={Eye}
          variant="pink"
          subtitle="Past 24 hours"
        />
        <MetricCard
          title="Team Members"
          value="23"
          icon={Users}
          variant="green"
          subtitle="Active contributors"
        />
        <MetricCard
          title="Total Visitors"
          value="45.2K"
          icon={TrendingUp}
          variant="blue"
          subtitle="This month"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className={`p-2 rounded-full ${getActivityColor(activity.type)}`}>
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-sm text-muted-foreground truncate">{activity.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">by {activity.author}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="/posts/new">
                <FileText className="h-4 w-4 mr-2" />
                Create New Post
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="/team/new">
                <Users className="h-4 w-4 mr-2" />
                Add Team Member
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="/equipment/new">
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Equipment
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="/analytics">
                <TrendingUp className="h-4 w-4 mr-2" />
                View Analytics
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}