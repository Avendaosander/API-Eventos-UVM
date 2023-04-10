const Users = require('../models/Users')
const jwt = require('jsonwebtoken');

// Valida el usuario por email que sea unico y lo guarda en la BD
const registerAdmin = async (req, res) => {
   try {
      const { username, email, password, rol } = req.body;
      let admin = await Users.findOne({ $or:[ {username}, {email} ] });
      // console.log(admin);
      if (admin) {
         if (admin.username === username) throw new Error('Este nombre de usuario ya esta en uso');
         if (admin.email === email) throw new Error('Este correo ya esta en uso');
      }
      if (rol !== 'Admin') throw new Error('Rol invalido');
      
      admin = new Users({username, email, password, rol});
      // console.log(admin);
      await admin.save();

      return res.status(200).json({creado: true});

   } catch (error) {
      // console.log(error.message);
      return res.status(404).json({messageError: error.message});
   }
}

// Valida el usuario por email que sea unico y lo guarda en la BD
const register = async (req, res) => {
   try {
      const { username, email, password } = req.body;
      let user = await Users.findOne({ $or:[ {username}, {email} ] });
      // console.log(user);
      if (user) {
         if (user.username === username) throw new Error('Este nombre de usuario ya esta en uso');
         if (user.email === email) throw new Error('Este correo ya esta en uso');
      }
      
      user = new Users({username, email, password});
      // console.log(user);
      await user.save();

      const token = jwt.sign({id: user._id}, process.env.SECRETTK, {
         expiresIn: '30m'
      })

      let img = user.imgPerfil ? user.imgPerfil.secure_url : null

      return res.status(200).json({
         token,
         user: {
            id: user._id,
            imgPerfil: img,
            rol: user.rol
         }
      });

   } catch (error) {
      console.log(error.message);
      return res.status(404).json({messageError: error.message});
   }
}

// Valida que el email existe y que la contraseña sea correcta
const login = async (req, res) => {
   const { email, password } = req.body;
   try {
      let user = await Users.findOne({email});
      // console.log('Aqui estoy')
      if (!user) throw new Error('No existe este email');

      if(!(await user.comparePassword(password))) throw new Error('La contraseña no es correcta');
      
      const token = jwt.sign({id: user._id}, process.env.SECRETTK, {
         expiresIn: '30m'
      })

      let img = user.imgPerfil ? user.imgPerfil.secure_url : null
      
      return res.status(200).json({
         token,
         user: {
            id: user._id,
            imgPerfil: img,
            favorites: user.favorites,
            rol: user.rol
         }
      });
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
   login,
   registerAdmin,
   register,
   logout
};