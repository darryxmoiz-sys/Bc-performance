import PageHead from '@/components/PageHead';
import Sec, { Card, Faq } from '@/components/Sec';
import CTA from '@/components/CTA';
import { AREAS, faqs } from '@/lib/data';
export const metadata = { title: 'Areas we cover', description: 'BC Performance is based in Dromore and covers Newry, Banbridge, Lisburn, Dromore and Belfast.' };

export default function Areas() {
  return (
    <>
      <PageHead title="Areas we cover" text="Based in Dromore, working across the wider area." />
      <Sec tone="light">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a) => <Card key={a} tone="light"><h3 className="h text-lg normal-case not-italic">{a}</h3></Card>)}
        </div>
      </Sec>
      <Sec title="Frequently asked questions"><Faq items={faqs} tone="dark" /></Sec>
      <CTA />
    </>
  );
}
