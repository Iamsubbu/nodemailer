console.log("hooooooo");
var express = require('express');
var promise = require('bluebird');
var bodyparser = require('body-parser');
var path = require('path');
var nodemailer = require('nodemailer');




var options = {
    promiseLib: promise,
    query(e) {
        console.log('QUERY:', e.query);
    }
};




var pgp = require('pg-promise')(options);
var app = new express();




var connectionString = 'postgres://postgres:surendra@localhost:5432/subbu';
var db = pgp(connectionString);




app.use(express.static(path.resolve(__dirname, "public")));
app.use(bodyparser.json({
    limit: '10mb',
    extended: true
}));
app.use(bodyparser.urlencoded({
    limit: '6mb',
    extended: true
}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});






app.post('/post', (req, res, next) => {
    console.log(req.body);
    mailer(req.body.mailid,req.body.subi,req.body.tex);
    // sub(req.body.sub)
})




function mailer(mailids,subi,tex) {
    console.log(mailids,subi,tex);


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'subramanyamkancharla@gmail.com',
            pass: 'ssurendra@123'
        }
    });


    var mailOptions = {
        from: 'subramanyamkancharla@gmail.com',
        to: mailids,
        subject: subi,
        text: tex
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });


}
app.listen(3400, (err) => {
    if (err) {
        console.log('Unable to start server ...')
    }
    else {
        console.log('server Started at : ' + 'http://localhost:3400/')
    }
})