const Notes = require("../models/Notes");
const ctrlNotes = {};

ctrlNotes.rutaGetNotes = async (req, res) => {
  try {
    const resultNotes = await Notes.find({ completed: false });
    res.json(resultNotes);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

ctrlNotes.rutaAddNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newNote = new Notes({ title, description });
    await newNote.save();

    res.status(201).json({ message: "Nota creado correctamente!" });
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

ctrlNotes.rutaUpdateNote = async (req, res) => {
  try {
    const { title, description, id } = req.body;

    const resultNotesUpdated = await Notes.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    res.json({
      msg: "Nota actualizado correctamente",
      resultNotesUpdated,
    });
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

ctrlNotes.rutaDeleteNote = async (req, res) => {
  try {
    const { id } = req.body;
    const noteDeleted = await Notes.findByIdAndUpdate(
      id,
      { completed: true },
      { new: true }
    );

    res.status(200).json({
      msg: "Nota completado correctamente",
      noteDeleted,
    });
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

module.exports = ctrlNotes;
