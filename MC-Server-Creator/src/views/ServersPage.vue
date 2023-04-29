<template>
    <div>
        <h1>SERVERS</h1>
        <h2>{{ servers }}</h2>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                servers: "loading..."
            }
        },
        async mounted() {
            this.servers = await window.ipc.getAllServersForDashboard();
        }
    }

</script>

<style scoped>

</style>