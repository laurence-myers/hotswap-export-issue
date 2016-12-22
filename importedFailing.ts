module.change_code = 1;

class ImportedFailing {
    failingProperty = 'Failing property';

    failingMethod() {
        console.log('Imported failing method');
    }
}

const singleton = new ImportedFailing();

export = singleton;