const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

router.post("/", (req, res) => {
  const { userName, email } = req.body;
  const contenHtml = `<head>
  <title></title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <style type="text/css">
  /* CLIENT-SPECIFIC STYLES */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; }
  
  /* RESET STYLES */
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
  }
  
  /* MEDIA QUERIES */
  @media screen and (max-width: 480px) {
      .mobile-hide {
          display: none !important;
      }
      .mobile-center {
          text-align: center !important;
      }
  }
  
  /* ANDROID CENTER FIX */
  div[style*="margin: 16px 0;"] { margin: 0 !important; }
  </style>
  </head>
  <body style="margin: 0 !important; padding: 0 !important; background-color: #eeeeee;" bgcolor="#eeeeee">
  
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Open Sans, Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dolor aliquid omnis consequatur est deserunt, odio neque blanditiis aspernatur, mollitia ipsa distinctio, culpa fuga obcaecati!
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
          <td align="center" style="background-color: #eeeeee;" bgcolor="#eeeeee">
          <!--[if (gte mso 9)|(IE)]>
          <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
          <tr>
          <td align="center" valign="top" width="600">
          <![endif]-->
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
              <tr>
                  <td align="center" valign="top" style="font-size:0; padding: 35px;" bgcolor="#40916C">
                  <!--[if (gte mso 9)|(IE)]>
                  <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                  <tr>
                  <td align="left" valign="top" width="300">
                  <![endif]-->
                  <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;">
                      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">
                          <tr>
                              <td align="left" valign="top" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; line-height: 48px;" class="mobile-center">
                                  <h1 style="font-size: 60px; font-weight: 800; margin: 0; color: #000;">Futurum</h1>
                              </td>
                          </tr>
                      </table>
                  </div>
                  <!--[if (gte mso 9)|(IE)]>
                  </td>
                  <td align="right" width="300">
                  <![endif]-->
                 
                  <!--[if (gte mso 9)|(IE)]>
                  </td>
                  </tr>
                  </table>
                  <![endif]-->
                  </td>
              </tr>
              <tr>
                  <td align="center" style="padding: 35px 35px 20px 35px; background-color: #ffffff;" bgcolor="#ffffff">
                  <!--[if (gte mso 9)|(IE)]>
                  <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                  <tr>
                  <td align="center" valign="top" width="600">
                  <![endif]-->
                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                      <tr>
                          <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;">
                               
                              <h2 style="font-size: 30px; font-weight: 800; line-height: 36px; color: #333333; margin: 0;">
                                  ${userName} Thank You For Your Order!
                              </h2>
                          </td>
                      </tr>
                      <tr>
                          
                      </tr>
                      <tr>
                          <td align="left" style="padding-top: 20px;">
                              <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                  <tr>
                                      <td width="75%" align="left" bgcolor="#40916C" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                      </td>
                                      <td width="25%" align="left" bgcolor="#40916C" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                  </table>
                  <!--[if (gte mso 9)|(IE)]>
                  </td>
                  </tr>
                  </table>
                  <![endif]-->
                  </td>
              </tr>
               
              
              <tr>
                  <td align="center" style="padding: 35px; background-color: #ffffff;" bgcolor="#ffffff">
                  <!--[if (gte mso 9)|(IE)]>
                  <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                  <tr>
                  <td align="center" valign="top" width="600">
                  <![endif]-->
                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                      <tr>
                          <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px; padding: 5px 0 10px 0;">
                              <p style="font-size: 14px; font-weight: 800; line-height: 18px; color: #333333;">
                                 Justo José de Urquiza 2063, X5001FTH Córdoba
                              </p>
                          </td>
                      </tr>
                      <tr>
                          <td align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px;">
                              <p style="font-size: 14px; font-weight: 400; line-height: 20px; color: #777777;">
                                  If you didn't create an account using this email address, please ignore this email or <a href="http://litmus.com" target="_blank" style="color: #777777;">unsusbscribe</a>.
                              </p>
                          </td>
                      </tr>
                  </table>
                  <!--[if (gte mso 9)|(IE)]>
                  </td>
                  </tr>
                  </table>
                  <![endif]-->
                  </td>
              </tr>
          </table>
          <!--[if (gte mso 9)|(IE)]>
          </td>
          </tr>
          </table>
          <![endif]-->
          </td>
      </tr>
  </table>
      <!-- LITMUS ATTRIBUTION -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
              <td bgcolor="#ffffff" align="center">
                  <!--[if (gte mso 9)|(IE)]>
  <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
  <tr>
  <td align="center" valign="top" width="600">
  <![endif]-->
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >
                      <tr>
                          <td bgcolor="#ffffff" align="center" style="padding: 30px 30px 30px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;" >
                              <p style="margin: 0;">This email was built and tested with Litmus. <a href="https://litmus.com?utm_campaign=litmus_templates&utm_source=litmus_community&utm_medium=templates" style="color: #5db3ec;">What's Litmus?</a></p>
                          </td>
                      </tr>
                  </table>
                  <!--[if (gte mso 9)|(IE)]>
  </td>
  </tr>
  </table>
  <![endif]-->
              </td>
          </tr>
      </table>
      <!-- END LITMUS ATTRIBUTION -->
  </body>`;

  const CLIENT_ID =
    "1086497600204-re7os4nfsf2is6vvp7biq9tmq7t83lim.apps.googleusercontent.com";
  const CLIENT_SECRET = "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";
  const REDIRECT_URI = "https://developers.google.com/oauthplayground";
  const REFRESH_TOKEN =
    "1//041a7k6I2kmzeCgYIARAAGAQSNwF-L9IrN0lJX8rxhq4WOQqJMdoj_Kzt_mF66qMn56EZdftvlUyOTGnT9TMPPdAg4LmCWSi3pS0";

  //INSTANCIAMOS GOOGLE
  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );

  //Refresca el token
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  async function sendMail() {
    try {
      const accessToken = await oAuth2Client.getAccessToken();
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "futurump5@gmail.com",
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });
      const mailOptions = {
        from: "Futurum <futurump5@gmail.com>",
        to: `${email}`,
        subjet: "Shop Resume",
        html: contenHtml,
      };

      const result = await transporter.sendMail(mailOptions);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  sendMail()
    .then((result) => res.status(200).send(result))
    .catch((error) => console.log(error.message));
});

module.exports = router;
