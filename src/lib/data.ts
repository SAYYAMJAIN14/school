import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export interface Album {
  id: string;
  title: string;
  date: string;
  description: string;
  imageCount: number;
  videoCount: number;
  coverImage: ImagePlaceholder;
}

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  type: 'Past' | 'Upcoming';
  category: 'Sports' | 'Cultural' | 'Academic';
  description: string;
  coverImage: ImagePlaceholder;
}

export interface Achievement {
    id: string;
    title: string;
    studentName: string;
    class: string;
    date: string;
    description: string;
    coverImage: ImagePlaceholder;
}

export interface Notice {
    id: string;
    title: string;
    date: string;
    fileUrl: string;
}

export const albums: Album[] = [
  {
    id: '1',
    title: 'Annual Sports Day 2023',
    date: '2023-12-15',
    description: 'Highlights from the annual sports meet, featuring track and field events, team competitions, and award ceremonies.',
    imageCount: 120,
    videoCount: 5,
    coverImage: PlaceHolderImages.find(p => p.id === 'album-1')!,
  },
  {
    id: '2',
    title: 'Science Exhibition',
    date: '2023-11-20',
    description: 'A showcase of innovative projects and experiments by our talented students from classes 6 to 12.',
    imageCount: 85,
    videoCount: 3,
    coverImage: PlaceHolderImages.find(p => p.id === 'album-2')!,
  },
  {
    id: '3',
    title: "Cultural Fest 'Aura'",
    date: '2023-10-28',
    description: 'A vibrant celebration of art, music, and dance, with performances from students across all grades.',
    imageCount: 250,
    videoCount: 10,
    coverImage: PlaceHolderImages.find(p => p.id === 'album-3')!,
  },
  {
    id: '4',
    title: 'Class of 2024 Farewell',
    date: '2024-02-10',
    description: 'A memorable evening to bid adieu to our graduating batch of 2024. Wishing them all the best for the future!',
    imageCount: 150,
    videoCount: 2,
    coverImage: PlaceHolderImages.find(p => p.id === 'album-4')!,
  },
   {
    id: '5',
    title: 'Art & Craft Workshop',
    date: '2023-09-05',
    description: 'Students exploring their creativity with colors, clay, and recycled materials.',
    imageCount: 60,
    videoCount: 1,
    coverImage: PlaceHolderImages.find(p => p.id === 'album-5')!,
  },
  {
    id: '6',
    title: 'Annual Day Celebration',
    date: '2024-01-22',
    description: 'A grand celebration of our school\'s foundation day with theatrical performances, dances, and prize distributions.',
    imageCount: 300,
    videoCount: 15,
    coverImage: PlaceHolderImages.find(p => p.id === 'album-6')!,
  },
];

export const events: SchoolEvent[] = [
    {
        id: '1',
        title: 'Inter-School Debate Competition',
        date: '2024-08-25',
        type: 'Upcoming',
        category: 'Academic',
        description: 'Our school is hosting the annual inter-school debate. Top schools from the city will participate.',
        coverImage: PlaceHolderImages.find(p => p.id === 'event-1')!,
    },
    {
        id: '2',
        title: 'Annual Sports Day',
        date: '2023-12-15',
        type: 'Past',
        category: 'Sports',
        description: 'A day full of energy, sportsmanship, and record-breaking performances.',
        coverImage: PlaceHolderImages.find(p => p.id === 'album-1')!,
    },
     {
        id: '3',
        title: 'Parent-Teacher Meeting',
        date: '2023-11-25',
        type: 'Past',
        category: 'Academic',
        description: 'A meeting to discuss student progress for the half-yearly examinations.',
        coverImage: PlaceHolderImages.find(p => p.id === 'event-2')!,
    },
    {
        id: '4',
        title: 'Science Fair',
        date: '2023-11-20',
        type: 'Past',
        category: 'Academic',
        description: 'Students from grades 6-12 showcased their innovative science projects.',
        coverImage: PlaceHolderImages.find(p => p.id === 'album-2')!,
    }
];

export const achievements: Achievement[] = [
    {
        id: '1',
        title: 'National Robotics Olympiad Winners',
        studentName: 'Team Innovators',
        class: 'Class 11',
        date: '2024-02-18',
        description: 'Our team won the first prize at the National Robotics Olympiad for their autonomous bot project.',
        coverImage: PlaceHolderImages.find(p => p.id === 'achievement-1')!,
    },
    {
        id: '2',
        title: 'State Level Chess Champion',
        studentName: 'Ananya Sharma',
        class: 'Class 8',
        date: '2024-01-30',
        description: 'Ananya Sharma brought home the trophy for the State Level Junior Chess Championship.',
        coverImage: PlaceHolderImages.find(p => p.id === 'achievement-2')!,
    },
    {
        id: '3',
        title: 'Top Scorer in Mathematics',
        studentName: 'Rohan Verma',
        class: 'Class 10',
        date: '2023-12-05',
        description: 'Rohan Verma achieved a perfect score in the National Mathematics Talent Examination.',
        coverImage: PlaceHolderImages.find(p => p.id === 'achievement-3')!,
    }
];

export const notices: Notice[] = [
    {
        id: '1',
        title: 'Circular for Summer Vacation 2024',
        date: '2024-05-10',
        fileUrl: '#',
    },
    {
        id: '2',
        title: 'Final Examination Timetable (Classes 6-12)',
        date: '2024-04-28',
        fileUrl: '#',
    },
    {
        id: '3',
        title: 'Notice regarding Annual Sports Day participation',
        date: '2023-11-30',
        fileUrl: '#',
    },
     {
        id: '4',
        title: 'Holiday on account of National Day',
        date: '2023-09-15',
        fileUrl: '#',
    }
];

export const adminStats = {
  totalAlbums: albums.length,
  totalPhotos: albums.reduce((sum, album) => sum + album.imageCount, 0),
  totalEvents: events.length,
  recentUploads: 5,
};
