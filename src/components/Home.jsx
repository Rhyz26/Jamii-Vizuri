import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

function Home() {
  return (
    <MantineProvider>
      <div>
        <h1 className="text-center text-5xl">
          Welcome to Jamii Vizuri Community Health Services{" "}
        </h1>

        <div className="flex justify-center gap-8 pb-8 pt-4">
          <Image
            src="https://images.pexels.com/photos/159935/pexels-photo-159935.jpeg?auto=compress&cs=tinysrgb&w=800"
            w={500}
          />
          <Image
            src="https://news.mit.edu/sites/default/files/images/202304/Uganda-Vaccination-Campaign-cover.jpg"
            w={500}
          />
        </div>

        <div className="flex justify-center space-x-16 pb-4">
          <div className="flex flex-col w-60 bg-lime-700 rounded-2xl">
            <Image
              src="https://cdn.pixabay.com/photo/2017/01/13/01/22/ok-1976099_1280.png"
              w={100}
            />
            <h1 className="text-lg font-bold flex-wrap text-center">
              I am i Eligible
            </h1>
            <p>I would love to become a patient</p>
          </div>

          <div className="flex flex-col bg-amber-700 w-60 rounded-2xl">
            <Image
              src="https://cdn.pixabay.com/photo/2020/10/20/19/12/elderly-5671352_1280.png"
              w={100}
            />
            <h1 className="font-bold text-lg text-center">Volunteer</h1>
            <p>I would love to get involved</p>
          </div>

          <div className="flex flex-col bg-fuchsia-800 w-60 rounded-2xl">
            <Image
              src="https://mymbchc.org/wp-content/uploads/2021/02/banner-image-1-1-1.png"
              w={100}
            />
            <h1 className="text-lg font-bold text-center">Patient Resources</h1>
            <p>I am looking for health Information</p>
          </div>
        </div>

        <h1 className="text-center font-bold pb-3 text-xs ml-2">
          Karibu! Welcome to Jamii Vizuri Community Health Services!
        </h1>

        <p className="ml-2">
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

        <h1 className="pb-1.5 pt-4 font-bold text-center text-xl">
          Explore Our Services
        </h1>

        <p className="pb-1.5 ml-2">
          Delve into our wide range of services, including:
        </p>

        <p className="pb-1.5 ml-2">
          Reliable health information: Access up-to-date and evidence-based
          information on various health topics, from primary Health Care and
          mental health.
        </p>

        <p className="pb-1.5 ml-2">
          Community support forum: Connect with fellow community members, share
          experiences, and seek peer-to-peer support in a supportive and
          inclusive online environment.
        </p>

        <p className="pb-1.5 ml-2">
          {" "}
          Cultural sensitivity: Our content is tailored to the cultural context
          of Uganda, ensuring that it resonates with the community and addresses
          specific health concerns.
        </p>

        <p className="pb-1.5 ml-2">Your Trusted Health Partner</p>

        <p className="ml-2">
          We are committed to providing you with accurate, accessible, and
          culturally sensitive health information to empower you to make
          informed decisions about your well-being. Your health is our priority.
        </p>

        <p className="pb-2 ml-2">
          Together, let's build a healthier and more resilient Kampala.
        </p>

        <p className="pb-3.5 ml-2">Karibu sana!</p>
      </div>
    </MantineProvider>
  );
}
export default Home;
