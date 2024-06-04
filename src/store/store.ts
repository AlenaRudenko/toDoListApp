import { action, makeObservable, observable } from "mobx"
import uniqid from 'uniqid'

type ITodo = {
    text:string;
    id:string;
}
interface IState {
    value:string;
    todos:ITodo[]
}

class StoreServizz {
    value:IState['value'] = ''
    todos:IState['todos'] = []
    constructor() {
        makeObservable(this, {
            todos:observable,
            addTodo:action,
            handleValue:action,
        })
    }
    addTodo () {
        this.todos.push({text:this.value, id:uniqid()})
        this.value = ''
    }
    handleValue(text:string) {
        this.value = text
    }
}
export const StoreService = new StoreServizz()