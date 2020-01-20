
<template>
<div>
  <p>Completed Tasks: {{remaining}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <todo  @delete-todo="deleteTodo" @complete-todo="completeTodo"
    v-for="(todo, index) in todos"  :todo="todo" :key="index"></todo>
</div>
</template>

<script type="text/javacsript">
/* eslint-disable */
import Todo from './Todo';
  export default {
    props: ['todos'],
    components: {
      Todo },
      methods: {
        deleteTodo(todo) {
          const todoIndex = this.todos.indexOf(todo);
          this.todos.splice(todoIndex, 1);
        },
        completeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos[todoIndex].done = true;
      },

      },
      computed: {
        remaining() {
            return this.todos.filter(todo =>!todo.done ).length
        }
      }
  }

</script>


<style>
</style>
