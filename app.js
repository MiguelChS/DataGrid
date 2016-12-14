/**
 * Created by Miguel on 15/11/2016.
 */
'use strict';
require('babel-core/register')({
    presets: ['es2015', 'react']
});
var React = require("react");
var ReactDOMServer = require('react-dom/server');
var index = require("./Componentes/index.jsx");
var express = require("express");
var app = express();

app.use(express.static('Public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.get("/",function (req,res) {
    var html = ReactDOMServer.renderToString(React.createElement(index));
    res.render("index",{ReactDom:html});
});

app.listen(3000,()=>console.log("escuchando en el puerto 3000"));