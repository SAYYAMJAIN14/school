import { notices } from '@/lib/data';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NoticesPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Notices & Downloads</h1>
        <p className="mt-4 text-lg text-muted-foreground font-body max-w-2xl mx-auto">
          Find all important circulars, timetables, and announcements here.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Recent Notices</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell w-[150px] text-center">Date</TableHead>
                <TableHead className="w-[120px] text-right">Download</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notices.map((notice) => (
                <TableRow key={notice.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        <span className="font-body">{notice.title}</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-center font-body text-muted-foreground">{notice.date}</TableCell>
                  <TableCell className="text-right">
                    <Button asChild variant="ghost" size="icon">
                      <a href={notice.fileUrl} download>
                        <Download className="h-5 w-5" />
                        <span className="sr-only">Download</span>
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
