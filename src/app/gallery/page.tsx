import Image from 'next/image';
import Link from 'next/link';
import { albums } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Video } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Photo & Video Gallery</h1>
        <p className="mt-4 text-lg text-muted-foreground font-body max-w-2xl mx-auto">
          Explore albums from school events, classroom activities, and special occasions.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {albums.map((album) => (
          <Link key={album.id} href={`/gallery/${album.id}`} passHref>
            <Card className="overflow-hidden group h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-52 w-full">
                <Image
                  src={album.coverImage.imageUrl}
                  alt={album.coverImage.description}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  data-ai-hint={album.coverImage.imageHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <CardHeader className="flex-grow">
                <CardTitle className="font-headline text-lg group-hover:text-primary transition-colors">{album.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm text-muted-foreground font-body">
                  <span className="text-xs">{album.date}</span>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                      <Camera className="w-4 h-4" />
                      <span>{album.imageCount}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Video className="w-4 h-4" />
                      <span>{album.videoCount}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
