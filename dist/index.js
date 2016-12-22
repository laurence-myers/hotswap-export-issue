"use strict";
const hotswap = require('hotswap'); // enable hotswapping of code modules
const inheritedWorking = require("./inheritedWorking");
const inheritedFailing = require("./inheritedFailing");
console.log(inheritedWorking);
console.log(inheritedFailing);
inheritedWorking.inheritedMethod();
inheritedFailing.inheritedMethod();
