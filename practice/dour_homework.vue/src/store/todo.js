import { defineStore } from 'pinia'

export const todoStore = defineStore("todo", {
    state: () => ({ //定義所有變數與資料
        todo: [
            {
                id: 1,
                text: 'clean room',
                isDone: false
            },
            {
                id: 2,
                text: 'do homework',
                isDone: false
            },
            {
                id: 3,
                text: 'exercise',
                isDone: false
            }
        ],
    }),
    getters: { //預設取得資料的函式集
        pendingTodo(state) {
            console.log(state);
            return state.todo.filter(todo => !todo.isDone);
        },
        completeTodo(state) {
            console.log(state);
            return state.todo.filter(todo => todo.isDone);
        }
    },
    actions: { //設定要做的功能函式，例如加入購物車addCart、移除購物車removeCart
        addTodo(text) {
            if (!text) return;
            this.todos.push({
                id: Math.floor(Math.random() * 100000),
                text,
                isDone: false
            })
        },
        toggleTodo(id) {
            const index = this.todos.findIndex((todo) => todo.id === id)
            this.todos[index].isDone = !this.todos[index].isDone
        }
    }
})