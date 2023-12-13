import {
  Image,
  Button,
  Group,
  TextInput,
  MantineProvider,
} from "@mantine/core";
import { useForm } from "@mantine/form";

function Volunteer() {
  const form = useForm({
    initialValues: {
      Name: "",
      Email: "",
      Number: "",
      Location: "",
    },
  });

  const handlePost = (values) => {
    fetch("http://localhost:1337/api/volunteers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        data: {
          Name: values.Name,
          Email: values.Email,
          Number: values.Number,
          Location: values.Location,
        },
      }),
    }).then((response) => {
      if (response.ok) {
        form.reset();

        <Notification title="We notify you that">
          You are now obligated to give a star to Mantine project on GitHub
        </Notification>;

        setSuccessMessage("Appointment Successfully Sent");
      }
    });
  };

  return (
    <MantineProvider>
      <div className="font-serif mx-auto max-w-[100%] ">
        <h1 className="text-center font-bold text-4xl pt-4 font-serif">
          Volunteer
        </h1>

        <Image src="https://cdn.pixabay.com/photo/2018/12/14/11/55/volunteers-3874924_1280.png" />

        <div className="pt-4 ml-2 flex gap-2 pb-6 mx-auto max-w-[100%] mr-4">
          <Image
            src="https://affcaduk.org/wp-content/uploads/2021/12/New-Banner-Images-AFFCAD-Volunteer.png"
            w={450}
            className="rounded-lg"
          />

          <Image
            src="https://www.voluntouring.org/wp-content/uploads/2023/04/Organization-For-Community-Development-Uganda-volunteer-exchange-food-and-accommodation-photo-2.jpg"
            w={450}
            className="rounded-lg"
          />

          <Image
            src="https://www.afro.who.int/sites/default/files/2019-10/_WHO3755.JPG"
            w={450}
            className="rounded-lg"
          />
        </div>

        <div className="mx-auto max-w-[80%]">
          <h1 className="font-serif font-bold text-3xl text-center pt-4 pb-4">
            Volunteer for a Healthier Kampala: Make a Difference Today!
          </h1>

          <p className="font-serif text-xl">
            Kampala's vibrant community thrives on the collective efforts of
            passionate individuals. Join our dedicated team of volunteers and
            play a crucial role in improving the lives of countless people.
          </p>

          <h1 className="font-serif text-2xl font-bold pb-2">
            Together, we can:
          </h1>
          <p className="text-xl">
            1. Provide essential healthcare services: Our volunteers offer
            primary care, health education, and support to individuals in need.
          </p>
          <p className="text-xl">
            2. Empower communities: Our outreach programs promote access to
            healthcare, raise awareness of health issues, and foster healthy
            living habits.
          </p>
          <p className="text-xl">
            3. Build a stronger Kampala: Through collaborative efforts, we can
            create a healthier and more resilient community for all.
          </p>

          <h2 className="text-2xl font-bold pb-2 pt-2">
            Why volunteer with us?
          </h2>
          <p className="text-xl">
            1. Make a tangible impact: Witness the positive changes your time
            and expertise bring to the lives of individuals and families.
          </p>
          <p className="text-xl">
            2. Gain valuable skills: Develop your communication, teamwork, and
            problem-solving abilities in a supportive environment.
          </p>
          <p className="text-xl">
            3. Contribute to a cause you care about: Be a part of something
            bigger than yourself and make a lasting difference in your
            community.
          </p>
          <p className="text-xl">
            4. Whatever your background or experience, there's a place for you
            on our team. We provide comprehensive training and support to ensure
            you feel confident and empowered to make a positive contribution.
          </p>
          <p className="text-xl font-bold pb-2 pt-2">
            Ready to join our volunteer family?
          </p>
          <div className="text-xl">
            <p>a. Click the "Sign Up" button below.</p>
            <p>b. Complete the online registration form.</p>
            <p>c. Attend our next volunteer orientation session.</p>
            <p>d. Start making a difference in Kampala's health!</p>
            <p>e. Let's build a healthier future together. Sign up today!</p>
          </div>

          <h1 className="font-bold text-2xl text-center pt-2 pb-2">Sign Up</h1>

          <div>
            <form onSubmit={form.onSubmit(handlePost)}>
              <Group>
                <div className="flex flex-col mx-auto max-w-[100%]">
                  <TextInput
                    label="Name"
                    placeholder="Please enter your name"
                    {...form.getInputProps("Name")}
                  />
                  <TextInput
                    label="Email"
                    placeholder="Please enter your Email"
                    {...form.getInputProps("Email")}
                  />
                  <TextInput
                    label="Number"
                    placeholder="Please enter your Number"
                    {...form.getInputProps("Number")}
                  />
                  <TextInput
                    label="Location"
                    placeholder="Please enter your Location"
                    {...form.getInputProps("Location")}
                  />
                </div>
              </Group>
              <br />
              <div className="pb-4">
                <Button
                  className="bg-lime-700 rounded-lg m-auto flex "
                  type="submit"
                >
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}

export default Volunteer;
