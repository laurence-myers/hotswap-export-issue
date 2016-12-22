import {BaseClass} from './base';

class InheritedClass extends BaseClass {
    inheritedProperty = 'Inherited property';

    inheritedMethod() {
        console.log('Inherited working method');
    }
}

const singleton = new InheritedClass();

export = singleton;