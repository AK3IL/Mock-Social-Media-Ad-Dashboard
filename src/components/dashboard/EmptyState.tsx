import { Inbox } from 'lucide-react';
interface EmptyStateProps {
  message?: string;
}
export function EmptyState({ message = "No data to display" }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-muted-foreground p-8">
      <Inbox className="h-12 w-12 mb-4" />
      <p className="text-sm text-center">{message}</p>
    </div>
  );
}