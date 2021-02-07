const Person = require('../Task 2/taskTwo');

class PersonLogs extends Person {
    #logs = [];

    constructor(gender, name) {
        super(gender, name);
    }

    set gender (value) {
        let oldValue = super.gender;
        super.gender = value;
        if (oldValue !== super.gender) {
            this.#logs.push(`Changed gender prop: ${oldValue} ${super.gender}`);
        }
    }

    get gender() {
        return super.gender;
    }

    set name (value) {
        let oldValue = super.name;
        super.name = value;
        if (oldValue !== super.name) {
            this.#logs.push(`Changed name prop: ${oldValue} ${super.name}`);
        }
    }

    get name() {
        return super.name;
    }

    get logs () {
        if (this.#logs.length === 0) {
            console.log('There is no changes yet');
        } else {
            this.#logs.map((item) => {
                console.log(item);
            });
        }
    }
}

module.exports = PersonLogs;