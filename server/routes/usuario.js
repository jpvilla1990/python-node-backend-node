const express = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const _ = require('underscore');

const app = express();

const {verificaToken,verificaAdminRol} = require('../middlewares/autenticacion');



app.get('/', function(req, res) {

    res.send('Hello World')
})

app.get('/Karthik', function(req, res) {

    res.send('Hello Karthik, Hola amigo')
})

app.get('/Deutsche_Kurz', function(req, res) {

    res.send('The test is tomorrow!!')
})

app.get('/Claudia', function(req, res) {

    res.send('Me gustó la foto, te ves bonita att: Alguien')
})


app.get('/usuario', verificaToken,function(req, res) {

    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite = Number(limite);

    Usuario.find({estado:true},'nombre email role estado google ').
    skip(desde).
    limit(limite).
    exec((err,usuario) =>{
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }

        Usuario.count({},(err,conteo)=>{
            res.json({
                ok:true,
                usuario,
                cuantos: conteo
            })
        })


    })
})


app.post('/usuario',[verificaToken,verificaAdminRol], function(req, res) {

    let body = req.body;

    //console.log(body);

    let usuario = new Usuario({
        email: body.email,
        nombre: body.nombre,
        password: bcrypt.hashSync( body.password,10),
        role: body.role
    });

    //console.log(usuario);

    usuario.save((err, usuarioDB) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        });
    });




})

app.put('/usuario/:id',[verificaToken,verificaAdminRol], function(req, res) {

    let id = req.params.id;
    let body = _.pick(req.body,['nombre', 'email', 'img', 'role', 'estado']);

    Usuario.findByIdAndUpdate(id,body,{new:true , runValidators:true},(err,usuarioDB)=>{
        if (err){
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok:true,
            usuario:usuarioDB
        });
    });

    
})

app.delete('/usuario/:id',[verificaToken,verificaAdminRol], function(req, res) {

    let id = req.params.id;
    let body={estado:false};

    Usuario.findByIdAndUpdate(query,body,{new:true , runValidators:true},(err,usuarioDBBorrado)=>{
        if (err){
            return res.status(400).json({
                ok: false,
                err
            });
        }

if(!usuarioDBBorrado){
        return res.status(400).json({
            ok: false,
            err: {message: 'Usuario no encontrado'}
        });
}

        res.json({
            ok:true,
            usuario:usuarioDBBorrado
        })
    })


})


module.exports = app;