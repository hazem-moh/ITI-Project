const nodemailer = require("nodemailer");
module.exports = async function sendEmailService({
  to,
  subject,
  message,
  attachments = [],
} = {}) {
  // Ensure recipient is provided
  if (!to) {
    throw new Error("Recipient email address is required.");
  }

  // Nodemailer configuration
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amanyalsayed919@gmail.com",
      pass: `tnpjwacfovcumgmn`,
    },
  });

  try {
    const emailInfo = await transporter.sendMail({
      from: `"HOME SHOPPING 🛒"   "amanyalsayed919@gmail.com"`,
      to: to,
      subject: subject || "Hello",
      html: message || "",
      attachments,
    });

    console.log("Email sent successfully:", emailInfo);

    return emailInfo.accepted.length > 0;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
