import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GalleryHorizontal, CalendarDays, Trophy } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');
  const galleryPreview = PlaceHolderImages.filter(p => p.id.startsWith('album-')).slice(0, 3);

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            School Memories Hub
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl font-body">
            Preserving every beautiful moment from your school journey. Explore, share, and relive your unforgettable memories.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/gallery">Explore Gallery</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/events">View Events</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold">Our Features</h2>
            <p className="mt-2 text-muted-foreground font-body max-w-xl mx-auto">
              A complete platform to digitize and celebrate your school's life and achievements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <GalleryHorizontal className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4">Photo & Video Gallery</CardTitle>
              </CardHeader>
              <CardContent className="font-body">
                <p>Albums organized by year, event, and class. High-quality images and videos preserving every moment.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <CalendarDays className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4">Events Showcase</CardTitle>
              </CardHeader>
              <CardContent className="font-body">
                <p>Browse upcoming and past school events, complete with photo galleries and detailed descriptions.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4">Student Achievements</CardTitle>
              </CardHeader>
              <CardContent className="font-body">
                <p>A dedicated corner for class-wise achievements, projects, competitions, and educational tours.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold">Latest Albums</h2>
            <p className="mt-2 text-muted-foreground font-body max-w-xl mx-auto">
              A glimpse into the vibrant life at our school.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPreview.map((image) => (
              <Link href="/gallery" key={image.id}>
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-white font-headline text-lg font-semibold">{image.description}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
           <div className="text-center mt-12">
             <Button asChild>
                <Link href="/gallery">View All Albums</Link>
             </Button>
           </div>
        </div>
      </section>
    </div>
  );
}
