import Link from "next/link";

export default function ActionButton({
  text,
  linkTo,
}: {
  text: string;
  linkTo: string;
}) {
  return (
    <Link
      href={linkTo}
      className="backdrop-blur-xs max-w-60 text-center font-italiana font-semibold text-xl border border-white text-white py-4 px-7 rounded-full bg-white/10  hover:bg-white hover:text-black transition-colors duration-300"
    >
      {text}
    </Link>
  );
}
