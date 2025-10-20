import Image from 'next/image';
import { achievements } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

export default function AchievementsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Student Achievements</h1>
        <p className="mt-4 text-lg text-muted-foreground font-body max-w-2xl mx-auto">
          Celebrating the remarkable accomplishments of our students in academics, arts, and sports.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement) => (
          <Card key={achievement.id} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-56 w-full">
              <Image
                src={achievement.coverImage.imageUrl}
                alt={achievement.coverImage.description}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                data-ai-hint={achievement.coverImage.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-xl">{achievement.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow font-body text-muted-foreground">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-4 h-4 text-accent" />
                <span className="font-semibold text-foreground">{achievement.studentName}</span>
              </div>
              <p>{achievement.description}</p>
            </CardContent>
            <CardFooter className="font-body text-sm text-muted-foreground">
              <p>{achievement.class} • {achievement.date}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
