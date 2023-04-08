const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = require('mongoose');
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new Schema({
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
      default:null
   },
   favorites: [{
      type: Schema.Types.ObjectId,
      ref: 'Eventos'
   }],
   confirmEvent: {
      type: Array,
      default: []
   }
});

// userSchema.pre('save', async function(next){
//    const user = this;
//    if(!user.isModified('password')) return next

//    try {
//       const salt = await bcrypt.genSalt(10)
//       const hash = await bcrypt.hash(user.password, salt) 

//       user.password = hash;
//       next();

//    } catch (error) {
//       console.log(error);
//       throw new Error('Error al hashear la contraseña');
//    }
// })
userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		nombre: Joi.string().required().label("nombre"),
		email: Joi.string().email().required().label("email"),
		password: passwordComplexity().required().label("password"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };
