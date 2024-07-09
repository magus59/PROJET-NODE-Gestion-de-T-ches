const express = require("express");
const CollaborationController = require("../Controllers/CollaborationController");
const router = express.Router();

router.get("/", (request, result) => {
  CollaborationController.getAllCollaboration(request, result);
});

router.get("/:id", (request, result) => {
  CollaborationController.getCollaborationById(request, result);
});

router.post("/", (request, result) => {
  CollaborationController.addCollaboration(request, result);
});

router.patch("/:id", (request, result) => {
  CollaborationController.updateCollaboration(request, result);
});

router.delete("/:id", (request, result) => {
  CollaborationController.deleteCollaboration(request, result);
});

module.exports = router;