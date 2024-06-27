import nodemailer from "nodemailer";
// Einstellungsobjekt
// Config Object

// 1.- Wir brauchen einen Konto bei X Email-Anbieter
// 2.- Der erlaubt uns als Sender, in dem wir einen Password bekommen (praktisch ein Connection String)
// 3.- Dieses neue Password ist oft NICHT unserer Password

const senderEmail = "testmail@mail.com";
const senderPassword = "1234";
const userEmail = "albert.clemente@digitalcareerinstitute.org";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: senderEmail,
    pass: senderPassword,
  },
});

// Werbung
// Password zurücksetzen
// Konto bestätigen
// ...

export const sendEmail = async ({email, name}) => {
  // send mail with defined transport object
  await transporter.sendMail({
    from: senderEmail, // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: `Hello ${name}!`, // plain text body
    html: "<b>Hello world?</b>", // html body
  });
};
