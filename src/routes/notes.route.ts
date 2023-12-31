import { Request, Router, Response } from "express";
import noteController from '../controllers/notes.controller';
const router = Router();

router.get('/', noteController.getNotes);
router.get('/:id', noteController.getNoteById);

router.post('/', noteController.addNote);

export default router;