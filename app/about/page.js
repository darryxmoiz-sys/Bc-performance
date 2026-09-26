import PageHead from '@/components/PageHead';
import Sec, { Card } from '@/components/Sec';
import CTA from '@/components/CTA';
export const metadata = { title: 'About', description: 'BC Performance is a Dromore garage covering remapping, EGR & DPF solutions, towbars and vehicle repair.' };

const values = [['One garage', 'Performance, repairs and towbars, all handled in one place.'], ['Direct contact', 'Message the page, call or WhatsApp, and get a free quote.'], ['Quality parts', 'Only high quality parts used on every job.']];

export default function About() {
  return (
    <>
      <PageHead title="About BC Performance" text="One garage, every solution." />
      <Sec tone="light">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-4 text-lg text-ink/75">
            <h2 className="h text-2xl normal-case not-italic text-ink md:text-3xl">Based in Dromore</h2>
            <p>BC Performance covers vehicle remapping, EGR and DPF solutions, towbar fitting and wiring, trailer electrics, vehicle maintenance and repair, and custom interior work like starlight headliners.</p>
            <p>We work on cars and vans, including commercial vehicles, and cover Newry, Banbridge, Lisburn, Dromore and Belfast.</p>
          </div>
          <img src="/gallery/p8.jpg" alt="Audi A4 finished at BC Performance" loading="lazy" className="aspect-[4/5] w-full max-w-sm rounded-md object-cover" />
        </div>
      </Sec>
      <Sec title="What we stand for">
        <div className="grid gap-4 md:grid-cols-3">{values.map(([t, d]) => <Card key={t}><h3 className="h text-lg normal-case not-italic">{t}</h3><p className="mt-2 text-white/70">{d}</p></Card>)}</div>
      </Sec>
      <CTA />
    </>
  );
}
