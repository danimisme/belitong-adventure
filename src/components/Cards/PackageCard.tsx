import { PackageType } from "@/models/Packages";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: PackageType;
  linkTo?: string;
}

export default function PackageCard({ data, linkTo }: Props) {
  const {
    title,
    subCategory,
    description,
    price,
    pricePack,
    imgUrl,
    duration,
  } = data;
  return (
    <Link href={linkTo ? linkTo : "#"} className="border-2 border-primary max-w-sm bg-white  rounded-lg overflow-hidden group hover:shadow-lg hover:-translate-y-2 shadow-primary/50 transition-all duration-300 cursor-pointer">
      <div className="overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          className="w-full aspect-[477/204] object-cover group-hover:scale-125 transition-transform duration-500"
          width={600}
          height={300}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm flex items-center gap-1">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-gray-500">{duration}</span>
        </p>
        <p className="mt-2 text-gray-500">{subCategory}</p>
        {/* dynamic desctiption  */}
        <p className="text-gray-600 mt-2">
          {description
            ? description?.length > 100
              ? description.slice(0, 100) + "..."
              : description
            : "No description available"}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <p className="font-semibold">
            Rp. {price.toLocaleString("id-ID")}
            <span className="capitalize">
              {pricePack ? ` / ${pricePack}` : ""}
            </span>
          </p>
          <button
            // href={linkTo ? linkTo : "#"}
            onClick={(e) => {
              e.preventDefault();
              if (linkTo) {
                window.location.href = linkTo;
              
              }
            }}
            className="text-sm font-semibold px-3 py-2 bg-primary border border-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 group-hover:bg-white group-hover:text-primary group-hover:border-primary group-hover:shadow-lg group-hover:translate-y-2"
          >
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}
