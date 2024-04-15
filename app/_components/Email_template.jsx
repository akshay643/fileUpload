import * as React from "react";
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
export const EmailTemplate = ({ data }) => {
  console.log("dataratata", data);
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                // src={`${baseUrl}/static/vercel-logo.png`}
                width="40"
                height="37"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Join <strong>Me</strong> on <strong>Vercel</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>{data.userName}</strong> (
              <Link
                href={`mailto:${data.userEmail}`}
                className="text-blue-600 no-underline"
              >
                {data.userEmail}
              </Link>
              ) has shared file with you to the
            </Text>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={data.shortUrl}
              >
                View the file
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              or copy and paste this URL into your browser:{" "}
              <Link href={data.shortUrl} className="text-blue-600 no-underline">
                {data.shortUrl}
              </Link>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            {/* <Text className="text-[#666666] text-[12px] leading-[24px]">
            This invitation was intended for{" "}
            <span className="text-black">{username}</span>. This invite was sent
            from <span className="text-black">{inviteFromIp}</span> located in{" "}
            <span className="text-black">{inviteFromLocation}</span>. If you
            were not expecting this invitation, you can ignore this email. If
            you are concerned about your account's safety, please reply to this
            email to get in touch with us.
          </Text> */}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
