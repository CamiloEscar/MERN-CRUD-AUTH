//que es lo que hace este archivo?
//es el que se encarga de la conexion con la base de datos y de la creacion de las tablas



import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model('User', userSchema)

