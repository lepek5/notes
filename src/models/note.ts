import { Schema, model, Document } from 'mongoose';

export type INote = Document & {
  user: string;
  content: string;
  createdAt?: string;
  modifiedAt?: string;
}

const NoteSchema = new Schema({
  user: { type: String, required: true},
  content: { type: String, required: true },
});

const Note = model<INote>('Note', NoteSchema);

export default Note;