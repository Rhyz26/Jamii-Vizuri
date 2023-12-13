import { MantineProvider } from "@mantine/core";
import { Card, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="mx-auto max-w-[80%] font-serif">
      <h1 className="text-center pb-2.5 pt-8 text-3xl">
        Jamii Vizuri Health Services
      </h1>

      <MantineProvider>
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

            <Text mt="xs" size="lg">
              At Jamii Vizuri Community Health, We provide the same high-quality
              health care as the area’s leading hospitals and medical centers
              because our volunteers come from the same settings. Patients can
              expect to develop an ongoing relationship with their medical
              workers as we work to ensure they have the support and information
              needed to get healthy and stay healthy.
            </Text>
          </Card>
        </div>

        <div className="flex pt-8 gap-2 pb-4">
          <div className="flex gap-2">
            <Link to="/sexual">
              <Card shadow="sm" padding="xl" component="a">
                <Card.Section>
                  <Image
                    src="https://images.pexels.com/photos/1722196/pexels-photo-1722196.jpeg?auto=compress&cs=tinysrgb&w=800"
                    w={300}
                    h={300}
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
            </Link>

            <Link to="/drug">
              <Card shadow="sm" padding="xl" component="a" href="" target="">
                <Card.Section>
                  <Image
                    src="https://images.pexels.com/photos/7667731/pexels-photo-7667731.jpeg?auto=compress&cs=tinysrgb&w=800"
                    h={400}
                    w={400}
                    alt="An image about drugs!"
                  />
                </Card.Section>

                <Text fw={500} size="lg" mt="md">
                  Drug Abuse and Awareness!
                </Text>

                <Text mt="xs" size="sm">
                  Drug abuse, the misuse of illegal or prescription drugs, is a
                  serious public health issue that can have devastating
                  consequences for individuals, families, and communities.
                </Text>
              </Card>
            </Link>

            <Link to="/mental">
              <Card shadow="sm" padding="xl" component="a" href="" target="">
                <Card.Section>
                  <Image
                    src="https://images.pexels.com/photos/2471301/pexels-photo-2471301.jpeg?auto=compress&cs=tinysrgb&w=800"
                    h={400}
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
                  influence how we think, feel, and act. Mental health
                  conditions, such as anxiety, depression
                </Text>
              </Card>
            </Link>
          </div>
        </div>
      </MantineProvider>
    </div>
  );
}
export default Services;
