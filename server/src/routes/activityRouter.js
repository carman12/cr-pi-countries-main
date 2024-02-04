const { Router } = require("express");
const express = require("express");
const {getActivityHandler,createActivityHandler} = require("../handler/activityHandler")
const activitiesrouter = Router();
activitiesrouter.use(express.json());


activitiesrouter.get('/',getActivityHandler)
console.log("router");
activitiesrouter.post('/create',createActivityHandler)


 module.exports = activitiesrouter;