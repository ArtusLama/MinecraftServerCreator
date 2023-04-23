<script setup>

    import SettingsElement from "@components/SettingsElement.vue"
    import InputField from "@components/settingTypes/InputField.vue"
    
    

</script>


<template>
    <div>

        <ul class="settings">

            <SettingsElement name="Servers Path">
                <InputField configPath="settings.serversFolderPath"/>
            </SettingsElement>
            

        </ul>
    </div>
</template>


<style scoped>

    .settings {
        list-style-type: none;
        margin-top: 10rem;
        padding: 0;
    }

</style>