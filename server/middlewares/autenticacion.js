const jwt = require('jsonwebtoken');

// =====
// veriticar token
// =====

let verificaToken = (req, res, next) => {
    let token = req.get('token');
jwt.verify(token, process.env.SEED, (err,decode)=>{
    if(err){
        return res.status(401).json({
            ok:false,
            err: 'Token no valido'
        })
    }
    req.usuario = decode.usuario;
    next();
})
}

// ====
//  verifica rol de administrador
// ====

let verificaAdminRol = (req,res,next)=>{

    let usuario = req.usuario;
    let role = usuario.role;
    if(role!='ADMIN_ROLE'){
        return res.status(402).json({
            ok:false,
            err: 'El que tienes no es ADMIN_ROLE'
        })
    }
    else{
        next();
    }



}

    

module.exports = {
    verificaToken,
    verificaAdminRol
}