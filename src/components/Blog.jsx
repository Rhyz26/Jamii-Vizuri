import { Card, Image, Text } from "@mantine/core";

import { MantineProvider } from "@mantine/core";

function Blog() {
  return (
    <MantineProvider>
      <h1 className="text-3xl font-bold pb-8 pt-8 text-center">Blog</h1>
      <div className="  text-2xl pb-4 text-center font-bold">
        <h1>
          The Jamii Vizuri Blog features seasonal tips, expert advice, health
          news, and more.
        </h1>
      </div>

      <h1 className="text-center text-xl font-bold pt-4">
        SEXUAL AND REPRODUCTIVE HEALTH
      </h1>
      <div className="">
        {/* first three set of cards   */}
        <div className="flex ml-4 gap-4 pb-6 mr-4 space-x-1.5 pb-8 pt-8">
          {" "}
          <div className="">
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href=""
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1573208957999-4f1377160316?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2V4dWFsJTIwcmVwcm9kdWN0aXZlJTIwaGVhbHRofGVufDB8fDB8fHww"
                  w={300}
                  h={200}
                  alt="An image showing an HIV test tube!"
                />
              </Card.Section>

              <Text fw={500} size="lg" mt="md">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt="xs" c="dimmed" size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
          </div>
          <div className="">
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href=""
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://media.istockphoto.com/id/1656563089/photo/blood-sampling-tube.jpg?s=612x612&w=0&k=20&c=nVG2otnxeI5yUtczcEYFjJVRzAsiTR0fQvj74DLF5l4="
                  w={300}
                  alt="HIV test!"
                />
              </Card.Section>

              <Text fw={500} size="lg" mt="md">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt="xs" c="dimmed" size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
          </div>
          <div className="">
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href=""
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.pexels.com/photos/1765353/pexels-photo-1765353.jpeg?auto=compress&cs=tinysrgb&w=400"
                  w={150}
                  h={200}
                  alt="A pregnant lady!"
                />
              </Card.Section>

              <Text fw={500} size="lg" mt="md">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt="xs" c="dimmed" size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
          </div>
        </div>
        {/* // first three bunches */}

        <h1 className="text-center text-xl pb-4 font-bold">
          MENTAL HEALTH AND AWARENESS
        </h1>

        {/* Second  set of three cards */}
        <div className="flex ml-4 gap-4 pb-6 mr-4 space-x-1.5 pb-8">
          <div className="">
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href=""
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://media.istockphoto.com/id/1349214017/photo/rear-view-of-son-and-elderly-father-sitting-together-at-home-son-caring-for-his-father.jpg?s=612x612&w=0&k=20&c=KsobXV0k_z8tseFG6xiyjrtngAgwgvSs_AlJacRMBoU="
                  w={300}
                  alt="An image showing a son caring for his Father!"
                />
              </Card.Section>

              <Text fw={500} size="lg" mt="md">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt="xs" c="dimmed" size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
          </div>

          <div className="">
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href=""
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  w={300}
                  alt="A lady running!"
                />
              </Card.Section>

              <Text fw={500} size="lg" mt="md">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt="xs" c="dimmed" size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
          </div>

          <div className="">
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href=""
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=400"
                  w={150}
                  h={200}
                  alt="A lady meditating!"
                />
              </Card.Section>

              <Text fw={500} size="lg" mt="md">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt="xs" c="dimmed" size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
          </div>
        </div>
        {/* //second three */}

        <h1 className="text-center font-bold pb-8 text-xl">
          PRIMARY HEALTH CARE
        </h1>

        {/* //third set of three*/}
        <div className="flex ml-4 gap-4 pb-6 mr-4 space-x-1.5 pb-8">
          <div className="">
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href=""
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  w={300}
                  alt="Medical tools!"
                />
              </Card.Section>

              <Text fw={500} size="lg" mt="md">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt="xs" c="dimmed" size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
          </div>

          <div className="">
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href=""
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.pexels.com/photos/5726812/pexels-photo-5726812.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  w={300}
                  h={200}
                  alt="An image showing testing of diseases!"
                />
              </Card.Section>

              <Text fw={500} size="lg" mt="md">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt="xs" c="dimmed" size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
          </div>

          <div className="">
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href=""
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.pexels.com/photos/8830485/pexels-photo-8830485.jpeg?auto=compress&cs=tinysrgb&w=400"
                  w={300}
                  h={200}
                  alt="A photo of immunisation!"
                />
              </Card.Section>

              <Text fw={500} size="lg" mt="md">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt="xs" c="dimmed" size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
          </div>
        </div>
        {/* matching with the THIRD  */}

        {/* //fourth set of three */}
        <h1 className="text-center font-bold text-xl">
          DRUG ABUSE AND AWARENESS
        </h1>
        <div className="flex ml-4 gap-4 pb-6 mr-4 space-x-1.5 pb-8 pt-8">
          {" "}
          <div className="">
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href=""
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.pexels.com/photos/4541337/pexels-photo-4541337.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  w={300}
                  alt="an image of drugs!"
                />
              </Card.Section>

              <Text fw={500} size="lg" mt="md">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt="xs" c="dimmed" size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
          </div>
          <div className="">
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href=""
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.pexels.com/photos/5699780/pexels-photo-5699780.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  w={300}
                  alt="A man and woman fighting!"
                />
              </Card.Section>

              <Text fw={500} size="lg" mt="md">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt="xs" c="dimmed" size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
          </div>
          <div className="">
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href=""
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.pexels.com/photos/8551044/pexels-photo-8551044.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  w={300}
                  alt="ladies smoking!"
                />
              </Card.Section>

              <Text fw={500} size="lg" mt="md">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt="xs" c="dimmed" size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
          </div>
        </div>

        {/* //fifth set of three cards*/}
        <h1 className="text-center font-bold text-xl">MEDICATION</h1>
        <div className="flex ml-4 gap-4 pb-6 mr-4 space-x-1.5 pb-8 pt-8">
          {" "}
          <div className="">
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href=""
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.pexels.com/photos/3873209/pexels-photo-3873209.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  w={300}
                  alt="An image of a person swallowing tablets!"
                />
              </Card.Section>

              <Text fw={500} size="lg" mt="md">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt="xs" c="dimmed" size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
          </div>
          <div className="">
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href=""
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.pexels.com/photos/3936421/pexels-photo-3936421.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  w={300}
                  alt="An image indicating COVID19!"
                />
              </Card.Section>

              <Text fw={500} size="lg" mt="md">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt="xs" c="dimmed" size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
          </div>
          <div className="">
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href=""
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.pexels.com/photos/11181870/pexels-photo-11181870.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  w={300}
                  alt="An image showing treatment of high blood pressure!"
                />
              </Card.Section>

              <Text fw={500} size="lg" mt="md">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt="xs" c="dimmed" size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}
export default Blog;
