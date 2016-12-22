"use strict";
module.change_code = 1;
const base_1 = require("./base");
class InheritedClass extends base_1.BaseClass {
    constructor() {
        super(...arguments);
        this.inheritedProperty = 'Inherited property';
    }
    inheritedMethod() {
        console.log('Inherited failing method');
    }
}
const singleton = new InheritedClass();
module.exports = singleton;
