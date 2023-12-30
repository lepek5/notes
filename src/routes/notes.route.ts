import { Request, Router, Response } from "express";
import noteController from '../controllers/notes.controller';
const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  const notes = await noteController.getNotes();
  res.json(notes);
})

router.post('/', async (req: Request, res: Response) => {
  const note = req.body;
  const result = await noteController.addNote(note);
  res.json(result);
});

export default router;