import { Router } from "express";
import { upload } from "../../controllers/uploads";


const router = Router();

router.post('/', upload.single('img'), (req, res) => {
  res.sendStatus(200)
});

export default router;