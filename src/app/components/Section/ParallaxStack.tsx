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
];

export default function ParallaxStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const titleRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "bottom bottom",
        end: `+=${(images.length - 1) * 1000}`,
        scrub: 0.4,
        pin: true,
      },
    });

    imageRefs.current.forEach((el, i) => {
      if (i === 0) {
        gsap.set(el, {
          y: 0,
          x: 0,
          opacity: 1,
        });
      } else {
        tl.fromTo(
          el,
          { y: 1000, x: 0 + i * 50 },
          { y: 0 + i * 50, opacity: 1, duration: 2, ease: "none" },
          (i - 1) * 1.5
        );
      }
    });

    // Title animation
    titleRefs.current.forEach((title, titleIndex) => {
      if (title) {
        const letters = title.textContent ? [...title.textContent] : [];
        title.textContent = ""; // Clear the original text

        letters.forEach((letter, index) => {
          const letterSpan = document.createElement("span");
          letterSpan.textContent = letter;
          letterSpan.style.display = "inline-block"; // Ensure letters are side by side
          if (letter === " ") {
            letterSpan.innerHTML = "&nbsp;"; // Preserve spaces
          }
          title.appendChild(letterSpan);

          tl.fromTo(
            letterSpan,
            {
              fontWeight: 800, // Final state: bold font weight
              y:index % 2 == 0 ? -100 : 100, // Alternate up and down
              x: 100 + titleIndex * 50, // Start from the right
              opacity: 0,
            },
            {
              fontWeight: 800, // Final state: bold font weight
              y: 0, // Move to original position
              x: 0,
              duration: 0.3, // Shorten the duration
              delay: index * 0.05, // Reduce the delay
              ease: "power1.inOut",
              opacity: 1,
            },
            (images.length - 3 + titleIndex) * 1.5 // Adjust the start time
          );
        });
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
      className="md:relative h-[100vh] container grid grid-cols-1 md:grid-cols-2 justify-center overflow-hidden"
    >
      <div className="flex flex-col justify-center text-center md:text-left md:py-0 py-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-italiana mb-2">Unlock the Wonders of Belitong</h2>
        <p className="mt-1 mb-2">Majestic granite shapes the horizon</p>
        {titles.map((title, i) => (
          <h2 key={i} className="text-xl md:text-2xl lg:text-4xl font-italiana mt-2 mb-2">
            <span
              ref={(el) => {
                if (el) titleRefs.current[i] = el;
              }}
            >
              {title}
            </span>
          </h2>
        ))}
        <Link href={"#"} className="flex items-center gap-2 mt-4 justify-center md:justify-start">
          Let the journey begin <FaArrowDown className="animate-bounce" />
        </Link>
      </div>
      <div className="md:mt-10 flex items-center justify-center md:justify-start">
        {images.map((src, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) imageRefs.current[i] = el;
            }}
            className="absolute w-[80%] md:w-[40%] aspect-square shadow-lg overflow-hidden"
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