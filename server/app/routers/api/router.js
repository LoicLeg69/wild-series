const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

// const { browse } = require("../../controllers/programActions");

// router.get("/progam", browse);

/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const programsRouter = require("./programs/router");

router.use("/programs", programsRouter);

/* ************************************************************************* */

module.exports = router;
