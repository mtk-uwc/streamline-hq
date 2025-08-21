import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MetricCard } from "@/components/MetricCard"
import { ArrowLeft, Upload, Eye, Users, ExternalLink, Calendar } from "lucide-react"
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts"

export default function ProjectEditor() {
  const navigate = useNavigate()
  const { id } = useParams()
  const isEditMode = Boolean(id)
  
  const [projectName, setProjectName] = useState("")
  const [company, setCompany] = useState("")
  const [description, setDescription] = useState("")
  const [team, setTeam] = useState("")
  const [link1, setLink1] = useState("")
  const [link2, setLink2] = useState("")
  const [projectImage, setProjectImage] = useState<File | null>(null)
  const [existingImageUrl, setExistingImageUrl] = useState("")

  // Mock project data - in real app, this would come from API
  const mockProjects = [
    {
      id: 1,
      name: "VR Training Simulator",
      company: "TechCorp Industries",
      description: "Advanced virtual reality training simulator for industrial equipment operation and safety protocols.",
      team: "John Smith - Lead Developer\nSarah Johnson - 3D Artist\nMike Chen - UX Designer\nEmily Davis - QA Engineer\nTom Wilson - Product Manager",
      image: "/placeholder.svg",
      links: ["https://demo.techcorp.com", "https://github.com/techcorp/vr-sim"]
    },
    {
      id: 2,
      name: "AR Learning Platform",
      company: "EduTech Solutions",
      description: "Augmented reality platform for interactive learning experiences in science and mathematics.",
      team: "Alice Brown - Tech Lead\nBob Green - AR Developer\nCarol White - Content Creator",
      image: "/placeholder.svg",
      links: ["https://ar.edutech.com"]
    }
  ]

  // Mock analytics data
  const projectViews = [
    { name: "Jan", views: 245 },
    { name: "Feb", views: 312 },
    { name: "Mar", views: 428 },
    { name: "Apr", views: 389 },
    { name: "May", views: 445 },
    { name: "Jun", views: 523 }
  ]

  useEffect(() => {
    if (isEditMode && id) {
      // Load project data - in real app, this would be an API call
      const project = mockProjects.find(p => p.id === parseInt(id))
      if (project) {
        setProjectName(project.name)
        setCompany(project.company)
        setDescription(project.description)
        setTeam(project.team)
        setLink1(project.links[0] || "")
        setLink2(project.links[1] || "")
        setExistingImageUrl(project.image)
      }
    }
  }, [isEditMode, id])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProjectImage(e.target.files[0])
      setExistingImageUrl("") // Clear existing image when new one is uploaded
    }
  }

  const handleSaveDraft = () => {
    console.log("Saving project draft...")
  }

  const handlePost = () => {
    console.log(isEditMode ? "Updating project..." : "Publishing project...")
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {isEditMode ? "Edit Project" : "Add New Project"}
            </h1>
            <p className="text-muted-foreground">
              {isEditMode ? "Update your project details and view analytics." : "Create and showcase your project."}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleSaveDraft}>
            {isEditMode ? "Save Changes" : "Draft"}
          </Button>
          <Button onClick={handlePost}>
            {isEditMode ? "Update" : "Post"}
          </Button>
        </div>
      </div>

      {/* Analytics Section - Only show in edit mode */}
      {isEditMode && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Project Analytics</h2>
          </div>
          
          {/* Analytics Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Total Views"
              value="2.3K"
              icon={Eye}
              variant="blue"
              subtitle="Last 30 days"
            />
            <MetricCard
              title="Unique Visitors"
              value="1.8K"
              icon={Users}
              variant="green"
              subtitle="↑ 12% from last month"
            />
            <MetricCard
              title="External Clicks"
              value="456"
              icon={ExternalLink}
              variant="yellow"
              subtitle="Link interactions"
            />
            <MetricCard
              title="Avg. Time"
              value="3m 24s"
              icon={Calendar}
              variant="pink"
              subtitle="On project page"
            />
          </div>

          {/* Views Chart */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Project Views Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={projectViews}>
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
      )}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-9 space-y-6">
          {/* Project Name and Company Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-primary/20">
              <CardContent className="p-4">
                <Label htmlFor="projectName" className="text-sm font-medium mb-2 block">
                  Name of Project
                </Label>
                <Input
                  id="projectName"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Enter project name"
                  className="border-primary/30 focus:border-primary"
                />
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-4">
                <Label htmlFor="company" className="text-sm font-medium mb-2 block">
                  Company
                </Label>
                <Input
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Enter company name"
                  className="border-primary/30 focus:border-primary"
                />
              </CardContent>
            </Card>
          </div>

          {/* Image Upload */}
          <Card className="border-primary/20">
            <CardContent className="p-6">
              {existingImageUrl && !projectImage && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Current Image:</p>
                  <img 
                    src={existingImageUrl} 
                    alt="Current project image" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              )}
              <div 
                className="border-2 border-dashed border-primary/30 rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer"
                onClick={() => document.getElementById('imageUpload')?.click()}
              >
                <Upload className="h-12 w-12 text-primary/60 mx-auto mb-4" />
                <p className="text-lg font-medium text-muted-foreground mb-2">
                  {existingImageUrl ? "Replace Image" : "Image Upload"}
                </p>
                <p className="text-sm text-muted-foreground">
                  Click to upload project images or drag and drop
                </p>
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                {projectImage && (
                  <p className="text-sm text-primary mt-2">
                    New image selected: {projectImage.name}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <Card className="border-primary/20">
            <CardContent className="p-4">
              <Label htmlFor="description" className="text-sm font-medium mb-2 block">
                Description
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter project description..."
                className="min-h-[200px] border-primary/30 focus:border-primary resize-none"
              />
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-3 space-y-6">
          {/* Links */}
          <Card className="border-primary/20">
            <CardContent className="p-4">
              <Label htmlFor="link1" className="text-sm font-medium mb-2 block">
                Link 1
              </Label>
              <Input
                id="link1"
                value={link1}
                onChange={(e) => setLink1(e.target.value)}
                placeholder="Enter project link"
                className="border-primary/30 focus:border-primary"
              />
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-4">
              <Label htmlFor="link2" className="text-sm font-medium mb-2 block">
                Link 2
              </Label>
              <Input
                id="link2"
                value={link2}
                onChange={(e) => setLink2(e.target.value)}
                placeholder="Enter additional link"
                className="border-primary/30 focus:border-primary"
              />
            </CardContent>
          </Card>

          {/* Team */}
          <Card className="border-primary/20">
            <CardContent className="p-4">
              <Label htmlFor="team" className="text-sm font-medium mb-2 block">
                Team
              </Label>
              <Textarea
                id="team"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
                placeholder="Enter team members and roles..."
                className="min-h-[300px] border-primary/30 focus:border-primary resize-none"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}