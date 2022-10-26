import { Router } from "express";
import { getAll, getById, create, update, deleteById } from "../../controllers/projects";

const router = Router();

router.get('/', getAll);

router.get('/:_id', getById);

router.post('/', create);

router.patch('/:_id', update);

router.delete('/:_id', deleteById);

export default router;