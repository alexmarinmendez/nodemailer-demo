const nodemailer = require("nodemailer");

const signup = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });

    let message = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "alexmarinmendez@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      };

    transporter.sendMail(message)
      .then(info => {
        return res.status(201).json({ 
            msg: "you should receive an email",
            info: info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        })
      })
      .catch(err => res.status(500).json({ err }))

}

const getbill = (req, res) => {
    res.status(201).json("getbill successfully...")
}

module.exports = {
    signup,
    getbill
}