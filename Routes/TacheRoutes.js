const express = require("express");
const TacheController = require("../Controllers/TacheController");
const router = express.Router();

router.get("/", (request, result) => {
  TacheController.getAllTache(request, result);
});

router.get("/:id", (request, result) => {
  TacheController.getTacheById(request, result);
});

router.post("/", (request, result) => {
  TacheController.addTache(request, result);
});

router.patch("/:id", (request, result) => {
    TacheController.updateTache(request, result);
  });

router.delete("/:id", (request, result) => {
  TacheController.deleteTache(request, result);
});

module.exports = router;