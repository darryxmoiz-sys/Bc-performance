import PageHead from '@/components/PageHead';
import Sec, { Card } from '@/components/Sec';
import CTA from '@/components/CTA';
import { services } from '@/lib/data';
export const metadata = { title: 'Services', description: 'Remapping, EGR & DPF solutions, towbar fitting and wiring, trailer electrics, vehicle repair and custom interior lighting.' };

export default function Services() {
  return (
    <>
      <PageHead title="Our services" text="One garage, every solution, from performance to practical." />
      <Sec tone="light">
        {services.map(([t, d]) => (
          <div key={t} className="group grid gap-2 border-t border-ink/15 py-6 md:grid-cols-2 md:px-4">
            <h2 className="h text-xl normal-case not-italic transition group-hover:translate-x-2 group-hover:text-brand md:text-2xl">{t}</h2>
            <p className="text-ink/70">{d}</p>
          </div>
        ))}
      </Sec>
      <Sec title="Cars and vans">
        <div className="grid gap-4 md:grid-cols-2">
          <Card><h3 className="h text-lg normal-case not-italic">Not just cars</h3><p className="mt-2 text-white/70">We fit towbars on vans too, whether for work, towing trailers, caravans or bike racks. Commercial and personal vans are both covered.</p></Card>
          <Card><h3 className="h text-lg normal-case not-italic">Mobile fitting</h3><p className="mt-2 text-white/70">We also offer mobile towbar fitting and wiring, so we can come to you.</p></Card>
        </div>
      </Sec>
      <CTA />
    </>
  );
}
