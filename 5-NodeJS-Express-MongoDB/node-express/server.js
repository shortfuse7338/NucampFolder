const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const campsiteRouter = require('./route/campsiteRouter');
const promotionRouter = require('./route/promotionRouter');
const partnerRouter = require('./route/partnerRouter');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/campsites', campsiteRouter);
app.use('/promotions', promotionRouter);
app.use('/partners', partnerRouter);

app.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}`);
});