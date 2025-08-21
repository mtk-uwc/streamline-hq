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
  Building2,
  ExternalLink,
  Users
} from "lucide-react"

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("")

  const projects = [
    {
      id: 1,
      name: "VR Training Simulator",
      company: "TechCorp Industries",
      description: "Advanced virtual reality training simulator for industrial equipment operation and safety protocols.",
      team: "5 members",
      status: "Published",
      dateCreated: "2024-01-15",
      image: "/placeholder.svg",
      links: ["https://demo.techcorp.com", "https://github.com/techcorp/vr-sim"]
    },
    {
      id: 2,
      name: "AR Learning Platform",
      company: "EduTech Solutions",
      description: "Augmented reality platform for interactive learning experiences in science and mathematics.",
      team: "8 members",
      status: "Draft",
      dateCreated: "2024-01-14",
      image: "/placeholder.svg",
      links: ["https://ar.edutech.com"]
    },
    {
      id: 3,
      name: "Immersive Collaboration Hub",
      company: "MetaWork Inc",
      description: "Virtual collaboration space for remote teams with immersive meeting capabilities.",
      team: "12 members",
      status: "Published",
      dateCreated: "2024-01-13",
      image: "/placeholder.svg",
      links: ["https://hub.metawork.com", "https://docs.metawork.com"]
    },
    {
      id: 4,
      name: "Medical VR Training",
      company: "HealthTech Innovations",
      description: "Virtual reality training system for medical procedures and emergency response training.",
      team: "6 members",
      status: "Published",
      dateCreated: "2024-01-12",
      image: "/placeholder.svg",
      links: ["https://medical.healthtech.com"]
    }
  ]

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.company.toLowerCase().includes(searchTerm.toLowerCase())
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
          <h1 className="text-3xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground">Manage and showcase your project portfolio.</p>
        </div>
        <Button className="bg-gradient-admin hover:opacity-90 transition-opacity" asChild>
          <a href="/projects/new">
            <Plus className="h-4 w-4 mr-2" />
            Add New Project
          </a>
        </Button>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Projects</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow duration-200 border-primary/20">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className={`absolute top-3 right-3 ${getStatusColor(project.status)}`}>
                    {project.status}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{project.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Building2 className="h-4 w-4" />
                        {project.company}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {project.team}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(project.dateCreated).toLocaleDateString()}
                      </div>
                    </div>
                    
                    {project.links.length > 0 && (
                      <div className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {project.links.length} link{project.links.length > 1 ? 's' : ''}
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={`/projects/${project.id}`}>
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </a>
                      </Button>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm" asChild>
                          <a href={`/projects/${project.id}/edit`}>
                            <Edit className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}