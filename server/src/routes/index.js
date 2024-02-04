const { Router } = require("express");
const countryRouters = require("./countryRouter");
const activityRouters = require("./activityRouter");
const router = Router();

router.use("/countries", countryRouters);
router.use("/activities", activityRouters);

module.exports = {
    router
};
