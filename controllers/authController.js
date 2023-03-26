const Users = require('../models/Users')
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

// (Opcional)
const home = (req, res) => {
   res.status(200).send('Bienvenido/a al sitio de eventos de la Universidad Valle del Momboy')
}

// Valida el usuario por email que sea unico y lo guarda en la BD
const register = async (req, res) => {
   const errors = validationResult(req)
   if(!errors.isEmpty()) {
      const validateErrors = errors.array();
      return res.status(404).json({messageError: validateErrors})
   }
   const { email, password, rol } = req.body;
   try {
      let user = await Users.findOne({ email });
      // console.log(user);
      if (user) throw new Error('Ya existe este usuario');
      
      user = new Users({email, password, rol});
      // console.log(user);
      await user.save();

      const token = jwt.sign({id: user._id}, process.env.SECRETTK, {
         expiresIn: '5m'
      })

      return res.status(200).json({verificado: true, token});

   } catch (error) {
      // console.log(error.message);
      return res.status(404).json({messageError: error.message});
   }
}

// Valida que el email existe y que la contraseña sea correcta
const login = async (req, res) => {
   const errors = validationResult(req)
   if(!errors.isEmpty()) {
      const validateErrors = errors.array();
      return res.status(404).json({messageError: validateErrors})
   }
   const { email, password } = req.body;
   try {
      let user = await Users.findOne({email});
      // console.log('Aqui estoy')
      if (!user) throw new Error('No existe este email');

      if(!(await user.comparePassword(password))) throw new Error('La contraseña no es correcta');
      
      const token = jwt.sign({id: user._id}, process.env.SECRETTK, {
         expiresIn: '5m'
      })

      return res.status(200).json({verificado: true, token});
   } catch (error) {
      return res.status(404).json({messageError: error.message});
   }
}

// Cierra la session
const logout = (req, res) => {
   const verificado = false;
   res.status(200).json({verificado})
}

module.exports = {
   home,
   login,
   register,
   logout
};