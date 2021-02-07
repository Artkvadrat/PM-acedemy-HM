const Person = require('./taskTwo');

describe('class: Person', () => {

    let _ = new Person(1, 'Daniel');

    test('Should set valid gender', () => {
        expect(_.gender).toBe(1);
        _.gender = 2;
        expect(_.gender).toBe(2);
        expect(_.name).toBe('Daniel');
    });
});