import { Request, Response, NextFunction } from "express";
import Note from "../models/note";

type HttpError = Error & {
  status: number;
}

const addNote = async (req: Request, res: Response, next: NextFunction) => {
  const note = req.body;
  if (!note) res.status(400).json({ error: { message: 'Note is empty' } })
  try {
    const newNote = await Note.create(note);
    res.status(200).json({ data: newNote });
  } catch (err: any) {
    const error = new Error('Can\'t create new note');
    next(error);
  }
};

const getNoteById = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  if (!id) res.status(400).json({ error: { message: 'No ID provided' } });
  try {
    const note = await Note.findById(id);
    if (!note) res.status(404).json({ error: {message: 'Note not found'} });
    res.status(200).json({ data: note });
  } catch (err: any) {
    const error = new Error('Can\'t get note with id');
    next(error);
  }
};

const getNotes = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const notes = await Note.find({});
    if (!notes) res.status(404).json({error: {message: 'Notes not found'}});
    res.status(200).json({ data: notes });
  } catch (err: any) {
    const error = new Error('Can\'t get all notes');
    next(error);
  }
};

export default {
  addNote,
  getNotes,
  getNoteById
}