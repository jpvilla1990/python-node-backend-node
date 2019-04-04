const mongoose = require('mongoose');
const UniqueValidator = require('mongoose-unique-validator');


let Schema = mongoose.Schema;

let rolesValidos = {
    values:['ADMIN_ROLE','USER_ROLE'],
    message: '{VALUE} no es un rol valido'
}


let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        required: [true, 'El correo es necesario'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

});

usuarioSchema.plugin(UniqueValidator,{ message:'{PATH} debe de ser unico' });


module.exports = mongoose.model('Usuario', usuarioSchema);