import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ParallaxImg from '@/components/ParallaxImg';
import Sec, { Card, Faq } from '@/components/Sec';
import CTA from '@/components/CTA';
import { PHONE, TEL, WA, AREAS, services, faqs, photos } from '@/lib/data';

export default function Home() {
  return (
    <>
      <section className="bg-ink px-5 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <Reveal delay={0.1}><p className="mb-3 text-hot">Dromore, Northern Ireland</p></Reveal>
            <Reveal delay={0.25}><h1 className="h text-3xl sm:text-4xl md:text-5xl">One garage, every solution.</h1></Reveal>
            <Reveal delay={0.4}><p className="mt-4 max-w-md text-lg text-white/70">Remapping, EGR & DPF solutions, towbar fitting and wiring, trailer electrics and general repairs, all in one place.</p></Reveal>
            <Reveal delay={0.55} className="mt-7 flex flex-wrap gap-3">
              <a href={TEL} className="rounded-sm bg-brand px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-ink">Call {PHONE}</a>
              <a href={WA} className="rounded-sm border border-white/30 px-6 py-3 transition hover:border-hot hover:text-hot">WhatsApp us</a>
            </Reveal>
          </div>
          <ParallaxImg src="/gallery/p1.jpg" alt="Starlight headliner fitted by BC Performance" />
        </div>
      </section>

      <section className="bg-brand text-white">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 py-5 text-center text-sm font-semibold md:grid-cols-4 md:text-base">
          {['Free quotes', 'Cars and vans', 'Mobile towbar fitting', 'Serving 5 local areas'].map((t) => <li key={t}>{t}</li>)}
        </ul>
      </section>

      <Sec tone="light" title="What we do" intro="From performance work to towbars and interior upgrades.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([t, d]) => <Card key={t} tone="light"><h3 className="h text-lg normal-case not-italic">{t}</h3><p className="mt-2 text-sm text-ink/70">{d}</p></Card>)}
        </div>
        <Link href="/services" className="mt-8 inline-block font-semibold text-brand hover:underline">See all services</Link>
      </Sec>

      <Sec title="Recent work" intro="Towbars, remaps and custom interiors, done for real customers.">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[photos[0], photos[2], photos[3], photos[7]].map(([s, a]) => <img key={s} src={s} alt={a} loading="lazy" className="aspect-[3/4] w-full rounded-md object-cover" />)}
        </div>
        <Link href="/gallery" className="mt-8 inline-block font-semibold text-hot hover:underline">View the full gallery</Link>
      </Sec>

      <Sec tone="light" title="Areas we cover">
        <div className="flex flex-wrap gap-3">{AREAS.map((a) => <span key={a} className="rounded-full border border-brand/60 px-5 py-2 font-semibold text-ink">{a}</span>)}</div>
        <Link href="/areas" className="mt-8 inline-block font-semibold text-brand hover:underline">More on our service area</Link>
      </Sec>

      <Sec title="Common questions">
        <Faq items={faqs.slice(0, 4)} tone="dark" />
      </Sec>
      <CTA />
    </>
  );
}
