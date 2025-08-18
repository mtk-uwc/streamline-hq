import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  ArrowLeft,
  Save,
  Send,
  Bold,
  Italic,
  Underline,
  List,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Link,
  Image,
  X
} from "lucide-react"

export default function PostEditor() {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [category, setCategory] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")

  const categories = ["Technology", "Education", "Reviews", "Collaboration", "News"]

  const addTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && newTag.trim()) {
      e.preventDefault()
      if (!tags.includes(newTag.trim())) {
        setTags([...tags, newTag.trim()])
      }
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  const handleSaveDraft = () => {
    // TODO: Implement save draft functionality
    console.log("Saving as draft...")
  }

  const handlePublish = () => {
    // TODO: Implement publish functionality
    console.log("Publishing post...")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate("/posts")}
            className="hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Posts
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Create New Post</h1>
            <p className="text-muted-foreground">Write and publish your content.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            onClick={handleSaveDraft}
            className="bg-metric-yellow hover:bg-metric-yellow/90 text-metric-yellow-foreground border-metric-yellow"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Draft
          </Button>
          <Button 
            onClick={handlePublish}
            className="bg-metric-green hover:bg-metric-green/90 text-metric-green-foreground"
          >
            <Send className="h-4 w-4 mr-2" />
            Publish
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title Section */}
          <Card className="shadow-card bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
            <CardHeader>
              <CardTitle className="text-orange-900 dark:text-orange-100">Article Title</CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                placeholder="Enter the title of your news article or study..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-lg font-medium bg-transparent border-orange-200 dark:border-orange-800 placeholder:text-orange-600 dark:placeholder:text-orange-400"
              />
            </CardContent>
          </Card>

          {/* Author and Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="shadow-card bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-yellow-900 dark:text-yellow-100">Author</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Name of Author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="bg-transparent border-yellow-200 dark:border-yellow-800 placeholder:text-yellow-600 dark:placeholder:text-yellow-400"
                />
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-blue-900 dark:text-blue-100">Category</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="bg-transparent border-blue-200 dark:border-blue-800">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </div>

          {/* Formatting Toolbar */}
          <Card className="shadow-card bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Formatting Toolbar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-1 p-2 bg-white dark:bg-gray-800 rounded-md border">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Bold className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Italic className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Underline className="h-4 w-4" />
                </Button>
                <div className="w-px h-6 bg-border mx-1" />
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <List className="h-4 w-4" />
                </Button>
                <div className="w-px h-6 bg-border mx-1" />
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <AlignLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <AlignCenter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <AlignRight className="h-4 w-4" />
                </Button>
                <div className="w-px h-6 bg-border mx-1" />
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Link className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Image className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Content Editor */}
          <Card className="shadow-card bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20">
            <CardHeader>
              <CardTitle className="text-pink-900 dark:text-pink-100">Content</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Write your news article or study content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[300px] bg-transparent border-pink-200 dark:border-pink-800 placeholder:text-pink-600 dark:placeholder:text-pink-400 resize-none"
              />
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Tags */}
          <Card className="shadow-card bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
            <CardHeader>
              <CardTitle className="text-green-900 dark:text-green-100">Tags</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="tags" className="text-sm text-green-800 dark:text-green-200">Add Tags</Label>
                <Input
                  id="tags"
                  placeholder="Type and press Enter"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyDown={addTag}
                  className="mt-1 bg-transparent border-green-200 dark:border-green-800"
                />
              </div>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200"
                    >
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-1 hover:bg-green-300 dark:hover:bg-green-700 rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Publishing Options */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Publishing Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-2">
                <Button 
                  variant="outline" 
                  onClick={handleSaveDraft}
                  className="w-full bg-metric-yellow hover:bg-metric-yellow/90 text-metric-yellow-foreground border-metric-yellow"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save as Draft
                </Button>
                <Button 
                  onClick={handlePublish}
                  className="w-full bg-metric-green hover:bg-metric-green/90 text-metric-green-foreground"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Publish Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}