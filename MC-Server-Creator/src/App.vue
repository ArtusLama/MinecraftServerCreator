<script setup>
    import { RouterView } from "vue-router";
    import Sidebar from '@components/Sidebar.vue';
    
    
</script>

<template>
    
    <RouterView class="content"/>
    <Sidebar/>

</template>

<style scoped>

    .content {
        text-align: left;
        max-width: 1280px;
        margin: 0 auto;
        padding: 0;

        margin-top: 2rem;
        margin-bottom: 2rem;
    }

</style>
