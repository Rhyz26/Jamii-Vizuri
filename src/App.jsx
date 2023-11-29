import '@mantine/core/styles.css';


import { MantineProvider } from '@mantine/core';
import { BackgroundImage, Center, Text, Box } from '@mantine/core';
import Contacts from "./components/Contacts";
function App() {
  return (
    <MantineProvider>
      <Box maw={1800} mx="auto">
        <BackgroundImage
          src="https://media.istockphoto.com/id/1288697903/photo/customer-support-executive.jpg?s=612x612&w=0&k=20&c=JDYRUNlUWjFh0HzANjCQO0IKQd3geVmzZR9bM9nkQQE="
          radius="sm"
          h={400}
        >
          <Center p="lg">
            <Text c="white">
              <div className="text-center">
                <br></br>
                <br></br>

                <h1 className="text-center">
                  <b>CONTACT US ABOUT JAMII VIZURI COMMUNITY HEALTH</b>
                </h1>
                <br></br>
                <b>
                  Welcome to Our Community Health Hub At Jamii Vizuri Community
                  Health, we're committed to empowering individuals and families
                  to achieve their best health and well-being. We believe that
                  access to reliable information, supportive resources, and
                  compassionate care is essential for a thriving community. Your
                  Connection to Personalized Support Whether you have questions
                  about specific health concerns, need assistance navigating
                  local healthcare services, or simply want to connect with our
                  team of experts, we're here to help. Our contact page is your
                  gateway to personalized support and guidance. Reach Out with
                  Confidence Please feel free to reach out using the form below,
                  Our friendly and knowledgeable team is ready to assist you
                  with your inquiries.
                </b>
              </div>
            </Text>
          </Center>
        </BackgroundImage>
      </Box>
      
      <Contacts/>


      




    </MantineProvider>
  );
}
export default App;




