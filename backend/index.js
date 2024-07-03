require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const nodemailer = require('nodemailer');
const http = require('http');
const cors = require('cors');
const app = express();
const WebSocket = require('ws');

const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

// app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// const wss = new WebSocket.Server({ noServer: true });
// let connections = [];

// wss.on('connection', (ws) => {
//     console.log('New WebSocket connection');
//     connections.push(ws);

//     ws.on('close', () => {
//         console.log('WebSocket connection closed');
//         connections = connections.filter(conn => conn !== ws);
//     });

//     ws.on('error', (error) => {
//         console.error('WebSocket error:', error);
//     });
// });

// const notifyClients = async() => {
//     const totalStudentsQuery = 'SELECT COUNT(*) AS count FROM students';
//     const htmlStudentsQuery = "SELECT COUNT(*) AS count FROM students WHERE course = 'html and css'";
//     const jsStudentsQuery = "SELECT COUNT(*) AS count FROM students WHERE course = 'javascript'";
//     const reactStudentsQuery = "SELECT COUNT(*) AS count FROM students WHERE course = 'react'";

//     db.query(totalStudentsQuery, (err, totalResult) => {
//         if (err) throw err;
//         const totalStudents = totalResult[0].count;

//         db.query(htmlStudentsQuery, (err, htmlResult) => {
//             if (err) throw err;
//             const htmlStudents = htmlResult[0].count;

//             db.query(jsStudentsQuery, (err, jsResult) => {
//                 if (err) throw err;
//                 const jsStudents = jsResult[0].count;

//                 db.query(reactStudentsQuery, (err, reactResult) => {
//                     if (err) throw err;
//                     const reactStudents = reactResult[0].count;

//                     const data = {
//                         total: totalStudents,
//                         html: htmlStudents,
//                         js: jsStudents,
//                         react: reactStudents
//                     };

//                     connections.forEach(ws => {
//                         if (ws.readyState === WebSocket.OPEN) {
//                             ws.send(JSON.stringify(data));
//                         }
//                     });
//                 });
//             });
//         });
//     });
// };
// setInterval(async () => {
//     await notifyClients();
// }, 1000);


//Routes
app.get('/', (req, res) => {
    res.json('This is backend');
});

app.post('/register', async (req, res) => {
    const { fname, lname, email, phone, course, education } = req.body;

    try {
        const checkUserQuery = 'SELECT * FROM students WHERE email = ?';
        const template = `

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
        <!--[if gte mso 9]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="x-apple-disable-message-reformatting">
          <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
          <title></title>
          
            <style type="text/css">
              @media only screen and (min-width: 620px) {
          .u-row {
            width: 600px !important;
          }
          .u-row .u-col {
            vertical-align: top;
          }
        
          .u-row .u-col-100 {
            width: 600px !important;
          }
        
        }
        
        @media (max-width: 620px) {
          .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
          }
          .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
          }
          .u-row {
            width: 100% !important;
          }
          .u-col {
            width: 100% !important;
          }
          .u-col > div {
            margin: 0 auto;
          }
        }
        body {
          margin: 0;
          padding: 0;
        }
        
        table,
        tr,
        td {
          vertical-align: top;
          border-collapse: collapse;
        }
        
        p {
          margin: 0;
        }
        
        .ie-container table,
        .mso-container table {
          table-layout: fixed;
        }
        
        * {
          line-height: inherit;
        }
        
        a[x-apple-data-detectors='true'] {
          color: inherit !important;
          text-decoration: none !important;
        }
        
        table, td { color: #000000; } #u_body a { color: #cca250; text-decoration: none; } @media (max-width: 480px) { #u_content_image_4 .v-src-width { width: auto !important; } #u_content_image_4 .v-src-max-width { max-width: 57% !important; } #u_content_image_3 .v-container-padding-padding { padding: 46px 10px 10px !important; } #u_content_image_3 .v-src-width { width: auto !important; } #u_content_image_3 .v-src-max-width { max-width: 29% !important; } #u_content_heading_3 .v-container-padding-padding { padding: 10px 20px !important; } #u_content_heading_3 .v-font-size { font-size: 28px !important; } #u_content_text_3 .v-container-padding-padding { padding: 10px 22px 26px !important; } #u_content_heading_2 .v-container-padding-padding { padding: 22px 22px 10px !important; } #u_content_heading_2 .v-font-size { font-size: 24px !important; } }
            </style>
          
          
        
        <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css"><!--<![endif]-->
        
        </head>
        
        <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f9f9f9;color: #000000">
          <!--[if IE]><div class="ie-container"><![endif]-->
          <!--[if mso]><div class="mso-container"><![endif]-->
          <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f9f9f9;width:100%" cellpadding="0" cellspacing="0">
          <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->
            
          
          
        <div class="u-row-container" style="padding: 0px;background-color: transparent">
          <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #111114;">
            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #111114;"><![endif]-->
              
        <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
          <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
          <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
          
        <table id="u_content_image_4" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px;font-family:'Montserrat',sans-serif;" align="left">
                
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding-right: 0px;padding-left: 0px;" align="center">
              
              <img align="center" border="0" src="https://assets.unlayer.com/projects/240116/1719926447040-logo.png" alt="Logo" title="Logo" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 44%;max-width: 255.2px;" width="255.2" class="v-src-width v-src-max-width"/>
              
            </td>
          </tr>
        </table>
        
              </td>
            </tr>
          </tbody>
        </table>
        
          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
          </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
          </div>
          </div>
          
        
        
          
          
        <div class="u-row-container" style="padding: 0px;background-color: transparent">
          <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
              
        <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #fffefe;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
          <div style="background-color: #fffefe;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
          <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
          
        <table id="u_content_image_3" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:55px 10px 10px;font-family:'Montserrat',sans-serif;" align="left">
                
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding-right: 0px;padding-left: 0px;" align="center">
              
              <img align="center" border="0" src="https://cdn.templates.unlayer.com/assets/1637739231457-ccc.png" alt="Tick Icon" title="Tick Icon" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 14%;max-width: 81.2px;" width="81.2" class="v-src-width v-src-max-width"/>
              
            </td>
          </tr>
        </table>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table id="u_content_heading_3" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 55px;font-family:'Montserrat',sans-serif;" align="left">
                
          <!--[if mso]><table width="100%"><tr><td><![endif]-->
            <h1 class="v-font-size" style="margin: 0px; line-height: 160%; text-align: center; word-wrap: break-word; font-family: 'Montserrat',sans-serif; font-size: 33px; font-weight: 400;"><span><strong>Successfully Registered</strong></span></h1>
          <!--[if mso]></td></tr></table><![endif]-->
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table id="u_content_text_3" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 60px 50px;font-family:'Montserrat',sans-serif;" align="left">
                
          <div class="v-font-size" style="font-size: 14px; color: #444444; line-height: 170%; text-align: center; word-wrap: break-word;">
            <p style="font-size: 14px; line-height: 170%;"><span style="font-size: 16px; line-height: 27.2px;">Dear ${fname} Thank you for registering for 1 month online web development bootcamp with <span style='text-transform: uppercase' >${course}</span>. The class will start on <strong>JULY 8,</strong> stay tuned for more information.</span></p>
          </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
          </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
          </div>
          </div>
          
        
        
          
          
        <div class="u-row-container" style="padding: 0px;background-color: transparent">
          <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
              
        <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
          <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
          <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
          
        <table id="u_content_heading_2" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:40px 55px 10px;font-family:'Montserrat',sans-serif;" align="left">
                
          <!--[if mso]><table width="100%"><tr><td><![endif]-->
            <h1 class="v-font-size" style="margin: 0px; line-height: 160%; text-align: center; word-wrap: break-word; font-family: 'Montserrat',sans-serif; font-size: 26px; font-weight: 400;"><strong>Need anything else?</strong></h1>
          <!--[if mso]></td></tr></table><![endif]-->
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 60px 20px;font-family:'Montserrat',sans-serif;" align="left">
                
          <div class="v-font-size" style="font-size: 14px; color: #444444; line-height: 170%; text-align: center; word-wrap: break-word;">
            <p style="font-size: 14px; line-height: 170%;"><span style="font-size: 16px; line-height: 27.2px;">Please feel free to contact us!</span></p>
          </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 50px;font-family:'Montserrat',sans-serif;" align="left">
                
          <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
        <div align="center">
          <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://t.me/kayo_jr" style="height:47px; v-text-anchor:middle; width:172px;" arcsize="8.5%"  stroke="f" fillcolor="#91b8e0"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
            <a href="https://t.me/kayo_jr" target="_blank" class="v-button v-font-size" style="box-sizing: border-box;display: inline-block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #91b8e0; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 14px;">
              <span style="display:block;padding:14px 33px;line-height:120%;"><strong><span style="font-size: 16px; line-height: 19.2px;">Click Here →</span></strong></span>
            </a>
            <!--[if mso]></center></v:roundrect><![endif]-->
        </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
          </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
          </div>
          </div>
          
        
        
            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </td>
          </tr>
          </tbody>
          </table>
          <!--[if mso]></div><![endif]-->
          <!--[if IE]></div><![endif]-->
        </body>
        
        </html>
        
        
        `;

        db.query(checkUserQuery, [email], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Database error' });
            }

            if (result.length > 0) {
                return res.status(400).json({ message: 'Email already registered.' });
            } else {
                const newUserQuery = 'INSERT INTO students (fname, lname, email, phone, course, education) VALUES (?, ?, ?, ?, ?, ?)';
                db.query(newUserQuery, [fname, lname, email, phone, course, education], (err, result) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({ message: 'Database error' });
                    }

                    let mailDetails = {
                        from: '"Bytes Academy" <bytesacademy@hotmail.com>',
                        to: email,
                        subject: 'Thank You for Registration',
                        html: template
                    };
                    sendMail(mailDetails, res);
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
});


app.get('/fetchRegStudents', (req, res) => {
    const totalStudentsQuery = 'SELECT COUNT(*) AS count FROM students';
    const htmlStudentsQuery = "SELECT COUNT(*) AS count FROM students WHERE course = 'html and css'";
    const jsStudentsQuery = "SELECT COUNT(*) AS count FROM students WHERE course = 'javascript'";
    const reactStudentsQuery = "SELECT COUNT(*) AS count FROM students WHERE course = 'react'";

    db.query(totalStudentsQuery, (err, totalResult) => {
        if (err) {
            console.error('Error fetching total students:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        const totalStudents = totalResult[0].count;

        db.query(htmlStudentsQuery, (err, htmlResult) => {
            if (err) {
                console.error('Error fetching HTML students:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }
            const htmlStudents = htmlResult[0].count;

            db.query(jsStudentsQuery, (err, jsResult) => {
                if (err) {
                    console.error('Error fetching JavaScript students:', err);
                    return res.status(500).json({ error: 'Internal server error' });
                }
                const jsStudents = jsResult[0].count;

                db.query(reactStudentsQuery, (err, reactResult) => {
                    if (err) {
                        console.error('Error fetching React students:', err);
                        return res.status(500).json({ error: 'Internal server error' });
                    }
                    const reactStudents = reactResult[0].count;

                    res.json({
                        total: totalStudents,
                        html: htmlStudents,
                        js: jsStudents,
                        react: reactStudents
                    });
                });
            });
        });
    });
});




let mailTransporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

function sendMail(mailDetails, res) {
    mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json({ message: "Registered Successfully!" });
        }
    });

}

app.listen(5000, () => {
    console.log('Connected to Backend');
});