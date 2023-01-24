const nodemailer = require("nodemailer");

try {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "amit.shah@thewitslab.com",
            pass: "xewhnzjempcqaola",
        },
    });
    const template = ``;
    transporter
        .sendMail({
            from: '"Amit" <amit.shah@thewitslab.com>', // sender address
            to: "ps257649@gmail.com, jalpa.subedi@thewitslab.com,abhijeets.rathor@thewitslab.com,         ", // list of receivers
            subject: "Final Draft", // Subject line
            text: "The WIL Insider (September Issue)", // plain text body
            html: template,
        })
        .then((info) => {
            console.log({ info });
        })
        .catch(console.error);

    console.log("email sent sucessfully");
} catch (error) {
    console.log(error, "email not sent");
}