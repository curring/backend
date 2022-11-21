import { Router } from "express";
import { getAll, getById, create, update, deleteById } from "../../controllers/projects";
import { upload } from "../../utils/uploads";

const router = Router();

router.get('/', getAll);

router.get('/:_id', getById);

router.post('/', upload.array('img', 2), create);

router.patch('/:_id', update);

router.delete('/:_id', deleteById);

export default router;