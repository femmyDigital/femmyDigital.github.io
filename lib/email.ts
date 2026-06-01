import emailjs from "@emailjs/browser";

export const sendEmail = async (formData: {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      "service_ew0qd7b",
      "template_7l7hxjb",
      {
        subject: `New ${formData.projectType} Inquiry from ${formData.name}`,

        message: `
━━━━━━━━━━━━━━━━━━
NEW CONTACT INQUIRY
━━━━━━━━━━━━━━━━━━

👤 CLIENT DETAILS

Name:
${formData.name}

Email:
${formData.email}

Company:
${formData.company || "Not provided"}

Project Type:
${formData.projectType}

━━━━━━━━━━━━━━━━━━
PROJECT MESSAGE
━━━━━━━━━━━━━━━━━━

${formData.message}

━━━━━━━━━━━━━━━━━━
Submitted from your agency portfolio website.
━━━━━━━━━━━━━━━━━━
    `,
      },
      "m915RnNn4izBekJ1W",
    );

    console.log("SUCCESS!", response.status, response.text);

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    console.error("FAILED...", error);

    return {
      success: false,
      message: "Failed to send message.",
    };
  }
};
