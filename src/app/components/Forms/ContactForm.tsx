import { FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import InputField from "../Input/InputField";
import Toggle from "../Input/Toggle";
import { IoMailOutline } from "react-icons/io5";
import "./ContactForm.css"; // Assuming you have some styles for the form

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
const EMAIL_ADDRESS = process.env.NEXT_PUBLIC_EMAIL_ADDRESS

type Inputs = {
  name: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [sendViaWhatsApp, setSendViaWhatsApp] = useState(true);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (sendViaWhatsApp) {
      const whatsappMessage = `Hello, my name is ${data.name}.\n\n` +
        `Subject: ${data.subject}\n\n` +
        `Message: ${data.message}`;

      const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappURL, "_blank");
    } else {
      const mailtoLink = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Name: ${data.name}\n\n${data.message}`)}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label="Full Name"
          type="text"
          register={register("name", { required: "please enter your name" })}
          error={errors.name?.message}
        />

      <InputField
        label="Subject"
        type="text"
        register={register("subject", { required: "please enter the subject" })}
        error={errors.subject?.message}
      />

      <InputField
        label="Message"
        type="textarea"
        register={register("message", { required: "please enter your message" })}
        error={errors.message?.message}
      />

      <div className="flex items-center gap-4">
        <span className={`option flex items-center gap-1 text-sm ${!sendViaWhatsApp ? "text-primary active" : ""}`}><IoMailOutline className="text-xl"/>Mail </span>
        <Toggle
          label="Send Option"
          checked={sendViaWhatsApp}
          onChange={() => setSendViaWhatsApp(!sendViaWhatsApp)}
        />
        <span className={`option flex items-center gap-1 text-sm ${sendViaWhatsApp ? "text-primary active" : ""} `}><FaWhatsapp className="text-xl"/> WhatsApp</span>

      </div>

      <button
        type="submit"
        className="flex items-center gap-2 bg-primary hover:bg-teal-700 text-white px-6 py-2 rounded"
      >
        <FaPaperPlane /> Send Message
      </button>
    </form>
  );
}
