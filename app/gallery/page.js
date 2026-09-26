import PageHead from '@/components/PageHead';
import Sec from '@/components/Sec';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';
import { photos } from '@/lib/data';
export const metadata = { title: 'Gallery', description: 'Photos of BC Performance work: starlight headliners, towbar fitting and vehicle repairs.' };

export default function GalleryPage() {
  return (
    <>
      <PageHead title="Our work" text="Real jobs, from custom interiors to towbar fitting. Tap a photo to enlarge it." />
      <Sec tone="light"><Gallery photos={photos} /></Sec>
      <CTA />
    </>
  );
}
