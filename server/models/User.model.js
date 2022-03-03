const { Schema, model } = require('mongoose')

const userSchema = new Schema(
{
    username: {
        type: String,
        required: [true, 'El nombre de usuario es obligatorio']
    },
    description: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
        minlength: [10, 'La descripción debe tener mínimo 10 carácteres']
    },
    email: {
        type: String,
        required: [true, 'El correo elctrónico es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    avatar: {
        type: String,
        required: [true, 'El avatar es obligatorio']
    },
    bithday: {
        type: Date
    },
    role: {
        type: String,
        enum: ['USER', 'PLANNER', 'ADMIN'],
        default: 'USER'
    }
},
{
    timestamps: true
})

const User = model('User', userSchema)

module.exports = User