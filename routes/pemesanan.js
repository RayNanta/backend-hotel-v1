//import library
const express = require('express');
const bodyParser = require('body-parser');

//implementasi library
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//import model
const model = require('../models/index');
const pemesanan = model.pemesanan

//import auth
const auth = require("../auth")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "TryMe"

//get data
app.get("/", auth, (req,res) => {
    pemesanan.findAll()
        .then(result => {
            res.json({
                pemesanan : result
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

//post data
app.post("/", auth, (req,res) => {
    let data = {
        nomor_pemesanan : req.body.nomor_pemesanan,
        nama_pemesanan : req.body.nama_pemesanan,
        email_pemesanan : req.body.email_pemesanan,
        tgl_pemesanan : req.body.tgl_pemesanan,
        tgl_check_in : req.body.tgl_check_in,
        tgl_check_out : req.body.tgl_check_out,
        nama_tamu : req.body.nama_tamu,
        jumlah_kamar : req.body.jumlah_kamar,
        id_tipe_kamar : req.body.id_tipe_kamar,
        status_pemesanan : req.body.status_pemesanan,
        id_user : req.body.id_user
    }

    pemesanan.create(data)
        .then(result => {
            res.json({
                message: "data has been inserted"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

//edit data by id
app.put("/:id", auth, (req,res) => {
    let param = {
        id : req.params.id
    }
    let data = {
        nomor_pemesanan : req.body.nomor_pemesanan,
        nama_pemesanan : req.body.nama_pemesanan,
        email_pemesanan : req.body.email_pemesanan,
        tgl_pemesanan : req.body.tgl_pemesanan,
        tgl_check_in : req.body.tgl_check_in,
        tgl_check_out : req.body.tgl_check_out,
        nama_tamu : req.body.nama_tamu,
        jumlah_kamar : req.body.jumlah_kamar,
        id_tipe_kamar : req.body.id_tipe_kamar,
        status_pemesanan : req.body.status_pemesanan,
        id_user : req.body.id_user
    }
    pemesanan.update(data, {where: param})
        .then(result => {
            res.json({
                message: "data has been updated"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

//delete data by id
app.delete("/:id", auth, (req,res) => {
    let param = {
        id : req.params.id
    }
    pemesanan.destroy({where: param})
        .then(result => {
            res.json({
                message: "data has been deleted"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

module.exports = app