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