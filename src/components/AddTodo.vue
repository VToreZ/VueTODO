<template>
    <form @submit.prevent="onSubmit">
        <input v-model="title" type="text">
        <button type="submit" v-on:submit="onSubmit">Create</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: ""
        }
    },
    methods: {
        onSubmit() {
            const newTodo = {
                id: Date.now(),
                title: this.title,
                completed: false
            }
            this.$emit('add-todo', newTodo)
            this.title = ''
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
    }
    input {
        width: 400px;
    }
</style>