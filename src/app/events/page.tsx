import Image from 'next/image';
import { events } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Pin } from 'lucide-react';

export default function EventsPage() {
  const upcomingEvents = events.filter(e => e.type === 'Upcoming');
  const pastEvents = events.filter(e => e.type === 'Past');

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">School Events</h1>
        <p className="mt-4 text-lg text-muted-foreground font-body max-w-2xl mx-auto">
          Stay updated with our school's vibrant life, from academic competitions to cultural celebrations.
        </p>
      </div>

      {upcomingEvents.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-headline font-semibold mb-6 flex items-center gap-3">
            <Pin className="w-6 h-6 text-primary" />
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border-2 border-primary/50">
                 <div className="relative h-56 w-full">
                    <Image
                      src={event.coverImage.imageUrl}
                      alt={event.coverImage.description}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      data-ai-hint={event.coverImage.imageHint}
                    />
                  </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="font-body text-muted-foreground">
                  <p>{event.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center font-body text-sm">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <CalendarDays className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <Badge variant="default" className="bg-primary">{event.category}</Badge>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-3xl font-headline font-semibold mb-6">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                 <div className="relative h-56 w-full">
                    <Image
                      src={event.coverImage.imageUrl}
                      alt={event.coverImage.description}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      data-ai-hint={event.coverImage.imageHint}
                    />
                  </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="font-body text-muted-foreground">
                  <p>{event.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center font-body text-sm text-muted-foreground">
                   <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <Badge variant="secondary">{event.category}</Badge>
                </CardFooter>
              </Card>
            ))}
          </div>
      </section>
    </div>
  );
}
