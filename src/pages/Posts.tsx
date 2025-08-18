import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Plus, 
  Eye, 
  Trash2, 
  Edit,
  Calendar,
  User
} from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Posts() {
  const [searchTerm, setSearchTerm] = useState("")

  const posts = [
    {
      id: 1,
      title: "The Future of Virtual Reality in Education",
      author: "John Doe",
      category: "Technology",
      status: "Published",
      dateCreated: "2024-01-15",
      views: 1234
    },
    {
      id: 2,
      title: "Immersive Learning Experiences",
      author: "Sarah Johnson",
      category: "Education",
      status: "Draft",
      dateCreated: "2024-01-14",
      views: 567
    },
    {
      id: 3,
      title: "Latest AR Equipment Review",
      author: "Mike Wilson",
      category: "Reviews",
      status: "Published",
      dateCreated: "2024-01-13",
      views: 890
    },
    {
      id: 4,
      title: "Team Building in Virtual Spaces",
      author: "Emma Davis",
      category: "Collaboration",
      status: "Published",
      dateCreated: "2024-01-12",
      views: 445
    }
  ]

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    return status === "Published" 
      ? "bg-metric-green text-metric-green-foreground" 
      : "bg-metric-yellow text-metric-yellow-foreground"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Posts</h1>
          <p className="text-muted-foreground">Manage your content and publications.</p>
        </div>
        <Button className="bg-gradient-admin hover:opacity-90 transition-opacity" asChild>
          <a href="/posts/new">
            <Plus className="h-4 w-4 mr-2" />
            Create New Post
          </a>
        </Button>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Posts</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Post</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date Created</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPosts.map((post) => (
                <TableRow key={post.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div>
                      <p className="font-medium">{post.title}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      {post.author}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{post.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(post.status)}>
                      {post.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      {new Date(post.dateCreated).toLocaleDateString()}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4 text-muted-foreground" />
                      {post.views.toLocaleString()}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={`/posts/${post.id}`}>
                          <Eye className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={`/posts/${post.id}/edit`}>
                          <Edit className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}