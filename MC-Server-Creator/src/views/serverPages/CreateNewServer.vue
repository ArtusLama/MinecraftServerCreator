<script setup>

    import { CheckIcon, PencilIcon } from "@heroicons/vue/outline";

</script>

<template>
    <div>
        
        <h1>{{ steps[current] }}</h1>
        <div class="progressWrapper">
            <ul class="progress">
                <li v-for="(step, index) in steps" class="progressElement">
                    <span class="progressCircle" :style="index == current ? {'background-color': '#5DD299'} : {}">
                        <CheckIcon v-if="current > index" class="progressCircleCompleatedIcon"/>
                        <PencilIcon v-if="current == index" class="progressCircleEditing"/>
                    </span>
                    <span class="progressLine" v-if="index != steps.length - 1" :class="{ alreadyCompleated: current > index} "></span>
                </li>
            </ul>
        </div>

        <div class="formContent">

        </div>
        
        <button v-if="current != 0" @click="current--">back</button>
        <button v-if="current != steps.length - 1" @click="current++">next</button>
        <button v-if="current == steps.length - 1" @click="createServer()">create server</button>


    </div>
</template>

<style scoped>
    .progressWrapper {
        margin-top: 4rem;
        max-width: 50rem;
    }
    .progress {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        height: 4rem;

        margin: 0;
        padding: 0;
    }
    .progressElement {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .progressCircle {
        display: flex;
        justify-content: center;
        background-color: #20232A;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 100px;
        z-index: 1;
    }
    .progressCircleCompleatedIcon {
        color: #5DD299;
        stroke-width: 3;
        width: 30px;
    }
    .progressCircleEditing{
        color: #20232A;
        stroke-width: 2;
        width: 30px;
    }


    .progressLine {
        display: block;
        width: 8rem;
        height: 8px;
        padding: 0 2rem;
        background-color: #20232A;
    }
    .progressLine.alreadyCompleated {
        background-color: #5DD299;
    }

    .formContent {
        margin-top: 2rem;
        max-width: 50rem;
        height: 10rem;
        background-color: #20232A;
        border-radius: 10px;
    }



</style>


<script>

    export default {
        data() {
            return {
                steps: ["Set Name", "Select Version", "Server Settings"],
                current: 0
            }
        },
        methods: {
            createServer: function () {
                alert("creating server... !NOT IMPLEMENTED YET")
            }
        }
    }

</script>

