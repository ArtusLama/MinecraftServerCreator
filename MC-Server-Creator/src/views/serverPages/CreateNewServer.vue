<script setup>

    import { CheckIcon, PencilIcon, ArrowNarrowRightIcon } from "@heroicons/vue/outline";
    import SelectMenu from "@components/useful/SelectMenu.vue"

</script>

<template>
    <div>
        
        <div class="progressWrapper">
            <ul class="progress">
                <li v-for="(step, index) in steps" class="progressElement">
                    <span class="progressCircle" :style="index == current ? {'background-color': '#5DD299'} : index < current ? {'border': '2px solid #5DD299'} : {}">
                        <CheckIcon v-if="current > index" class="progressCircleCompleatedIcon"/>
                        <PencilIcon v-if="current == index" class="progressCircleEditing"/>
                    </span>
                    <span class="progressLine" v-if="index != steps.length - 1" :class="{ alreadyCompleated: current > index} "></span>
                </li>
            </ul>
        </div>

        <div class="formContent">
            <div :class="{ formSectionVisible: current == 0 }">
                <div style="position: relative;">
                    <input class="formInputField" name="serverName" type="text" required v-model="serverName">
                <label class="formInputLabel" for="serverName"><span class="inputLabelText">ServerName:</span></label>
                </div>
                
                <span class="serverTypeText">ServerType:</span>
                <SelectMenu class="selectServerType" :options="['paper', 'spigot', 'bukkit']" default="paper" @input="console.log($event)"/>
                

            </div>
            <div :class="{ formSectionVisible: current == 1 }">
                

            </div>
            <div :class="{ formSectionVisible: current == 2 }">
                

            </div>


        </div>
        
        <div class="buttonWrapper" :style="current == 0 ? {'justify-content': 'flex-end'} : {}">
            <button class="backButton" v-if="current != 0" @click="current--">BACK</button>
            <button class="nextButton" v-if="current != steps.length - 1" @click="current++"><p>NEXT</p><ArrowNarrowRightIcon class="nextButtonIcon"/></button>
            <button class="submitButton" v-if="current == steps.length - 1" @click="createServer()">Create Server <CheckIcon class="submitButtonIcon"/></button>
        </div>
        

    </div>
</template>

<script>

    export default {
        data() {
            return {
                steps: ["Set Name", "Select Version", "Server Settings"],
                current: 0,

                serverName: null,
                serverType: "paper",
            }
        },
        watch: {
            serverName(val) {
                this.serverName = val.replace(/[^a-zA-Z0-9-_]/g, "")
            }
        },
        methods: {
            createServer: function () {
                alert("NAME: " + this.serverName + " serverType: " + this.serverType)
            }
        }
    }

</script>


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
    .progressElement * {
        transition: all 400ms ease-in-out;
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
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4rem 0;
    }
    .formContent > div {
        display: none;
    }
    .formSectionVisible {
        display: flex !important;
        flex-direction: column;
    }

    .buttonWrapper {
        margin-top: 1rem;
        max-width: 50rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
    }
    .nextButton {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #5DD299;
        color: #20222D;
        border: none;
        border-radius: 6px;
        font-weight: 700;
        font-size: 14px;
        cursor: pointer;
        height: 2rem;
        width: 5rem;
        transition: all 200ms ease-in-out;
    }
    .nextButton p {
        margin: 0;
        margin-top: 2px;
        margin-right: 4px;
    }
    .nextButton:hover {
        background-color: #55bc8a;
    }
    .nextButton:hover .nextButtonIcon {
        width: 1.5rem;
        opacity: 1;
    }
    .nextButtonIcon {
        opacity: 0;
        width: 0;
        transition: all 200ms ease-in-out;
    }
    .backButton {
        background-color: #333644;
        color: #20222D;
        border: none;
        text-align: center;
        border-radius: 6px;
        font-weight: 700;
        font-size: 14px;
        padding: 0 5px;
        cursor: pointer;
        width: 4rem;
        height: 2rem;
    }
    
    .backButton:hover {
        background-color: #40434f;
    }
    
    .submitButton {
        background-color: #5DD299;
        color: #20222D;
        border: none;
        border-radius: 6px;
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 14px;
        padding: 0 10px;
        cursor: pointer;
        height: 2rem;

        box-shadow: 0 0 0 0 transparent;
        transition: all 200ms ease-in-out;
    }
    .submitButton:hover {
        color: white;
        background-color: #5edda0;
        box-shadow: 0 0 0 8px #66daa243;
        
    }
    .submitButtonIcon {
        width: 1.5rem;
        stroke-width: 3px;
        margin-left: 6px;
    }


    .formInputField {
        font-weight: 600;
        background-color: transparent;
        border: none;
        height: 2rem;
    }
    .formInputField:focus {
        outline: none;
    }
    .formInputLabel {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        pointer-events: none;
        border-bottom: 2px solid #8c91a6;
    }
    .formInputLabel::after {
        content: "";
        position: absolute;
        left: 0px;
        width: 100%;
        transform: scaleX(0);
        transform-origin: left;
        height: 100%;
        border-bottom: 3px solid #5DD299;
        transition: all 0.3s ease;
    }
    .inputLabelText {
        position: absolute;
        bottom: 0px;
        left: 0px;
        padding-bottom: 5px;
        font-weight: 700;
        text-transform: uppercase;
        transition: all 0.3s ease;
    }
    .formInputField:focus + .formInputLabel .inputLabelText,
    .formInputField:valid + .formInputLabel .inputLabelText {
        transform: translateY(-100%);
        font-size: 12px;
        left: 0px;
        color: #5DD299;
    }
    .formInputField:focus + .formInputLabel::after,
    .formInputField:valid + .formInputLabel::after {
        transform: scaleX(1);
    }


    .serverTypeText {
        margin-top: 4rem;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 12px;
        color: #5DD299;
    }
    






</style>




