const express = require("express");
const homeController = require("../controllers/home-controller");
const router = express.Router();

router.get("/", homeController.getAllUserData);
router.put("/:uid/cal", homeController.updateCal);
router.put("/:uid/steps", homeController.updateSteps);



module.exports = router;
