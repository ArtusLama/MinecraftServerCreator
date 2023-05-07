<script setup>

    import SettingsElement from "@components/SettingsElement.vue"
    import InputField from "@components/settingTypes/InputField.vue"
    
    

</script>


<template>
    <div>

        <h1>Currently read only</h1>
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