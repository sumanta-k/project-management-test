import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: { name: "taskForce", link: "https://taskForceLink.com" },
  });

  // generate email content's from in plain text and html
  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);
  const emailHtml = mailGenerator.generate(options.mailgenContent);

  // create a tranporter by using nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.envMAILTRAP_SMTP_PORT,
    auth: { user: MAILTRAP_SMTP_USERNAME, pass: MAILTRAP_SMTP_PASSWORD },
  });

  // Now send email
  const email = {
    from: "mail.taskForce@example.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mail);
  } catch (err) {
    console.error(
      "email service failed silently. This might have happened for the configuration, make sure you have right mailtrap credentials in the .env file",
      err
    );
  }
};

const emailVerificationMailgenContent = function (
  username,
  emailVerificationURL
) {
  return {
    body: {
      name: username,
      intro: "Verify your account",
      action: {
        instructions: "To verify your account, click on the button",
        button: {
          color: "#22BC66",
          text: "Confirm your account",
          link: emailVerificationURL,
        },
      },
      outro: "Need help or have questions Just reply on this email",
    },
  };
};

const forgotPasswordMailgenContent = (username, passwordResetURL) => {
  return {
    body: {
      name: username,
      intro: "reset your password",
      action: {
        instructions: "to reset your password , click on the button",
        button: {
          color: "#fff888",
          text: "reset password",
          link: passwordResetURL,
        },
      },
      outro:
        "If you did not request a password reset, no further action is required on your part.",
    },
  };
};

export {
  emailVerificationMailgenContent,
  forgotPasswordMailgenContent,
  sendEmail,
};
