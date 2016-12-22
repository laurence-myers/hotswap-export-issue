module.change_code = 1;
import {BaseClass} from './base';

class InheritedClass extends BaseClass {
    inheritedProperty = 'Inherited property';

    inheritedMethod() {
        console.log('Inherited failing method');
    }
}

const singleton = new InheritedClass();

export = singleton;