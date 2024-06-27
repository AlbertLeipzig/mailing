import { User } from "./model.js";
import nodemailer from "nodemailer";

export const addUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (e) {
    next(e);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (e) {
    next(e);
  }
};

// damit wollen wir eine Email einer/m User schicken
// welcher/n?
// req.params.id => 4567894asdfa6sdf6asdf45as6d5f4

export const sendEmailToUser = async (req, res, next) => {
  try {
    // find one user!
    const user = await User.findById(req.params.id);

    // falls es nicht gefunden wird
    if (!user) {
      res.sendStatus(404);
    }

    const {email, name} =  user

    await sendEmail({email, name})
      .then(() => res.status(200).json({ msg: "message was sent" }))
      .catch((e) => next(e));
  } catch (e) {
    next(e);
  }
};

/* 
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);

*/

export const sendEmail = async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
};

/* export const updateUserPassword = async (req, res, next) => {
  try {
    //const user = await User....;
    res.json(201).json(user);
  } catch (e) {
    next(e);
  }
}; */
