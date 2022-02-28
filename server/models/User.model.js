const { Schema, model } = require("mongoose")

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
    image: {
        type: String,
        required: [true, 'La imagen es obligatoria'],
    }
},
{
    timestamps: true
})

const User = model("User", userSchema)

module.exports = User