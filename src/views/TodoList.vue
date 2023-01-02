<template>
  <div class="flex flex-col space-y-4">
    <h1 class="text-3xl">We about to create a todo app</h1>
    <input
      v-model="newTodo"
      type="text"
      class="rounded-sm px-2 py-2 text-xl text-black"
      placeholder="New to do"
      @change="addTodo"
    />
    <div>
      <div>
        <div class="h3 text-2xl">Pending</div>
        <ul class="flex flex-col space-y-2">
          <li
            v-for="todo in todos.pending"
            :key="todo.id"
            @click="changeStatus(todo.id)"
            class="bg-gray-200 py-2 px-2 text-blue-500 rounded-sm text-center hover:cursor-pointer hover:text-gray-300 hover:bg-blue-500 duration-75"
          >
            {{ todo.content }}
          </li>
        </ul>
      </div>
      <div>
        <div class="h3 text-2xl">Completed</div>
        <ul class="flex flex-col space-y-2">
          <li
            class="bg-gray-200 py-2 px-2 text-green-500 rounded-sm text-center hover:cursor-pointer hover:text-gray-300 hover:bg-green-500 duration-75"
            @click="changeStatus(todo.id)"
            v-for="todo in todos.completed"
            :key="todo.id"
          >
            {{ todo.content }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodoList } from "../stores/todos";

const todos = useTodoList();

const newTodo = ref("");

const addTodo = () => {
  if (newTodo.value) {
    todos.addTodo({
      id: Math.floor(Math.random() * 1000),
      content: newTodo.value,
      done: false,
    });
  }
  newTodo.value = "";
};
</script>
