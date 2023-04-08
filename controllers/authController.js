// const Admins = require('../models/Admins')
// const Users = require('../models/Users')
// const jwt = require('jsonwebtoken');

// // Valida el usuario por email que sea unico y lo guarda en la BD
// const registerAdmin = async (req, res) => {
//    try {
//       const { email, password, rol } = req.body;
//       let admin = await Admins.findOne({ email });
//       // console.log(admin);
//       if (admin) throw new Error('Ya existe este administrador');
      
//       admin = new Admins({email, password, rol});
//       // console.log(admin);
//       await admin.save();

//       return res.status(200).json({creado: true});

//    } catch (error) {
//       // console.log(error.message);
//       return res.status(404).json({messageError: error.message});
//    }
// }

// // Valida el usuario por email que sea unico y lo guarda en la BD
// const register = async (req, res) => {
//    try {
//       const { email, password, rol } = req.body;
//       let user = await Users.findOne({ email });
//       // console.log(user);
//       if (user) throw new Error('Ya existe este usuario');
      
//       user = new Users({email, password, rol});
//       // console.log(user);
//       await user.save();

//       const token = jwt.sign({id: user._id}, process.env.SECRETTK, {
//          expiresIn: '5m'
//       })

//       return res.status(200).json({verificado: true, token});

//    } catch (error) {
//       // console.log(error.message);
//       return res.status(404).json({messageError: error.message});
//    }
// }

// // Valida que el email existe y que la contraseña sea correcta
// const login = async (req, res) => {
//    const { email, password } = req.body;
//    try {
//       let user = await Users.findOne({email});
//       // console.log('Aqui estoy')
//       if (!user) throw new Error('No existe este email');

//       if(!(await user.comparePassword(password))) throw new Error('La contraseña no es correcta');
      
//       const token = jwt.sign({id: user._id}, process.env.SECRETTK, {
//          expiresIn: '5m'
//       })

//       return res.status(200).json({verificado: true, token});
//    } catch (error) {
//       return res.status(404).json({messageError: error.message});
//    }
// }

// // Cierra la session
// const logout = (req, res) => {
//    const verificado = false;
//    res.status(200).json({verificado})
// }

// module.exports = {
//    login,
//    registerAdmin,
//    register,
//    logout
// };