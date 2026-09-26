import PageHead from '@/components/PageHead';
import Sec, { Card } from '@/components/Sec';
import { PHONE, TEL, WA, EMAIL, FB, IG } from '@/lib/data';
export const metadata = { title: 'Contact', description: 'Call, WhatsApp or message BC Performance for a free quote on remapping, towbars, or vehicle repair.' };

export default function Contact() {
  return (
    <>
      <PageHead title="Get a free quote" text="Call, WhatsApp or message the page." />
      <Sec tone="light">
        <a href={TEL} className="h block text-4xl normal-case not-italic text-brand transition hover:text-ink md:text-6xl">{PHONE}</a>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={TEL} className="rounded-sm bg-brand px-6 py-3 font-semibold text-white transition hover:bg-ink">Call now</a>
          <a href={WA} className="rounded-sm border border-ink px-6 py-3 font-semibold transition hover:bg-ink hover:text-white">WhatsApp</a>
        </div>
      </Sec>
      <Sec title="Other details">
        <div className="grid gap-4 md:grid-cols-3">
          <Card><h3 className="h text-lg normal-case not-italic">Email</h3><a href={`mailto:${EMAIL}`} className="mt-2 block break-all text-white/70 hover:text-hot">{EMAIL}</a></Card>
          <Card><h3 className="h text-lg normal-case not-italic">Facebook & Instagram</h3><a href={FB} target="_blank" rel="noreferrer" className="mt-2 block text-white/70 hover:text-hot">bcperformanceni</a></Card>
          <Card><h3 className="h text-lg normal-case not-italic">Based in</h3><p className="mt-2 text-white/70">Dromore, Northern Ireland</p></Card>
        </div>
      </Sec>
    </>
  );
}
