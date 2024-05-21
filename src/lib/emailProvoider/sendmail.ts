'use server'

import MailService from "@sendgrid/mail";

if (!process.env.SENDGRID_API_KEY) {
    console.group("⚠️ missing from .env");
    console.error("It's not mandatory but it's required to send emails.");
    console.error("If you don't need it, remove the code from /libs/emailProvider/sendmail.js");
    console.groupEnd();
}
MailService.setApiKey(String(process.env.SENDGRID_API_KEY));
interface SendMailProps {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo: string;
}

/**
 * Sends an email using the provided parameters.
 *
 * @async
 * @param {string} to - The recipient's email address.
 * @param {string} subject - The subject of the email.
 * @param {string} body - The plain text content of the email.
 * @param {string} htmlBody - The HTML content of the email.
 * @param {string} replyTo - The email address to set as the "Reply-To" address.
 * @returns {Promise} A Promise that resolves when the email is sent.
 */

export const sendEmail = ({
  to,
  subject,
  text,
  html,
  replyTo,
}: SendMailProps) => {
  const data = {
    from: "",
    to: [to],
    subject,
    text,
    html,
    ...(replyTo && { "h:Reply-To": replyTo }),
  };
  return MailService.send(data);
};
