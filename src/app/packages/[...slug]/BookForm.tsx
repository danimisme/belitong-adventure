"use client";

import { IoMdCheckmark } from "react-icons/io";
import InputField from "../../../components/Input/InputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { PackageType } from "@/models/Packages";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

interface Props {
  packageData: PackageType;
}

type BookingInputs = {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  guests: number;
};

export default function BookForm({ packageData }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingInputs>();

  const onSubmit: SubmitHandler<BookingInputs> = (data) => {
    // Format preferredDate to dd-mmm-yyyy
    const dateObj = new Date(data.preferredDate);
    const formattedDate = dateObj.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).replace(/ /g, '-');

    const bookingMessage = `Hello, I would like to make a booking.\n\n` +
      `*BOOKING DETAILS*\n` +
      `Name: ${data.fullName}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone}\n` +
      `Preferred Date: ${formattedDate}\n` +
      `Number of Guests: ${data.guests}\n\n` +
      `*PACKAGE INFORMATION*\n` +
      `Package Name: ${packageData?.title}\n` +
      `Category: ${packageData?.category} - ${packageData?.subCategory}\n` +
      `Location: ${packageData?.location}\n` +
      `Please confirm this booking and let me know if you need any additional information. Thank you!`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(bookingMessage)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="lg:sticky lg:top-20 border border-gray-300 rounded-lg p-4 md:p-6 mb-8">
      {/* Price Section */}
      <div className="mb-6">
        <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Rp {packageData?.price?.toLocaleString("id-ID")}
        </div>
        <div className="text-gray-600 text-sm">per {packageData?.pricePack || "person"}</div>
      </div>

      <div className="border-t border-gray-200 mb-6"></div>

      {/* Booking Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label="Full Name"
          type="text"
          register={register("fullName", { required: "Please enter your full name" })}
          error={errors.fullName?.message}
        />

        <InputField
          label="Email"
          type="email"
          register={register("email", { 
            required: "Please enter your email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address"
            }
          })}
          error={errors.email?.message}
        />

        <InputField
          label="Phone Number"
          type="tel"
          register={register("phone", { 
            required: "Please enter your phone number",
            pattern: {
              value: /^[+]?[\d\s\-()]+$/,
              message: "Please enter a valid phone number"
            }
          })}
          error={errors.phone?.message}
        />

        <InputField
          label="Preferred Date"
          type="date"
          register={register("preferredDate", { 
            required: "Please select your preferred date",
            validate: {
              futureDate: (value) => {
                const selectedDate = new Date(value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return selectedDate >= today || "Please select a date from today onwards";
              }
            }
          })}
          error={errors.preferredDate?.message}
        />

        <InputField
          label="Number of Guests"
          type="number"
          register={register("guests", { 
            required: "Please enter the number of guests",
            min: {
              value: 1,
              message: "Minimum 1 guest required"
            },
            max: {
              value: packageData?.maxGuests || 10,
              message: `Maximum ${packageData?.maxGuests || 10} guests allowed`
            }
          })}
          error={errors.guests?.message}
        />

        {/* Book Now Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          Book Now
        </button>
      </form>

      {/* Benefits List */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <IoMdCheckmark className="text-green-500 mr-2 flex-shrink-0" />
            Free cancellation up to 7 days
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <IoMdCheckmark className="text-green-500 mr-2 flex-shrink-0" />
            Instant confirmation
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <IoMdCheckmark className="text-green-500 mr-2 flex-shrink-0" />
            Flexible payment options
          </div>
        </div>
      </div>
    </div>
  );
}
