import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../../typings";

type Props = {
  pageInfo: PageInfo;
};
type inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = ({ pageInfo }: Props) => {
  const { handleSubmit, register, watch } = useForm<inputs>();

  const onSubmit: SubmitHandler<inputs> = () => {
    // window.location.href = `mailto:nilonbee@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mc-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me...
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got what you need..
          <span className="decoration-[#F7AB0A]/50 underline">Let's Talk</span>
        </h4>
        <div className="flex items-center space-x-5 justify-center">
          <PhoneIcon className="text-[#f7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2xl">+94774650356</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="text-[#f7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2xl">
            {pageInfo?.address}
          </p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon className="text-[#f7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2xl">{pageInfo?.email}</p>
        </div>

        <form
          className="flex flex-col w-fit mx-auto space-y-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="text"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            id="text-area"
          />
          <button className="bg-[#F7Ab0A]/80 py-5 px-10 rounded-md text-black font-bold hover:bg-[#F7AB0A] focus:bg-[#F7AB0A]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
