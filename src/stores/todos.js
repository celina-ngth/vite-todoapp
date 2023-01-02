import { defineStore } from "pinia";

export const useTodoList = defineStore("todos", {
  state: () => ({
    todos: [
      {
        id: 0,
        content: "Duarte birthday with friends",
        done: true,
      },
      {
        id: 1,
        content: "New year eve eating choucroute with Duarte",
        done: false,
      },
      {
        id: 2,
        content: "Prepare costume",
        done: false,
      },
    ],
  }),
  getters: {
    pending() {
      return this.todos.filter((todo) => !todo.done);
    },
    completed() {
      return this.todos.filter((todo) => todo.done);
    },
  },
  actions: {
    addTodo(todo) {
      console.log(todo);
      this.todos.push(todo);
    },
  },
});
