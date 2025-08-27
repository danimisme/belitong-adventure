interface ParalaxImageProps {
  children?: React.ReactNode;
  imgSrc: string;
  imgAlt?: string;
}

export default function ParalaxImage({ children, imgSrc }: ParalaxImageProps) {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="w-full h-full bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${imgSrc})` }} />
      </div>
      <div className="relative z-10 h-full container flex items-center">
        {children}
      </div>
    </div>
  );
}
