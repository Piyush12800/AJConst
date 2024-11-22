import * as React from "react";

export default function ServiceCard({ title, description }) {
  return (
    <div className="flex flex-col grow shrink justify-center py-12 pr-9 pl-9 bg-amber-200 min-w-[240px] w-[306px] max-md:px-5">
      <div className="flex flex-col max-w-full w-[310px]">
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full">
            <h3 className="text-2xl font-bold text-black">{title}</h3>
            <p className="mt-3 text-lg text-zinc-500">{description}</p>
          </div>
        </div>
        <button className="mt-8 text-lg font-semibold text-white">Read More</button>
      </div>
    </div>
  );
}import * as React from "react";

export default function ContactForm() {
  return (
    <form className="flex flex-col items-center min-w-[240px] w-[464px] max-md:max-w-full">
      <div className="flex flex-col w-full text-lg text-zinc-500">
        <div className="flex flex-col w-full">
          <input
            type="text"
            placeholder="Your Name"
            aria-label="Your Name"
            className="px-8 py-6 bg-white border border-amber-200 border-solid max-md:px-5 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col mt-8 w-full">
          <input
            type="email"
            placeholder="Email Address"
            aria-label="Email Address"
            className="px-8 py-6 bg-white border border-amber-200 border-solid max-md:px-5 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col mt-8 w-full">
          <input
            type="tel"
            placeholder="Phone Number"
            aria-label="Phone Number"
            className="px-8 py-6 bg-white border border-amber-200 border-solid max-md:px-5 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col mt-8 w-full">
          <textarea
            placeholder="Service Description"
            aria-label="Service Description"
            className="px-8 pt-5 pb-24 bg-white border border-amber-200 border-solid max-md:px-5 max-md:max-w-full"
          />
        </div>
      </div>
      <button type="submit" className="gap-2.5 self-stretch px-48 pt-5 pb-5 mt-11 text-xl font-semibold text-center text-white whitespace-nowrap bg-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
        Submit
      </button>
    </form>
  );
}
import * as React from "react";

export default function NewsCard({ image, title, description }) {
  return (
    <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-4 max-md:max-w-full">
        <img loading="lazy" src={image} alt={title} className="object-contain grow w-full aspect-[1.62] max-md:mt-3.5 max-md:max-w-full" />
        <div className="flex flex-col max-w-full w-[584px]">
          <h3 className="text-3xl font-bold text-black max-md:max-w-full">{title}</h3>
          <p className="mt-2.5 text-lg leading-7 text-white max-md:max-w-full">{description}</p>
        </div>
        <button className="mt-7 max-w-full text-xl font-semibold text-black w-[118px]">Read More</button>
      </div>
    </article>
  );
}

import * as React from "react";
import ServiceCard from "./ServiceCard";
import ContactForm from "./ContactForm";
import NewsCard from "./NewsCard";

const services = [
  {
    title: "Air condition service",
    description: "Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt."
  },
  {
    title: "Electrical installation",
    description: "Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt."
  },
  {
    title: "General Builder",
    description: "Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt."
  },
  {
    title: "Security System",
    description: "Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt."
  },
  {
    title: "Service & maintenance",
    description: "Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt."
  },
  {
    title: "House Extensions",
    description: "Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt."
  }
];

const news = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f48a125b56b2b7b0e52d0d8b08f18176a4f1ffba78487f01468e93c875e789d?placeholderIfAbsent=true&apiKey=37f6f1a296604cb99b6aedb764edd693",
    title: "Improve Workflow With bluecollar Construction",
    description: "Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin pretium id urna sit amet tincidunt. Interdum et malesuada."
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/287cafe045225b0bee7bd74b130d00edce61a98bed4a9b9d71c1245bebe194ae?placeholderIfAbsent=true&apiKey=37f6f1a296604cb99b6aedb764edd693",
    title: "Understanding Your Home's Electrical Capacity",
    description: "Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin pretium id urna sit amet tincidunt. Interdum et malesuada."
  }
];

[Rest of the code would go here, but I've reached the character limit. Would you like me to continue with the rest of the implementation?]