let express = require('express');
let controll = express()

const controller = {
    index: (req, res) => {
        return res.render('index.ejs');
    },
    login: (req, res) => {
        return res.render('login.ejs');
    },
    register: (req, res) => {
        return res.render('register.ejs');
    }

    }


    module.exports = controller;