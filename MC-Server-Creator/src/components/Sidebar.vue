<script setup>

    import SidebarMenuButton from "./SidebarMenuButton.vue";

    import { ViewGridAddIcon, ChartBarIcon, ChevronUpIcon, ChevronDownIcon, MenuAlt2Icon, TerminalIcon, FolderIcon, CogIcon } from "@heroicons/vue/outline";

</script>

<template>
    <div>
        <div class="background">

            <div class="logo">
                <h1>MCSC</h1>
            </div>

            <div class="menu">
                <div class="menu-section">
                    <ul class="menu-items">
                        <SidebarMenuButton :icon="ViewGridAddIcon" name="Dashboard" linkPage="/" class="menu-item"/>
                        <SidebarMenuButton :icon="ChartBarIcon" name="Servers" linkPage="/servers" class="menu-item"/>
                    </ul>
                </div>
                <div class="menu-section">
                    <div class="toggleSection" @click="serverManagementSectionOpen = !serverManagementSectionOpen">
                        <h2>SERVER MANAGEMENT</h2>
                        <ChevronUpIcon class="toggleSection-icon" v-if="serverManagementSectionOpen" />
                        <ChevronDownIcon class="toggleSection-icon" v-else />
                    </div>
                    <ul class="menu-items" v-if="serverManagementSectionOpen">
                        <SidebarMenuButton :icon="MenuAlt2Icon" name="Overview" linkPage="/overview" class="menu-item"/>
                        <SidebarMenuButton :icon="TerminalIcon" name="Console" linkPage="/console" class="menu-item"/>
                        <SidebarMenuButton :icon="FolderIcon" name="Files" linkPage="/files" class="menu-item"/>
                    </ul>
                </div>
                <SidebarMenuButton :icon="CogIcon" name="Settings" linkPage="/settings" class="menu-item settings-item"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                serverManagementSectionOpen: true
            }
        }

    }


</script>


<style scoped>

    .background {
        background-color: #1E2128;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: clamp(16rem, 20%, 20rem);

    }

    .logo {
        color: white;
    }

    .menu {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .menu-section {
        margin-top: 2rem;
    }
    .menu-items {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .menu-item {
        width: 80%;
        background-color: #1E2128;
    }
    
    .toggleSection {
        margin-left: 10%;
        margin-right: 10%;
        height: 2rem;
        font-size: 10px;
        font-weight: 900;
        color: #F2F4FB;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }

    .toggleSection-icon {
        width: 20px;
        height: 20px;
    }

    .settings-item {
        position: absolute;
        bottom: 1rem;
        left: 10%;
        right: 10%;
    }
   

</style>