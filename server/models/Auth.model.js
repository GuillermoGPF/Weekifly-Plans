const { Schema, model } = require("mongoose")

const authSchema = new Schema(
{
    username: {
        type: String,
        required: [true, 'El nombre de usuario es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El correo elctrónico es obligatorio'],
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    avatar: {
        type: String,
        required: [true, 'El avatar es obligatorio'],
    },
    bithday: {
        type: Date
    }
},
{
    timestamps: true
})

const Auth = model("Auth", authSchema)

module.exports = Auth