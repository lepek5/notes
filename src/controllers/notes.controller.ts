import { Request, Response, NextFunction } from "express";
import Note, { INote } from "../models/note";
const addNote = async (req: Request, res: Response, next: NextFunction) => {
  const note: INote = req.body;
  if (!note || Object.keys(note).length < 1)
    res.status(400).json({ error: { message: 'Note is empty' } })
  else {
    try {
      const newNote = await Note.create(note);
      res.status(200).json({ data: newNote });
    } catch (err: any) {
      next(err);
    }
  }
};

const getNoteById = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  if (!id || !id.match(/^[0-9a-fA-F]{24}$/))
    res.status(400).json({ error: { message: 'Invalid ObjectId' } });
  else {
    try {
      const note: INote | null = await Note.findById(id);
      if (!note)
        res.status(404).json({ error: { message: 'Note not found' } });
      else
        res.status(200).json({ data: note });
    } catch (err: any) {
      next(err);
    }
  }
};

const getNotes = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const notes: INote[] | null = await Note.find({});
    if (!notes)
      res.status(404).json({ error: { message: 'Notes not found' } });
    else
      res.status(200).json({ data: notes });
  } catch (err: any) {
    next(err);
  }
};

export default {
  addNote,
  getNotes,
  getNoteById
}