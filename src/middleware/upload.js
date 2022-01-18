const path = require("path")
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "upload")
    },
    filename: function (req, file, cb) {
      const unique = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
      cb(null,  unique)
    }
  })

const fileFilter = (req, file, callback) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpeg" || file.mimetype === "image/jpg") {
      callback(null, true);
    } else {
  
      callback(null, false);
    }
  };

const upload = multer({
    storage: storage,
    
    limits: {
      fileSize: 1024 * 1024 * 5,
    },
});

module.exports = upload;
