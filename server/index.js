import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../webpack.dev.config';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackMiddleware from 'webpack-dev-middleware';
import bodyParser from 'body-parser';
const app = express();
let compiler = webpack(webpackConfig);
import nodemailer from 'nodemailer';

function sendMail(sendObj) {
    let mailOptions, transporter;
    transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'wertyga18@gmail.com',
            pass: 'wertyga18stinger123'
        }
    });
    mailOptions = {
        from: sendObj.from,
        to: sendObj.to,
        subject: sendObj.subject,
        html: sendObj.message + ' : ' + sendObj.from
    };
    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            return console.log(err);
        }
        return console.log("Message sent: " + info.response);
    });
};

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    sendMail(req.body);
    res.status(200).json('success')
});


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});





app.listen(3000, () => console.log('Server run on 3000 port'));





