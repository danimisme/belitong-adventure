"use client";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Section1() {
  const imgList = [
    "/assets/images/boat/1.png",
    "/assets/images/boat/2.png",
    "/assets/images/boat/3.png",
    "/assets/images/boat/4.png",
  ];
  const imageRef = useRef<(HTMLDivElement | null)[]>(new Array(imgList.length));
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    lenis.current = new Lenis({
      lerp: 0.1,
    });

    lenis.current.on("scroll", () => {});

    function raf(time: number) {
      lenis.current!.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.current?.destroy();
    };
  }, []);

  //gsap
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(imageRef.current, {
      xPercent: -100 * (imageRef.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: imageContainerRef.current,
        scrub: true,
        end: "+=" + imageContainerRef.current?.offsetWidth,
        pin: true,
        snap: 1/(imageRef.current.length - 1),
      }
    })
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  return (
    <div className="w-full overflow-x-hidden">
      <section
        className="min-h-screen flex flex-nowrap items-center space-x-10 px-20"
        ref={imageContainerRef}
        style={{
          width: 'calc(100vw * ' + imgList.length + ')',
        }}
      >
        {imgList.map((img, index) => (
          <div
            key={index}
            className="w-[100vh] shrink-0 rounded-3xl  overflow-hidden"
            ref={(ref) => {
              imageRef.current![index] = ref;
            }}
          >
            <Image
              src={img}
              alt={`Boat Image ${index + 1}`}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </section>
      <section className="w-full min-h-screen"></section>
    </div>
  );
}