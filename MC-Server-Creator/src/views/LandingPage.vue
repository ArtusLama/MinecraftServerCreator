<template>
    <div>
        <h1>TEST</h1>
        <p>Name: </p><input v-model="name">
        <p>Type: </p><input v-model="type">
        <p>Version: </p><input v-model="version">
        <button @click="createServer()">create server</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "testName",
                type: "spigot",
                version: "1.19.4"
            }
        },
        methods: {
            createServer() {
                window.ipc.setupServerAtPath(this.name, this.type, this.version)
            }
        }

    }
</script>

<style scoped>

</style>