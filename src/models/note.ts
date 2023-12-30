import { Schema, model, Document } from 'mongoose';

export type INote = Document & {
  content: string;
  createdAt?: string;
  modifiedAt?: string;
}

const NoteSchema = new Schema({
  content: { type: String, required: true },
});

const Note = model<INote>('Note', NoteSchema);

export default Note;