import Note from "../models/note";

const addNote = async (note: any) => {
  console.log(note)
  try {
    const newNote = await Note.create(note);
    return newNote;
  } catch (err: any) {
    throw new Error('Error: ' + err);
  }
}
const getNotes = async () => {
  try {
    const notes = await Note.find({});
    return notes;
  } catch (err: any) {
    throw new Error('Error ' + err);
  }
};

export default {
  addNote,
  getNotes
}