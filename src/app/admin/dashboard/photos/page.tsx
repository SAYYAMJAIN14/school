import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { albums } from "@/lib/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function PhotoManagementPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Manage Photos</h1>
        <p className="text-muted-foreground">Upload new photos to your albums.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upload Photos</CardTitle>
          <CardDescription>
            Select an album and upload multiple photos at once.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="album-select">Choose an Album</Label>
            <Select>
              <SelectTrigger id="album-select">
                <SelectValue placeholder="Select an album" />
              </SelectTrigger>
              <SelectContent>
                {albums.map((album) => (
                  <SelectItem key={album.id} value={album.id}>
                    {album.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="photo-upload">Choose Photos</Label>
            <Input id="photo-upload" type="file" multiple />
          </div>
          <div className="flex justify-end">
            <Button>
              <Upload className="mr-2 h-4 w-4" /> Upload Photos
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
