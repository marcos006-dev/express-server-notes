const router = require("express").Router();
const {
  rutaGetNotes,
  rutaAddNote,
  rutaUpdateNote,
  rutaDeleteNote,
} = require("../controllers/notes.controllers");
router.get("/", rutaGetNotes);
router.post("/", rutaAddNote);
router.put("/", rutaUpdateNote);
router.put("/deletenote", rutaDeleteNote);

module.exports = router;
