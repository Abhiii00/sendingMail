const nodemailer = require("nodemailer");


exports.sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    // connecting to the smpt server

    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: 'kristy.stark@ethereal.email',
            pass: 'bdyXYvrMqTBUBp8YqP'
        },
    })

     // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Abhay" <abhaysingh958400@gmail.com>', // sender address
    to: "abhaythakur79753@gmail.com", // list of receivers
    subject: "sending mail", // Subject line
    text: "dskljfklsdjfkl kdjklsdj dsfjls lksdjf lksdjf sddfjslf", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.json(info)

}







