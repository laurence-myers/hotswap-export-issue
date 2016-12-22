const hotswap = require('hotswap'); // enable hotswapping of code modules

import inheritedWorking = require('./inheritedWorking');
import inheritedFailing = require('./inheritedFailing');

console.log(inheritedWorking);
console.log(inheritedFailing);

inheritedWorking.inheritedMethod();
inheritedFailing.inheritedMethod();
