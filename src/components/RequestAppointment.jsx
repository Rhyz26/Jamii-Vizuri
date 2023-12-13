import React, { useState, useEffect } from "react";

import { Image, Button, Group, Notification, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MantineProvider } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

function RequestAppointment() {
  const form = useForm({
    initialValues: {
      Name: "",
      Email: "",
      Location: "",
      Phone: "",
    },
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handlePost = (values) => {
    fetch("http://localhost:1337/api/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        data: {
          Name: values.Name,
          Email: values.Email,
          Location: values.Location,
          Phone: values.Phone,
        },
      }),
    }).then((response) => {
      if (response.ok) {
        setSuccessMessage("Appointment Successfully Sent uploaded");
        form.reset();

        setTimeout(() => {
          close();
          setSuccessMessage("");
        }, 2300);
      }
    });
  };

  return (
    <MantineProvider>
      <div className="mx-auto max-w-[90%]">
        <div className=" mx-auto max-w-[90%] flex gap-8 space-x-12">
          <Image
            src="https://images.pexels.com/photos/5699478/pexels-photo-5699478.jpeg?auto=compress&cs=tinysrgb&w=1200 width=500px"
            w={600}
            className="rounded pb-4 pt-8"
          ></Image>
          <div className=" flex flex-col gap-4 ">
            <h1 className="font-bold pt-28 pb-8 text-2xl">Appointments</h1>
          </div>
        </div>

        <div className="flex  pb-16 pt-8 w-1/3 ml-40">
          {" "}
          <h1>
            At Jamii Vizuri, we are here when you need us the most, thats why we
            are bringing you more ways to get the care you need than ever before
          </h1>
        </div>

        <div>
          <form onSubmit={form.onSubmit(handlePost)}>
            <Group>
              <div className="flex flex-col mx-auto max-w-[100%]">
                <h1 className="font-bold pb-4">BOOK AN APPOINTMENT</h1>

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
                  label="Location"
                  placeholder="Please enter your Location"
                  {...form.getInputProps("Location")}
                />
                <TextInput
                  label="Phone"
                  placeholder="Please enter your Phone"
                  {...form.getInputProps("Phone")}
                />
              </div>
            </Group>
            <br />
            <div className="pb-4">
              <Button
                className="bg-lime-700 rounded-lg m-auto flex "
                type="submit"
              >
                Book Appointment
              </Button>
            </div>
          </form>

          {successMessage && (
            <Notification
              icon={<IconCheck size="1.1rem" />}
              color="teal"
              title="Successfully made a post."
            >
              {successMessage}
            </Notification>
          )}
        </div>
      </div>
    </MantineProvider>
  );
}

export default RequestAppointment;
