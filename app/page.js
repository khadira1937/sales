import { bodyHtml } from '@/lib/site-template';

export const dynamic = 'force-static';

export default function HomePage() {
  return (
    <div
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
}
