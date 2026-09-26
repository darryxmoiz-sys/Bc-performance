'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
export default function ParallaxImg({ src, alt }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -40]);
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-md border-b-8 border-r-8 border-brand">
      <motion.img src={src} alt={alt} style={{ y }} className="h-full w-full scale-110 object-cover" />
    </div>
  );
}
