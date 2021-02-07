const TaskOne = require('./taskOne');

describe('class for task one', () => {

    const _ = new TaskOne();

    test('Should be defined', () => {
        expect(_.callMe).toBeDefined();
        expect(_.callCount).toBeDefined();
    });

    test('Should count the amount of calls', () => {
        _.callMe();
        expect(_.callCount()).toBe(1);
        _.callMe();
        expect(_.callCount()).toBe(2);
        _.callMe();
        expect(_.callCount()).toBe(3);
    });
});