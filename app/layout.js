import './globals.css';
import Link from 'next/link';
import { Oswald, Inter } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import Preloader from '@/components/Preloader';
import Cursor from '@/components/Cursor';
import Nav from '@/components/Nav';
import { PHONE, TEL, WA, EMAIL } from '@/lib/data';

const display = Oswald({ subsets: ['latin'], weight: ['700'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata = {
  title: { default: 'BC Performance | One Garage, Every Solution', template: '%s | BC Performance Dromore' },
  description: 'Vehicle remapping, EGR & DPF solutions, towbar fitting and wiring, trailer electrics and vehicle repair in Dromore, covering Newry, Banbridge, Lisburn and Belfast.',
};
const schema = { '@context': 'https://schema.org', '@type': 'AutoRepair', name: 'BC Performance', telephone: '+447934945988', email: EMAIL, areaServed: ['Dromore', 'Newry', 'Banbridge', 'Lisburn', 'Belfast'] };

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <SmoothScroll /><Preloader /><Cursor /><Nav />
        <main className="overflow-x-clip">{children}</main>
        <footer className="bg-ink px-5 py-12 pb-28 text-sm text-white/60 md:pb-12">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            <div><p className="h text-lg text-white">BC Performance</p><p className="mt-2">One garage, every solution. Based in Dromore.</p></div>
            <div className="space-y-1"><Link href="/services" className="block hover:text-hot">Services</Link><Link href="/gallery" className="block hover:text-hot">Gallery</Link><Link href="/areas" className="block hover:text-hot">Areas we cover</Link><Link href="/contact" className="block hover:text-hot">Contact</Link></div>
            <div className="space-y-1"><a href={TEL} className="block hover:text-hot">{PHONE}</a><a href={WA} className="block hover:text-hot">WhatsApp</a><a href={`mailto:${EMAIL}`} className="block hover:text-hot">{EMAIL}</a></div>
          </div>
        </footer>
        <div className="fixed inset-x-3 bottom-3 z-30 grid grid-cols-2 gap-2 md:hidden">
          <a href={TEL} className="rounded-sm bg-brand py-3 text-center font-semibold text-white shadow-lg">Call now</a>
          <a href={WA} className="rounded-sm bg-white py-3 text-center font-semibold text-ink shadow-lg">WhatsApp</a>
        </div>
      </body>
    </html>
  );
}
