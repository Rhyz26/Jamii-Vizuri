import "@mantine/core/styles.css";

import React from "react";

import { useDisclosure } from "@mantine/hooks";
import { PasswordInput, Stack } from "@mantine/core";
import { useState } from "react";
import { Input, CloseButton } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { Checkbox } from "@mantine/core";
import { Button } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import { BackgroundImage, Center, Text, Box } from "@mantine/core";
import { Textarea } from "@mantine/core";

function Contacts() {
  const [value, setValue] = useState("Clear me");
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <MantineProvider>
      <div className=" ">
        {/* <h1 className="text-center font-bold text-xl">CONTACT US</h1> */}
        <Box maw={1800} mx="auto">
          <BackgroundImage
            src="https://media.istockphoto.com/id/1453165336/photo/contact-us-message-on-cube-blocks-on-wood-table.jpg?s=612x612&w=0&k=20&c=CrP48gvWGu-XGYs-GPe-JNClbMq2RDmUAu3I_cxiGNA="
            radius="sm"
            h={400}
          >
            <Center p="lg">
              <Text c="white">
                <div className="text-center text-xl text-black font-serif">
                  <br></br>
                  <br></br>

                  {/* <h1 className="text-center">
                  <b>CONTACT US ABOUT JAMII VIZURI COMMUNITY HEALTH</b>
                </h1> */}

                  <b>
                    Welcome to Jamii Vizuri Community Health, we're committed to
                    empowering individuals and families to achieve their best
                    health and well-being. We believe that access to reliable
                    information, supportive resources, and compassionate care is
                    essential for a thriving community. Your Connection to
                    Personalized Support Whether you have questions about
                    specific health concerns, need assistance navigating local
                    healthcare services, or simply want to connect with our team
                    of experts, we're here to help. Our contact page is your
                    gateway to personalized support and guidance. Reach Out with
                    Confidence Please feel free to reach out using the form
                    below, Our friendly and knowledgeable team is ready to
                    assist you with your inquiries.
                  </b>
                </div>
              </Text>
            </Center>
          </BackgroundImage>
        </Box>

        <div className="mx-auto max-w-[30%]">
          <Input radius="md" placeholder="First name" className="pb-4 pt-4" />
          <Input radius="md" placeholder="Last name" className="pb-4" />

          <>
            <Input
              radius="md"
              placeholder="Your email"
              leftSection={<IconAt size={16} />}
              className="pb-4"
            />
          </>

          <Textarea
            size="xl"
            radius="md"
            description="Input your message"
            placeholder=""
          />

          <Stack>
            <Checkbox
              defaultChecked
              label="I accept  the Terms of Use & Privacy Policy"
              className="pt-4"
            />

            <Button
              variant="default"
              color="yellow"
              size="lg"
              radius="lg"
              className="bg-lime-500"
            >
              Submit
            </Button>

            <br></br>
          </Stack>
        </div>
      </div>
    </MantineProvider>
  );
}

export default Contacts;
