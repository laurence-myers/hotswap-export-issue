"use strict";
const base_1 = require("./base");
class InheritedClass extends base_1.BaseClass {
    constructor() {
        super(...arguments);
        this.inheritedProperty = 'Inherited property';
    }
    inheritedMethod() {
        console.log('Inherited working method');
    }
}
const singleton = new InheritedClass();
module.exports = singleton;
