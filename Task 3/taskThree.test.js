const PersonLogs = require('./taskThree');

describe('class: PersonLogs', () => {

    let _ = new PersonLogs(1, 'Daniel');

    test('Should set valid gender', () => {
        expect(_.gender).toBe(1);
        _.gender = 2;
        expect(_.gender).toBe(2);
        expect(_.name).toBe('Daniel');
    });
});