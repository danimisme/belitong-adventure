"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/assets/images/boat/1.png",
  "/assets/images/boat/2.png",
  "/assets/images/boat/3.png",
];

const titles = [
  "Walk ancient paths.",
  "Dive into hidden stories.",
  "Belitong`s magic awaits.",
]

export default function ParallaxStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${(images.length - 1) * 1000}`,
        scrub: 0.4,
        pin: true,
        
      },
    });

  imageRefs.current.forEach((el, i) => {
  if (i === 0) {
    // Atur posisi gambar pertama langsung tampil
    gsap.set(el, {
      y: 0,
      x: 0,
      opacity: 1,
    });
  } else {
    // Gambar kedua dan seterusnya dianimasikan saat scroll
    tl.fromTo(
      el,
      { y: 1000, x: 0 + i * 50 },
      { y: 0 + i * 50, opacity: 1, duration: 2, ease: "none" },
      (i - 1) * 1.5 
    );
  }
});


    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh] container grid grid-cols-2 justify-center overflow-hidden"
    >
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-italiana">Unlock the Wonders of Belitong</h2>
        <p className="mt-2">Majestic granite shapes the horizon</p>
        {titles.map((title, i) => (
          <h2 key={i} className="text-4xl font-italiana mt-4">
            {title}
          </h2>
        ))}
        <Link href={"#"} className="flex items-center gap-2 mt-4" >
          Let the journey begin <FaArrowDown className="animate-bounce"/>

        </Link>
      </div>
      <div className="mt-20 flex items-start justify-start">
        {images.map((src, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) imageRefs.current[i] = el;
            }}
            className="absolute w-[40%] aspect-square shadow-lg overflow-hidden"
            style={{ zIndex: i + 1 }}
          >
            <Image
              src={src}
              alt={`Belitong ${i + 1}`}
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}