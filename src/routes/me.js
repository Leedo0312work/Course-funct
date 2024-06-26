const express = require("express");
const router = express.Router();

//Route to course
const courseController = require("../app/controllers/MeController");

router.get("/stored/courses", courseController.storedCourses);
router.get("/trash/courses", courseController.trashCourses);

module.exports = router;
