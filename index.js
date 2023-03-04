//import
const express = require('express');
const cors = require('cors');

//implementasi
const app = express();
app.use(cors());

//endpoint user
const user = require('./routes/user')
app.use("/user", user)

//endpoint tipe kamar
const tipe_kamar = require('./routes/tipe_kamar')
app.use("/tipe_kamar", tipe_kamar)

//endpoint kamar
const kamar = require('./routes/kamar')
app.use("/kamar", kamar)

//endpoint pemesanan
const pemesanan = require('./routes/pemesanan')
app.use("/pemesanan", pemesanan)

//endpoint detail_pemesanan
const detail_pemesanan = require('./routes/detail_pemesanan')
app.use("/detail_pemesanan", detail_pemesanan)

//run server
app.listen(8080, () => {
    console.log('server run on port 8080')
})
