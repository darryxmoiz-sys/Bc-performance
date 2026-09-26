import { PHONE, TEL, WA } from '@/lib/data';
export default function CTA() {
  return (
    <section className="bg-brand px-5 py-14 text-white">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div><h2 className="h text-2xl md:text-3xl">One garage, every solution.</h2><p className="mt-2 text-white/85">Get a free quote today.</p></div>
        <div className="flex flex-wrap gap-3">
          <a href={TEL} className="rounded-sm bg-white px-6 py-3 font-semibold text-ink transition hover:bg-ink hover:text-white">Call {PHONE}</a>
          <a href={WA} className="rounded-sm border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-brand">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
