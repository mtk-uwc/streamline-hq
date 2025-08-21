import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Upload } from "lucide-react"

export default function ProjectEditor() {
  const navigate = useNavigate()
  const [projectName, setProjectName] = useState("")
  const [company, setCompany] = useState("")
  const [description, setDescription] = useState("")
  const [team, setTeam] = useState("")
  const [link1, setLink1] = useState("")
  const [link2, setLink2] = useState("")
  const [projectImage, setProjectImage] = useState<File | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProjectImage(e.target.files[0])
    }
  }

  const handleSaveDraft = () => {
    console.log("Saving project draft...")
  }

  const handlePost = () => {
    console.log("Publishing project...")
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
            <h1 className="text-3xl font-bold text-foreground">Add New Project</h1>
            <p className="text-muted-foreground">Create and showcase your project.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleSaveDraft}>
            Draft
          </Button>
          <Button onClick={handlePost}>
            Post
          </Button>
        </div>
      </div>

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
              <div 
                className="border-2 border-dashed border-primary/30 rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer"
                onClick={() => document.getElementById('imageUpload')?.click()}
              >
                <Upload className="h-12 w-12 text-primary/60 mx-auto mb-4" />
                <p className="text-lg font-medium text-muted-foreground mb-2">Image Upload</p>
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
                    Selected: {projectImage.name}
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