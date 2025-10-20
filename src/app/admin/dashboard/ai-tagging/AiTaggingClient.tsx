"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { aiTagging } from "@/ai/flows/ai-powered-tagging";
import { Loader2, Upload, Tag, UserCheck, X } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

export default function AiTaggingClient() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [suggestedTags, setSuggestedTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const defaultImage = PlaceHolderImages.find(p => p.id === 'photo-to-tag');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setSuggestedTags([]);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleGenerateTags = async () => {
    if (!preview) {
      toast({
        variant: "destructive",
        title: "No image selected",
        description: "Please upload an image to generate tags.",
      });
      return;
    }
    setIsLoading(true);
    setSuggestedTags([]);

    try {
      const result = await aiTagging({ photoDataUri: preview });
      setSuggestedTags(result.suggestedTags);
      toast({
        title: "Tags Generated",
        description: `${result.suggestedTags.length} tags were suggested by the AI.`,
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error Generating Tags",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveImage = () => {
    setFile(null);
    setPreview(null);
    setSuggestedTags([]);
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>1. Upload Photo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Select a group photo</Label>
            <Input id="picture" type="file" accept="image/*" onChange={handleFileChange} disabled={isLoading || !!preview} />
          </div>

          <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-lg border">
            {preview ? (
              <Image src={preview} alt="Selected preview" layout="fill" objectFit="contain" />
            ) : defaultImage ? (
               <Image src={defaultImage.imageUrl} alt={defaultImage.description} layout="fill" objectFit="cover" data-ai-hint={defaultImage.imageHint} />
            ) : (
              <div className="flex items-center justify-center h-full bg-muted">
                <p className="text-muted-foreground">Image preview</p>
              </div>
            )}
             {preview && (
              <Button
                size="icon"
                variant="destructive"
                className="absolute top-2 right-2 h-8 w-8 rounded-full"
                onClick={handleRemoveImage}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          <Button onClick={handleGenerateTags} disabled={!preview || isLoading} className="w-full">
            {isLoading ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</>
            ) : (
              <><Tag className="mr-2 h-4 w-4" /> Generate Tags</>
            )}
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>2. Review Suggestions</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading && (
             <div className="flex flex-col items-center justify-center h-64 space-y-2 text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p>Analyzing photo...</p>
             </div>
          )}
          {!isLoading && suggestedTags.length > 0 && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                AI has suggested the following tags. Click to add them to the photo.
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedTags.map((tag, index) => (
                  <Button key={index} variant="outline" className="gap-2">
                     <UserCheck className="h-4 w-4 text-green-500" />
                     {tag}
                  </Button>
                ))}
              </div>
            </div>
          )}
          {!isLoading && suggestedTags.length === 0 && (
             <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-lg">
              <p className="text-muted-foreground">Suggested tags will appear here.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
