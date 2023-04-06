const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = require('mongoose');

const adminSchema = new Schema({
   imgPerfil: { 
      type: String,
      default: null
   },
   nombre: { 
      type: String,
      default: null
   },
   apellido: { 
      type: String,
      default: null
   },
   edad: { 
      type: Number,
      default: null
   },
   biografia: { 
      type: String,
      default: null
   },
   telefono: { 
      type: String,
      default: null
   },
   email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true
   },
   rol: {
      type: String,
      required: true
   },
   favorites: [{
      type: Schema.Types.ObjectId,
      ref: 'Eventos'
   }]
});

adminSchema.pre('save', async function(next){
   const user = this;
   if(!user.isModified('password')) return next

   try {
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(user.password, salt) 

      user.password = hash;
      next();

   } catch (error) {
      console.log(error);
      throw new Error('Error al hashear la contraseña');
   }
})

adminSchema.methods.comparePassword = async function(confirmPassword){
   return await bcrypt.compare(confirmPassword, this.password)
}

const Admins = mongoose.model('Admins', adminSchema);
module.exports = Admins;