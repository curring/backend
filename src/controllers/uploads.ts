import multer from 'multer';
import path, { extname } from 'path';



export const upload = multer({
  storage: multer.diskStorage({
          destination: path.join(__dirname, '../uploads'),
          filename: (req, file, cb) => {
            const fileExtension = extname(file.originalname);
            const fileName = file.originalname.split(fileExtension)[0];
            cb(null, `${fileName}-${Date.now()}${fileExtension}`)
          }
        })
});