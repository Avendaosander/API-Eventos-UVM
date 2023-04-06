const cloudinary = require('cloudinary').v2
require('dotenv').config();

cloudinary.config({
   cloud_name: process.env.CLOUDINARY_API_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
   secure: true
});

const options = {
   use_filename: true,
   unique_filename: false,
   overwrite: true,
   folder: 'Eventos UVM'
};

const uploadImage = async (imagePath) => {
   return await cloudinary.uploader.upload(imagePath, options);
}

const deleteImage = async (public_id) => {
   return await cloudinary.uploader.destroy(public_id);
}

module.exports = {
   uploadImage,
   deleteImage
};