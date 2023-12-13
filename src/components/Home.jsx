import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { Image } from "@mantine/core";
import { Link } from "react-router-dom";

function Home() {
  return (
    <MantineProvider>
      <div className="mx-auto max-w-[80%] font-serif">
        <h1 className="text-center text-5xl pt-6 pb-4">
          Welcome to Jamii Vizuri Community Health Services!{" "}
        </h1>

        <div className="flex justify-center gap-8 pb-8 pt-4">
          <Image
            src="https://images.pexels.com/photos/159935/pexels-photo-159935.jpeg?auto=compress&cs=tinysrgb&w=800"
            w={500}
            className="rounded-xl"
          />
          <Image
            src="https://news.mit.edu/sites/default/files/images/202304/Uganda-Vaccination-Campaign-cover.jpg"
            w={500}
            className="rounded-xl"
          />
        </div>

        <div className="flex justify-center space-x-16 pb-4">
          <Link to="/services">
            <div className="flex flex-col w-60 bg-lime-700 rounded-2xl">
              <Image
                src="https://cdn.pixabay.com/photo/2017/01/13/01/22/ok-1976099_1280.png"
                w={100}
              />
              <h1 className="text-lg font-bold flex-wrap text-center pt-4">
                I am i Eligible?
              </h1>
              <p className="text-center text-lg pt-4">
                Kindly Check our Services
              </p>
            </div>
          </Link>

          <Link to="/volunteer">
            <div className="flex flex-col bg-amber-700 w-60 rounded-2xl">
              <Image
                src="https://cdn.pixabay.com/photo/2020/10/20/19/12/elderly-5671352_1280.png"
                w={100}
              />

              <h1 className="font-bold text-lg text-center">Volunteer?</h1>
              <p className="text-center pb-2 text-lg">
                I would love to get involved
              </p>
            </div>
          </Link>
        </div>

        <h1 className="text-center font-bold pb-4 text-2xl ml-2 pt-4">
          Karibu! Welcome to Jamii Vizuri Community Health Services!
        </h1>

        <p className="ml-2 text-xl">
          Your Gateway to Health and Well-being in Kampala At Jamii Vizuri
          Community Health, we are committed to empowering individuals and
          families in Kampala, Uganda, to achieve their best health and
          well-being. We believe that access to reliable information, supportive
          resources, and compassionate care is essential for thriving
          communities. Your Community Health Hub Our community health website is
          your one-stop resource for comprehensive health information, tailored
          to the unique needs of Ugandans. Whether you're seeking guidance on
          preventative care, navigating the local healthcare system, our team is
          here to support you.
        </p>

        <h1 className="pb-1.5 pt-4 font-bold text-center text-2xl">
          Explore Our Services
        </h1>

        <p className="pb-1.5 ml-2 text-xl">
          Delve into our wide range of services, including:
        </p>

        <p className="pb-1.5 ml-2 text-xl">
          Reliable health information: Access up-to-date and evidence-based
          information on various health topics, from primary Health Care and
          mental health.
        </p>

        <p className="pb-1.5 ml-2 text-xl">
          {" "}
          Cultural sensitivity: Our content is tailored to the cultural context
          of Uganda, ensuring that it resonates with the community and addresses
          specific health concerns.
        </p>

        <p className="pb-1.5 ml-2 text-xl">Your Trusted Health Partner</p>

        <p className="ml-2 text-xl">
          We are committed to providing you with accurate, accessible, and
          culturally sensitive health information to empower you to make
          informed decisions about your well-being. Your health is our priority.
        </p>

        <p className="pb-2 ml-2 text-xl">
          Together, let's build a healthier and more resilient Kampala.
        </p>

        <p className="pb-3.5 ml-2 text-xl pt-4 text-center">Karibu sana!</p>
      </div>
    </MantineProvider>
  );
}
export default Home;
