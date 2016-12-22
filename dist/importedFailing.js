"use strict";
module.change_code = 1;
class ImportedFailing {
    constructor() {
        this.failingProperty = 'Failing property';
    }
    failingMethod() {
        console.log('Imported failing method');
    }
}
const singleton = new ImportedFailing();
module.exports = singleton;
