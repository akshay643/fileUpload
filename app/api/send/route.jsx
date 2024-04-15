import { EmailTemplate } from "../../_components/Email_template";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API);
console.log("Reset", resend);

export async function POST(req, resp) {
  const reqData = await req.json();

  console.log(reqData.userName);
  try {
    const data = await resend.emails.send({
      from: "akshaythakur@resend.dev",
      to: reqData.sendEmailTo,
      subject: `File Shared by ${reqData?.userName}`,
      react: EmailTemplate({ data: reqData }),
    });

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}
