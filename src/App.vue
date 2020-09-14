<template>
  <div id="app">
    <h1>Todo application</h1>
    <hr />
    <AddTodo @add-todo="addTodo" />
    <TodoList
      v-if="todos.length"
      v-bind:todos="todos"
      @remove-todo="removeTodo"
     />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: 1, title: "Buy bread", completed: false },
        { id: 2, title: "Buy milk", completed: false },
        { id: 3, title: "Buy oil", completed: false }
      ]
    };
  },
  components: {
    TodoList,
    AddTodo
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo)
    },
    removeTodo(id) {      
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
