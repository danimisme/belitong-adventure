import { packagesData } from "@/data/adventure-packages/packages";
import { notFound } from "next/navigation";
import Image from "next/image";
import { IoCameraOutline, IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { LuDot, LuShield, LuUsers } from "react-icons/lu";
import { CiCalendar, CiForkAndKnife } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
import IncludedSection from "./IncludedSection";
import { RiErrorWarningLine } from "react-icons/ri";
import BookForm from "./BookForm";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const packageSlug = slug[slug.length - 1];
  const packageData = packagesData.find(
    (pkg) => pkg.slug.toString() === packageSlug
  );

  if (!packageData) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Overlay Title */}
      <div className="relative min-h-[500px] flex flex-col justify-end">
        <Image
          src={packageData.imgBannerUrl || packageData.imgUrl}
          alt={packageData.title}
          fill
          className="object-cover absolute inset-0 w-full h-full z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10 h-full w-full text-white py-4 flex flex-col gap-1">
          <div className="bg-primary px-4 py-[2px] my-2 md:my-4 flex w-fit rounded-2xl font-bold text-sm capitalize">
            {packageData.category.toLowerCase().replace(/-/g, " ")}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium">
            {packageData.title}
          </h1>
          <div className="text-md md:text-lg lg:text-xl capitalize">
            {packageData.subCategory}
          </div>
          <div className="text-sm flex items-center md:text-md lg:text-lg gap-1">
            <IoLocationOutline />{" "}
            {packageData.location || "Belitung Island, Indonesia"}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Main Content */}
          <div className="lg:col-span-2">
            {/* Package Highlights */}
            {(packageData.duration ||
              packageData.maxGuests ||
              packageData.avability) && (
              <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-300 rounded-lg p-4 md:p-6 mb-8 gap-4">
                {/* Package Duration */}
                {packageData?.duration && (
                  <div className="flex items-center gap-2">
                    <div className="bg-secondary/40 h-full w-auto rounded-lg aspect-square flex items-center justify-center">
                      <FaRegClock className="text-primary h-full w-auto p-3" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Duration</span>
                      <span className="text-md md:text-lg font-medium">
                        {packageData.duration}
                      </span>
                    </div>
                  </div>
                )}
                {/* Package Max Guests */}
                {packageData?.maxGuests && (
                  <div className="flex items-center gap-2">
                    <div className="bg-secondary/40 h-full w-auto rounded-lg aspect-square flex items-center justify-center">
                      <LuUsers className="text-primary h-full w-auto p-3" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Max Guests</span>
                      <span className="text-md md:text-lg font-medium">
                        {packageData.maxGuests} People
                      </span>
                    </div>
                  </div>
                )}
                {/* Package Avaibility */}
                {packageData?.avability && (
                  <div className="flex items-center gap-2">
                    <div className="bg-secondary/40 h-full w-auto rounded-lg aspect-square flex items-center justify-center">
                      <CiCalendar className="text-primary h-full w-auto p-3" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">
                        Availability
                      </span>
                      <span className="text-md md:text-lg font-medium">
                        {packageData.avability}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Overview */}
            <div className="border border-gray-300 rounded-lg p-4 md:p-6 mb-8">
              <h2 className="text-base md:text-lg font-medium mb-4 md:mb-6 lg:mb-8">
                Overview
              </h2>
              {packageData.description && (
                <p className="text-gray-700 text-justify text-sm md:text-base">
                  {packageData.description}
                </p>
              )}
              <div className="border-b border-gray-300 my-8 md:my-10 lg:my-12"></div>
              {/* Key Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <CiForkAndKnife className="text-lg md:text-xl font-bold text-primary" />
                  <span className="text-sm md:text-md">Meals Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <LuShield className="text-lg md:text-xl font-bold text-primary" />
                  <span className="text-sm md:text-md">Insurance Covered</span>
                </div>
                <div className="flex items-center gap-2">
                  <IoCameraOutline className="text-lg md:text-xl font-bold text-primary" />
                  <span className="text-sm md:text-md">Photography Spots</span>
                </div>
              </div>
            </div>

            {/* Day-by-Day Itinerary */}
            {packageData.itinerary && (
              <div className="border border-gray-300 rounded-lg p-4 md:p-6 mb-8">
                {/* More than 1 day trip */}
                {packageData.itinerary.length > 1 && (
                  <>
                    <h2 className="text-base md:text-lg font-medium mb-4 md:mb-6 lg:mb-8">
                      Day-by-Day Itinerary
                    </h2>
                    <ol className="relative border-s-2 border-secondary dark:border-gray-700 mx-4 pt-1">
                      {packageData.itinerary.map((day) => (
                        <li className="ms-6 md:ms-8" key={day.day}>
                          <span className="absolute flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full -start-4 md:-start-5 ring-8 md:ring-10 ring-[#F9FAFB] dark:ring-gray-900 dark:bg-primary text-white">
                            {day.day}
                          </span>
                          <h3 className="mb-1 text-sm md:text-md lg:text-lg font-medium text-gray-900 dark:text-white">
                            Day {day.day}: {day.title}
                          </h3>
                          <ol className="list-none min-h-20 flex flex-col gap-2 mt-2 mb-4">
                            {day.activities.map((activity, index) => (
                              <li
                                key={index}
                                className="text-gray-700 text-xs md:text-sm flex items-center gap-2"
                              >
                                <IoMdCheckmark className="text-primary" />

                                {activity}
                              </li>
                            ))}
                          </ol>
                        </li>
                      ))}
                    </ol>
                  </>
                )}

                {/* Single day trip */}
                {packageData.itinerary.length === 1 && (
                  <>
                    <h2 className="text-base md:text-lg font-medium mb-4 md:mb-6 lg:mb-8">
                      Trip Schedule
                    </h2>
                    <div className="mb-4">
                      <h3 className="mb-1 text-sm md:text-md lg:text-lg font-medium text-gray-900 dark:text-white">
                        {packageData.itinerary[0].title}
                      </h3>
                      <ol className="relative border-s-2 border-secondary dark:border-gray-700 mx-4 pt-1">
                        {packageData.itinerary[0].activities.map(
                          (activity, index) => (
                            <li className="ms-6 md:ms-8 min-h-12" key={activity + index}>
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-4 ring-[#F9FAFB] dark:ring-gray-900 dark:bg-primary text-white">
                              {index + 1}
                            </span>
                          <p className="mb-1 text-sm md:text-base font-medium text-gray-900 dark:text-white">
                            {activity}
                          </p>
                        </li>
                          )
                        )}
                      </ol>
                    </div>
                  </>
                )}
       
              </div>
            )}

            {/* What's Included/Not Included */}
            <IncludedSection
              included={packageData?.included || []}
              notIncluded={packageData?.notIncluded || []}
            />

            {/* Photo Gallery */}
            {packageData.imgGalleryUrls && (
              <div className="border border-gray-300 rounded-lg p-4 md:p-6 mb-8">
                <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6 lg:mb-8">
                  Photo Gallery
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {packageData.imgGalleryUrls.slice(0, 4).map((url, index) => (
                    <div
                      key={index}
                      className="relative h-48 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={url}
                        alt={`Gallery ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Important Information */}
            {packageData.importantInfo && (
              <div className="border border-gray-300 bg-secondary/20 rounded-lg p-4 md:p-6 mb-8">
                <h3 className="text-base md:text-lg mb-4 flex items-center gap-1">
                  <span>
                    <RiErrorWarningLine className="text-primary text-xl" />
                  </span>
                  Important Information
                </h3>
                <ul className="space-y-2 list-decimal ml-2 md:ml-5">
                  {packageData.importantInfo.map((info, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-700 flex items-start"
                    >
                      <LuDot className="text-primary mt-[4px]" />
                      {info}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* Right Side - Sticky Sidebar */}
          <div className="lg:col-span-1">
            <BookForm packageData={packageData} />
          </div>
        </div>
      </div>
    </div>
  );
}
