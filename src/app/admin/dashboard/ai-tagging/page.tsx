import AiTaggingClient from "./AiTaggingClient";
import { Sparkles } from "lucide-react";

export default function AiTaggingPage() {
  return (
    <div className="flex flex-col gap-8">
       <div>
        <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
          <Sparkles className="w-7 h-7 text-accent" />
          AI-Powered Tagging Tool
        </h1>
        <p className="text-muted-foreground">
          Upload a photo to automatically suggest student tags using AI.
        </p>
      </div>
      
      <AiTaggingClient />
    </div>
  )
}
