class EventEmitter {
    constructor() {
        this.events = {}
    }

    subscribe (eventName, handlerFunction) {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }

        this.events[eventName].push(handlerFunction);
    }

    emit(eventName) {
        if (this.events[eventName]) {
            this.events[eventName].forEach((fn) => fn());
        }
    }
}

export default new EventEmitter();