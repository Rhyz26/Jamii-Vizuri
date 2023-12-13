import React from "react";
import { Image } from "@mantine/core";

function About() {
  return (
    <div className="">
      <Image
        src="https://media.istockphoto.com/id/1400739452/vector/about-us-web-header-design-icon-interconnected-symbol-of-company-profile-corporate.jpg?s=612x612&w=0&k=20&c=-zgp-xnEqh8zBEjNajlPZmDF5PXuqlXVUu7RjBf_UGU="
        className="pt-8 pb-4"
      />
      <div className="mx-auto max-w-[70%] ">
        {/* mx-auto max-w-[70%] */}
        <h1 className="pt-8 pb-2 text-2xl font-serif">
          At Jamii Vizuri Community health , our mission is to foster a
          healthier and more resilient community in Kampala by leveraging the
          power of information, collaboration, and community engagement. Through
          our project website, we aim to provide accessible and reliable health
          resources, promote preventive care, and facilitate community-driven
          initiatives that address the unique health challenges faced by the
          residents of Kampala.
        </h1>

        <h1 className="font-bold text-2xl font-serif pt-4 pb-4">
          We are committed to:
        </h1>

        <p className="text-2xl font-serif">
          1. Empowering Individuals: Empower community members with knowledge
          and resources to make informed decisions about their health and
          well-being.
        </p>
        <p className="pb-8 text-2xl font-serif">
          2. Addressing Local Health Disparities: Identify and address specific
          health disparities within Kampala, working towards equitable access to
          healthcare resources and services for all.
        </p>

        <div className="flex justify-center gap-8 space-x-7 pb-8">
          <div className="">
            <div className="bg-purple-700 w-24 text-center h-24 p-8 rounded-full text-white font-bold text-xl">
              <h1>50K</h1>
            </div>

            <h1 className="text-sm w-28 pt-2 font-serif">
              Jamii Vizuri health services attends to more than 50,000 patients
              annually.
            </h1>
          </div>
          <div className="">
            <div className="bg-purple-700 w-24 text-center h-24 p-8 rounded-full text-white font-bold text-xl ">
              <h1>3</h1>
            </div>

            <h1 className="text-sm w-28 pt-2 font-serif">
              Jami Vizuri has so far had 3 health camps around the vicinity of
              kampala
            </h1>
          </div>

          <div className="">
            <div className="bg-purple-700 w-24 text-center h-24 p-8 rounded-full text-white font-bold text-xl">
              <h1>1</h1>
            </div>

            <h1 className="text-sm w-28 pt-2 font-serif">
              We have planned one more health camp on 19/12/2023 before the year
              closes
            </h1>
          </div>

          <div className="">
            <div className="bg-purple-700 w-24 text-center h-24 p-8 rounded-full text-white font-bold text-xl">
              <h1>13</h1>
            </div>

            <h1 className="text-sm w-28 pt-2 font-serif">
              We have 13 health workers as per now
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
