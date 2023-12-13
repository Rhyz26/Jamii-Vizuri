import React, { useState, useEffect } from "react";

import { Image, Button, Group, Notification, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MantineProvider } from "@mantine/core";
import { Select } from "@mantine/core";
import { BackgroundImage, Center, Text, Box } from "@mantine/core";

function Register() {
  const form = useForm({
    initialValues: {
      Name: "",
      Email: "",
      Role: "",
      Location: "",
      Phone: "",
    },
  });

  const handlePost = (values) => {
    fetch("http://localhost:1337/api/registers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        data: {
          Name: values.Name,
          Email: values.Email,
          Role: values.Role,
          Location: values.Location,
          Phone: values.Phone,
        },
      }),
    }).then((response) => {
      if (response.ok) {
        form.reset();

        <Notification title="We notify you that">
          You have Successfully registered
        </Notification>;

        setSuccessMessage("You have Successfully Registered");
      }
    });
  };

  return (
    <MantineProvider>
      <Box maw={1800} mx="auto">
        <BackgroundImage
          src="https://cdn.pixabay.com/photo/2021/08/17/22/25/woman-6554271_1280.jpg"
          radius="sm"
          h={400}
        >
          <Center p="lg">
            <Text c="white">
              <div className="text-center text-xl text-black font-serif  mx-auto w-4/12 mr-4 pt-8">
                <br></br>
                <br></br>

                {/* <h1 className="text-center">
                  <b>CONTACT US ABOUT JAMII VIZURI COMMUNITY HEALTH</b>
                </h1> */}

                <b>
                  In case your interested in registering as a VHT(Village Health
                  Team) or as a Doctor, your kindly advised to register below
                </b>
              </div>
            </Text>
          </Center>
        </BackgroundImage>
      </Box>

      <div className="">
        <form onSubmit={form.onSubmit(handlePost)}>
          <Group>
            <div className="flex flex-col mx-auto max-w-[100%] pt-4">
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

              <Select
                label="Role"
                placeholder="Please enter your role"
                data={["Doctor", "VHT"]}
                {...form.getInputProps("Role")}
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
              className="bg-lime-700 rounded-lg m-auto flex"
              type="submit"
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </MantineProvider>
  );
}

export default Register;
