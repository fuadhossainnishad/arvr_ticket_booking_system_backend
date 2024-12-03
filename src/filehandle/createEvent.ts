import multer from "multer";
import { uploadsDir } from "./uploadsDir";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir); 
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})

const upload = multer({ storage });
export default upload