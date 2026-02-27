import { useGetPrivacyPolicy } from '../hooks/useQueries';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const { data: privacyPolicy, isLoading, isError } = useGetPrivacyPolicy();

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {isLoading && (
            <div className="space-y-4">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          )}

          {isError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Failed to load privacy policy. Please try again later.
              </AlertDescription>
            </Alert>
          )}

          {!isLoading && !isError && !privacyPolicy && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Privacy policy not found.
              </AlertDescription>
            </Alert>
          )}

          {privacyPolicy && privacyPolicy !== null && (
            <div className="prose prose-slate max-w-none">
              <h1 className="text-4xl font-bold text-foreground mb-8">
                {privacyPolicy.title}
              </h1>
              <div className="text-muted-foreground mb-8">
                Last Updated: {new Date(Number(privacyPolicy.lastUpdated) * 1000).toLocaleDateString()}
              </div>
              <div className="text-foreground whitespace-pre-wrap leading-relaxed">
                {privacyPolicy.content}
              </div>
              
              {/* SMS Communication Notice */}
              <div className="mt-12 pt-8 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  SMS Communication Notice
                </h2>
                <div className="text-foreground whitespace-pre-wrap leading-relaxed">
                  Supreme Trucking Group uses RingCentral to enable SMS communications. We only send transactional and service-related text messages such as dispatch updates, shipment coordination, load confirmations, and document delivery requested by the customer. We do not send marketing messages, advertisements, or spam via SMS. You may opt-out anytime by replying STOP. Message and data rates may apply.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
