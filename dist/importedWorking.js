"use strict";
class ImportedWorking {
    constructor() {
        this.workingProperty = 'Working property';
    }
    workingMethod() {
        console.log('Imported working method');
    }
}
const singleton = new ImportedWorking();
module.exports = singleton;
