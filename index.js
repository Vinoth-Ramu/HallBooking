const express = require("express");
const app = express();
const mongo = require('./shared/connect')
const roomDetailsRouter = require('./routes/roomDetails')
const customerDetailsRouter = require('./routes/customerDetails')

app.use(express.json());
mongo.connect();

app.use('/roomDetails', roomDetailsRouter )
app.use('/customerDetails', customerDetailsRouter )




app.listen(3000);