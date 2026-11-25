import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.resolve(__dirname,'../../uploads'));
    },

   filename: (req, file, cb) => {
   const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;

    cb(null, uniqueName);
}
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = [
        "video/mp4",
        "video/x-msvideo",
        "video/quicktime",
        "video/x-matroska"
    ];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Only MP4, AVI, MOV and MKV videos are allowed."));
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 500 * 1024 * 1024
    }
});

export default upload;