const express = require('express');
const path = require('path');
const configViewEngine = (app) => {
    //config template engine
    // console.log(">>> check __dirname: ", path.join('./src','views'));
    app.set('views', path.join('./src','views'))
    app.set('view engine', 'ejs')

    //config static files: image/css/js
    app.use(express.static(path.join('./src','public')))

}

module.exports = configViewEngine;