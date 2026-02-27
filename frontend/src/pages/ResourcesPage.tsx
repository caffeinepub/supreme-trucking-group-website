import { Link } from '@tanstack/react-router';
import { useGetResourcesContent } from '../hooks/useQueries';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function ResourcesPage() {
  const { data: resourcesData, isLoading, error } = useGetResourcesContent();

  // Process content to convert the final phrase into a hyperlink
  const processContent = (content: string) => {
    if (!content) return null;

    // Find the pattern [Request a Quote from Supreme Trucking Group]
    const linkPattern = /\[Request a Quote from Supreme Trucking Group\]/g;
    const parts = content.split(linkPattern);

    if (parts.length === 1) {
      // No link pattern found, return content as-is
      return <div className="whitespace-pre-wrap">{content}</div>;
    }

    // Build the content with the link
    return (
      <div className="whitespace-pre-wrap">
        {parts.map((part, index) => (
          <span key={index}>
            {part}
            {index < parts.length - 1 && (
              <Link
                to="/"
                hash="contact"
                className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors font-semibold inline-block"
              >
                Request a Quote from Supreme Trucking Group
              </Link>
            )}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ) : error ? (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Failed to load resources content. Please try again later.
                </AlertDescription>
              </Alert>
            ) : (
              <div className="text-foreground text-base leading-relaxed">
                {resourcesData?.content ? (
                  processContent(resourcesData.content)
                ) : (
                  <p className="text-muted-foreground italic">
                    No resources content available at this time.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
