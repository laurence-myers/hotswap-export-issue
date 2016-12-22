"use strict";
const hotswap = require('hotswap'); // enable hotswapping of code modules
const importedWorking = require("./importedWorking");
const importedFailing = require("./importedFailing");
console.log(importedWorking);
console.log(importedFailing);
importedWorking.workingMethod();
importedFailing.failingMethod();
