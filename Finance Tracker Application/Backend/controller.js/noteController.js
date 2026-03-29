import { Note } from "../models.js/Notes.js";

//Create Notes
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    const note = new Note({
      userId: req.body.userId,
      title,
      content,
    });

    await note.save();

    res.json({ success: true, note });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

//Get all Notes
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.body.userId });

    res.json({ success: true, notes });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

//Delete Note
export const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);

    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};
