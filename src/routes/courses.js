const express = require("express");
const router = express.Router();

//Route to course
const courseController = require("../app/controllers/CourseController");

router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/:id/edit", courseController.edit);
router.post("/handle-trash-form", courseController.handleTrashForm);
router.post("/handle-form-actions", courseController.handleFormAction);
router.put("/:id", courseController.update);
router.patch("/:id/restore", courseController.restore);
router.delete("/:id", courseController.delete);
router.delete("/:id/force", courseController.forceDelete);
router.get("/:slug", courseController.show);

module.exports = router;
