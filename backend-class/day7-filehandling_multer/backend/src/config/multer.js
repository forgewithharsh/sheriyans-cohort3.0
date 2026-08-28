const multer = require("multer");

// DiskStorage for local
const storageForLocal = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// MemoryStorage for server
const storageForServer = multer.memoryStorage()

const upload = multer({ storageForServer });

module.exports = upload;
