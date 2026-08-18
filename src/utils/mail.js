import Mailgen from "mailgen";
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

export { emailVerificationMailgenContent, forgotPasswordMailgenContent };
