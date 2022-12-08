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
    <div class="flex justify-between">
      <div>
        <div class="h3 text-2xl">Pending</div>
        <ul class="flex flex-col space-y-2">
          <li
            v-for="todo in pending" 
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
            v-for="todo in completed"
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
import { ref, computed } from "vue";

const newTodo = ref("");

const todos = ref([]);

const pending = computed(() => {
  return todos.value.filter((todo) => !todo.done);
});

const completed = computed(() => {
  return todos.value.filter((todo) => todo.done);
});

const addTodo = () => {
  if (newTodo.value) {
    todos.value.push({
      id: todos.value.length,
      content: newTodo.value,
      done: false,
    });
  }
  newTodo.value = "";
};

const changeStatus = (id) => {
  todos.value.find((todo) => {
    if (todo.id === id) todo.done = !todo.done;
  });
};
</script>

<style></style>
