import { EventEmmitter } from "../EventEmitter";

export class TodoListModel extends EventEmmitter {

    constructor(item = []) {
        super();
        this.items = items;
    }

    getTotalCount() {
        return this.items.length;
    }

    getTodoItems() {
        return this.items;
    }

    onChange(listener) {
        this.addEventListener("change", listener);
    }

    emitChange() {
        this.emit("change");
    }

    addTodo(todoItem) {
        this.items.push(todoItem);
        this.emitChange();
    }
}