const hotswap = require('hotswap'); // enable hotswapping of code modules

import importedWorking = require('./importedWorking');
import importedFailing = require('./importedFailing');

console.log(importedWorking);
console.log(importedFailing);

importedWorking.workingMethod();
importedFailing.failingMethod();
