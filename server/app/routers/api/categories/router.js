const express = require("express");

const router = express.Router();

const { browse, read } = require("../../../controllers/categoryActions");

// Route to get a list of items
router.get("/", browse);

router.get("/:id", read);

/* ************************************************************************* */
module.exports = router;