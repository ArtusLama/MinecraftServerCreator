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
        
        padding-right: 2rem;

        height: 100vh;
        overflow: hidden;
        overflow-y: auto;
    }

</style>
