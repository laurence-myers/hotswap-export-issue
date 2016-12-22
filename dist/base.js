"use strict";
module.change_code = 1;
class BaseClass {
    constructor() {
        this.baseProperty = 'Base property';
    }
    baseMethod() {
        console.log('Base method called.');
    }
}
exports.BaseClass = BaseClass;
