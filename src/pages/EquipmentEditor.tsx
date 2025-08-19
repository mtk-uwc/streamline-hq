import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Upload, 
  Bold, 
  Italic, 
  Underline, 
  List, 
  AlignLeft, 
  AlignCenter, 
  AlignRight,
  Type,
  Palette
} from "lucide-react";

export default function EquipmentEditor() {
  const [equipmentName, setEquipmentName] = useState("");
  const [description, setDescription] = useState("");
  const [equipmentImage, setEquipmentImage] = useState<File | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setEquipmentImage(file);
    }
  };

  const handleSaveDraft = () => {
    console.log("Saving draft...");
  };

  const handlePost = () => {
    console.log("Publishing equipment...");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">Adding of Immersive Zone Equipment</h1>
      </div>

      {/* Equipment Image/Virtual Walk Upload */}
      <Card className="shadow-card">
        <CardContent className="p-6">
          <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-12 text-center hover:border-muted-foreground/40 transition-colors">
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleImageUpload}
              className="hidden"
              id="equipment-upload"
            />
            <label htmlFor="equipment-upload" className="cursor-pointer">
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground font-medium">Upload Image/Virtual Walk through</p>
              {equipmentImage && (
                <p className="text-sm text-primary mt-2">{equipmentImage.name}</p>
              )}
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Equipment Name Field */}
      <Card className="shadow-card bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200">
        <CardContent className="p-4">
          <Input
            placeholder="Name of Equipment"
            value={equipmentName}
            onChange={(e) => setEquipmentName(e.target.value)}
            className="border-0 bg-transparent text-foreground placeholder:text-foreground/70 font-medium text-lg focus-visible:ring-0"
          />
        </CardContent>
      </Card>

      {/* Formatting Ribbon */}
      <Card className="shadow-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-muted-foreground">Ribbon for bullet points, capitals, bold, etc.</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Formatting Toolbar */}
          <div className="flex flex-wrap gap-2 p-3 bg-muted/30 rounded-lg border">
            <div className="flex items-center gap-1 px-2 py-1 rounded border bg-background">
              <Bold className="h-4 w-4" />
              <Italic className="h-4 w-4" />
              <Underline className="h-4 w-4" />
            </div>
            
            <div className="w-px h-6 bg-border"></div>
            
            <div className="flex items-center gap-1 px-2 py-1 rounded border bg-background">
              <AlignLeft className="h-4 w-4" />
              <AlignCenter className="h-4 w-4" />
              <AlignRight className="h-4 w-4" />
            </div>
            
            <div className="w-px h-6 bg-border"></div>
            
            <div className="flex items-center gap-1 px-2 py-1 rounded border bg-background">
              <List className="h-4 w-4" />
            </div>
            
            <div className="w-px h-6 bg-border"></div>
            
            <div className="flex items-center gap-1 px-2 py-1 rounded border bg-background">
              <Type className="h-4 w-4" />
              <span className="text-xs">Aa</span>
            </div>
            
            <div className="flex items-center gap-1 px-2 py-1 rounded border bg-background">
              <Palette className="h-4 w-4" />
            </div>
          </div>

          {/* Rich Text Area */}
          <div className="min-h-[120px] p-4 border rounded-lg bg-background">
            <p className="text-muted-foreground italic">Formatting toolbar for rich text editing...</p>
          </div>
        </CardContent>
      </Card>

      {/* Equipment Description */}
      <Card className="shadow-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-muted-foreground">Description of Equipment</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Enter a detailed description of the equipment..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[200px] resize-none border-muted-foreground/20 focus-visible:ring-2 focus-visible:ring-primary"
          />
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 pb-8">
        <Button 
          variant="outline" 
          onClick={handleSaveDraft}
          className="px-8 bg-green-100 border-green-300 text-green-800 hover:bg-green-200"
        >
          Draft
        </Button>
        <Button 
          onClick={handlePost}
          className="px-8 bg-green-600 hover:bg-green-700 text-white"
        >
          Post
        </Button>
      </div>
    </div>
  );
}