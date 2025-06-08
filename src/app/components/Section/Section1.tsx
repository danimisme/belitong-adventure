"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section1() {
  // Daftar gambar (bisa kamu sesuaikan path-nya)
  const imgList = [
    "/assets/images/boat/1.png",
    "/assets/images/boat/2.png",
    "/assets/images/boat/3.png",
    "/assets/images/boat/4.png",
  ];

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  // Inisialisasi Lenis (smooth scroll) — opsional
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // GSAP ScrollTrigger setup
  useEffect(() => {
    if (!containerRef.current) return;
    const panels = panelsRef.current.filter((el) => el !== null);

    // Total lebar horizontal yang akan kita scroll: (jumlahPanel − 1) × 100vw
    const totalW = (panels.length - 1) * window.innerWidth;

    // GSAP timeline: pindahkan containerRef anak‐anaknya ke kiri (—xPercent) seiring scroll vertikal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${totalW}`, // scroll vertikal sejauh totalW px
        scrub: 0.2,
        pin: true,
        anticipatePin: 1,
        // Snap setting: 1/(panels−1) agar setiap slide “nempel”
        snap: {
          snapTo: 1 / (panels.length - 1),
          inertia: false,
          duration: 0.5,
        },
      },
    });

    // Gerakkan semua panel secara horizontal
    tl.to(
      panels,
      {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
      },
      0
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);

  return (
    <div
      // Container yang akan dipin + digeser horizontal
      ref={containerRef}
      className="relative flex h-screen w-[calc(100vw * 4)]" 
      /* 
        Kita set width = 100vw × jumlah panel (jika 4 panel → w-[calc(100vw*4)]) 
        agar keempat panel terletak berdampingan.
      */
    >
      {imgList.map((src, idx) => (
        <div
          key={idx}
          ref={(el) => { panelsRef.current[idx] = el!; }}
          className="relative flex-none h-screen w-screen bg-gray-100 flex items-center justify-center"
        >
          {/* Konten per panel */}
          <div className="container flex flex-col md:flex-row gap-8 px-8">
            <div className="flex flex-col justify-center w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-4">Slide {idx + 1}</h2>
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
            <div className="w-full md:w-1/2 overflow-hidden rounded-3xl">
              <Image
                src={src}
                alt={`Boat Image ${idx + 1}`}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
