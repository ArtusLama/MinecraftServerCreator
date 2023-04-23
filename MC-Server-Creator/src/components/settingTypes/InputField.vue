<script setup>
    import { getSetting } from "@electronCode/utils/VueSettingsManager.js"
</script>

<template>

    <input class="inputField" v-model="currentText">
    

</template>

<script>

    export default {

        data() {
            return {
                currentText: "loading...",
                reactiveWidth: 10 * 1.05 + "ch"
            }
        },

        mounted() {
            this.currentText = getSetting(this.configPath);
        },

        

        props: {
            configPath: {
                type: String,
                required: true
            }
        }

    }

</script>

<style scoped>


    .inputField {
        height: 1.75rem;
        width: clamp(5rem, 60%, 25rem);

        background-color: #1E2128;
        color: #F2F4FB;
        font-weight: 300;

        border-radius: 6px;
        border: none;
        padding-left: 0.5rem;
    }

    .inputField:focus {
        outline: 1px #8C91A6 solid;
    }

</style>