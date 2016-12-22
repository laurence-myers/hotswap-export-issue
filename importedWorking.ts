class ImportedWorking {
    workingProperty = 'Working property';

    workingMethod() {
        console.log('Imported working method');
    }
}

const singleton = new ImportedWorking();

export = singleton;