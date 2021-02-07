class TaskOne {
    static #countOfCalls = 0;

    callMe () {
        TaskOne.#countOfCalls++;
    }

    callCount () {
        return TaskOne.#countOfCalls;
    }
}

module.exports = TaskOne;