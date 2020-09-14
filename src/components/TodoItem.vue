<template>
  <li>
      <span :class="{done: todo.completed}">
          <input type="checkbox" id="todo.id" v-on:change="todo.completed = !todo.completed">
          <strong>
              {{index + 1}}
          </strong>
        {{todo.title}}
      </span>
      <button v-on:click="$emit('remove-todo', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            require: true
        },
        index: Number
    }
}
</script>

<style scoped>
    .done {
        text-decoration: line-through;
    }
</style>