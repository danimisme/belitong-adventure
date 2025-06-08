import Image from "next/image";
import "./HeroImage.css"; // pastikan kamu mengimpor file CSS

interface HeroImageProps {
  children?: React.ReactNode;
  imgSrc: string;
  imgAlt?: string;
}

export default function HeroImage({ children, imgSrc, imgAlt }: HeroImageProps) {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <Image
        src={imgSrc}
        alt={imgAlt || "Hero Image"}
        width={1200}
        height={600}
        className="hero-zoom absolute inset-0 object-cover w-full h-full z-0"
      />
      <div className="container relative z-10 h-full">{children}</div>
    </div>
  );
}