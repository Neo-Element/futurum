const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const {google} = require("googleapis");

router.post("/", (req, res) =>{
    console.log("REQBODY", req.body)
    const {userName, email} = req.body;
    const contenHtml =`
                <div>
                <h1>Futurum</h1>
                <h3>Hola ${userName}</h3>
                <h3>Gracias por tu compra</h3>
                </div>
                `
                

  const CLIENT_ID = "1086497600204-re7os4nfsf2is6vvp7biq9tmq7t83lim.apps.googleusercontent.com";
  const CLIENT_SECRET = "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";
  const REDIRECT_URI = "https://developers.google.com/oauthplayground";
  const REFRESH_TOKEN ="1//041a7k6I2kmzeCgYIARAAGAQSNwF-L9IrN0lJX8rxhq4WOQqJMdoj_Kzt_mF66qMn56EZdftvlUyOTGnT9TMPPdAg4LmCWSi3pS0";

  //INSTANCIAMOS GOOGLE
  const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET, REDIRECT_URI)

  //Refresca el token
  oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

  async function sendMail(){
      try{
          const accessToken = await oAuth2Client.getAccessToken();
          const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                type: "OAuth2",
                user: "futurump5@gmail.com",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            },
          });
          const mailOptions ={
              from: "Futurum <futurump5@gmail.com>",
              to: "virginiaclancy@gmail.com",
              subjet: "Shop Resume",
              html: contenHtml,
          };

          const result = await transporter.sendMail(mailOptions);
          return result; 
      } catch(err) {
          console.log(err)
      }
  }
  sendMail()
  .then((result) => res.status(200).send(result))
  .catch((error) => console.log(error.message))
})

module.exports = router;