class PersonGenderError extends Error {
    constructor(message) {
        super(message);
        this.name = 'PersonGenderError';
    }
}

class Person {
    static GENDER = {
        NOT_DEFINED: 0,
        MAN: 1,
        WOMAN: 2
    }

    #name = 'NoName';
    #gender = Person.GENDER.NOT_DEFINED;

    constructor(gender, name) {
        try {
            if (Object.values(Person.GENDER).findIndex(item => item === gender) !== -1) {
                this.#gender = gender;
                if (name) {
                    this.#name = name;
                }
            } else {
                throw new PersonGenderError('You have entered wrong gender');
            }
        } catch (e) {
            console.error(`Error: ${e.message} in ${e.name}`);
        }
    }

    set gender(value) {
        try {
            if (Object.values(Person.GENDER).findIndex(item => item === value) !== -1) {
                this.#gender = value;
            } else {
                throw new PersonGenderError('You have entered wrong gender');
            }
        } catch (e) {
            console.error(`Error: ${e.message} in ${e.name}`);
        }
    }

    get gender() {
        return this.#gender;
    }

    set name(value) {
        if (value && typeof value === 'string') {
            this.#name = value;
        }
    }

    get name() {
        return this.#name;
    }
}

module.exports = Person;