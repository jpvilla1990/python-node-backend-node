const express = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const app = express();
const middlewares = require('../middlewares/autenticacion');
const {googleReq} = require('./outputServices');



app.get('/sendData', async(req, res) =>{
    //let body =await googleReq().then(async(resp)=> {await console.log(resp)});
    //res.send('Hello World');
    if(req.query.address){
        let address = req.query.address;
        googleReq(address).then(function(body) {
            res.send(body);
        },
        function(err){ res.send(err);});
    }else{
        res.send('No hay address');
    }
    

    
    //res.send(body);
})

 /*

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

*/

module.exports = app;