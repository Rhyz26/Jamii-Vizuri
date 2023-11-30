import "@mantine/core/styles.css";
import Header from "./components/Header";

import { MantineProvider } from "@mantine/core";

import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import Services from "./components/Services";
function App() {
  return (
  <MantineProvider>
    
    <Header/>
    



      <div className="flex justify-center pt-8 ml-0 ">
        <Card shadow="sm" padding="xl" component="a" href="" target="_blank">
          <Card.Section>
            <Image
              src="https://media.istockphoto.com/id/1365436734/photo/group-of-business-persons-talking-in-the-office.jpg?s=612x612&w=0&k=20&c=HMfrS47_CcQK8UTUegQNKlzmoenMLTPdm17uuJoNUw4="
              alt="A happy worker!"
              h={600}
            />
          </Card.Section>

          <Text fw={500} size="lg" mt="md"></Text>

          <Text mt="xs" size="sm">
            At Jamii Vizuri Community Health, We provide the same high-quality
            health care as the area’s leading hospitals and medical centers
            because our volunteers come from the same settings. Patients can
            expect to develop an ongoing relationship with their medical workers
            as we work to ensure they have the support and information needed to
            get healthy and stay healthy.
          </Text>
        </Card>
      </div>

      <Services />
      <div className="flex flex-wrap">


      <Card shadow="sm" padding="xl" component="a" href="" target="">
        <Card.Section>
          <Image
            src="https://images.prismic.io/medallia/71cab8bd-2b73-4049-8058-79018a994b1e_Icon-1.png?auto=compress,format"
            w={200}
            h={160}
            alt="an image about people!"
            />
        </Card.Section>

        <Text fw={500} size="lg" mt="md">
          Primary Health care!
        </Text>

        <Text mt="xs" size="sm">
          Primary health care (PHC) is the first level of contact with the
          healthcare system and plays a crucial role in maintaining and
          promoting health within a community. It encompasses a range of
          essential services that are accessible, affordable, and culturally
          sensitive, addressing the needs of individuals and families across
          their entire lifespan.
        </Text>
      </Card>
            </div>

      <div className="flex gap-2">
        <Card shadow="sm" padding="xl" component="a" href="" target="">
          <Card.Section>
            <Image
              src="https://images.pexels.com/photos/1722196/pexels-photo-1722196.jpeg?auto=compress&cs=tinysrgb&w=800"
              w={400}
              h={200}
              alt="image of boy and girl!"
            />
          </Card.Section>

          <Text fw={500} size="lg" mt="md">
            Sexual and Reproductive Health!
          </Text>

          <Text mt="xs" size="sm">
            Sexual and reproductive health (SRH) encompasses the physical,
            mental, and social aspects of sexuality and reproduction.
          </Text>
        </Card>

        <Card shadow="sm" padding="xl" component="a" href="" target="">
          <Card.Section>
            <Image
              src="https://images.pexels.com/photos/3873209/pexels-photo-3873209.jpeg?auto=compress&cs=tinysrgb&w=800"
              h={200}
              w={400}
              alt="about tablets!"
            />
          </Card.Section>

          <Text fw={500} size="lg" mt="md">
            Medication!
          </Text>

          <Text mt="xs" size="sm">
            Medication plays a crucial role in modern medicine, providing
            effective treatments for a wide range of health conditions.
          </Text>
        </Card>

        <Card shadow="sm" padding="xl" component="a" href="" target="">
          <Card.Section>
            <Image
              src="https://images.pexels.com/photos/7667731/pexels-photo-7667731.jpeg?auto=compress&cs=tinysrgb&w=800"
              h={200}
              w={400}
              alt="An image about drugs!"
            />
          </Card.Section>

          <Text fw={500} size="lg" mt="md">
            Drug Abuse and Awareness!
          </Text>

          <Text mt="xs" size="sm">
            Drug abuse, the misuse of illegal or prescription drugs, is a
            serious public health issue that can have devastating consequences
            for individuals, families, and communities.
          </Text>
        </Card>

        <Card shadow="sm" padding="xl" component="a" href="" target="">
          <Card.Section>
            <Image
              src="https://images.pexels.com/photos/2471301/pexels-photo-2471301.jpeg?auto=compress&cs=tinysrgb&w=800"
              h={200}
              w={400}
              alt="A lady seemingly mentally disturbed!"
            />
          </Card.Section>

          <Text fw={500} size="lg" mt="md">
            Mental Health Awareness
          </Text>

          <Text mt="xs" size="sm">
            Mental health is an integral part of overall well-being,
            encompassing emotional, psychological, and social factors that
            influence how we think, feel, and act. Mental health conditions,
            such as anxiety, depression
          </Text>
        </Card>
      </div>
    </MantineProvider>
  );
}
export default App;





// body {
//     font-family: 'Handjet', cursive;
//     font-family: 'Open Sans', sans-serif;
//     font-family: 'Roboto', sans-serif;
//     background-color: #004225;
// }
// .one {
//     max-width: auto;
//     margin: 0 auto;
//     padding: 100px;
//     background-color: brown;
//     overflow: hidden;
//     top: 0; 
//     position: fixed;
//     display:flex;
    

// }

// header {
//     color: greenyellow;
//     position: fixed;
//     margin: 0;
// }

// nav ul {
//     list-style-type: none;
//     display: flex;
// }
// .container {
//     padding: 18px;
//     margin-top: 400px;
//     width: 100%;
//     background-color: blueviolet;
//     display:flex;
//     color:blanchedalmond;
    
// }

// nav ul li {
//     margin-right: 20px;
// }

// nav a {
//     text-decoration: none;
//     color: yellowgreen;
//     font-weight: bold;
    
// }
// nav a:hover {
// color:blue;
// }
// span {
//     color: red;
// }
// .four {
//     background-color: #6C3428;
// }
// .four a {
//     text-align: center;
//     display:inline;
// }
