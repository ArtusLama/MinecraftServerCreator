<template>
    <div class="badge">

        <p>{{ server.mc_version }} • {{ server.server_type }}</p>

    </div>

</template>

<style scoped>

    .badge {
        background-color: #33373F;
        color: #F2F4FB;
        width: fit-content;
        height: fit-content;
        border-radius: 100px;
        font-weight: 700;
        font-size: 12px;
        padding: 2px 10px;
        float: right;
        white-space: nowrap;
    }
    .badge p {
        margin: 0;
    }
    

</style>


<script>

    export default {
        props: {
            server: {
                required: true
            }
        }
    }

</script>

