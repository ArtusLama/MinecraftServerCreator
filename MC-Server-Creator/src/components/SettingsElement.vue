<script setup>
    
</script>

<template>

    <div class="settings-element">

        <h1 class="settingName">{{ name }}</h1>
        <slot></slot>

    </div>
    

</template>

<script>

    export default {

        props: {
            name: {
                type: String,
                required: true
            }
        }

    }

</script>

<style scoped>

    .settings-element {

        width: clamp(20rem, 60%, 40rem);
        height: 4rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

    }

    .settingName {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
    }



</style>