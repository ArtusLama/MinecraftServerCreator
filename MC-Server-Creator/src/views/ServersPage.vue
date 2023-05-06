<script setup>
    import ServerCard from "@components/serversPage/ServerCard.vue";
    import { RouterLink } from "vue-router";
    import { PlusIcon } from "@heroicons/vue/outline";
</script>


<template>
    <div>
        
        <div class="top">
            <h2>Servers:</h2>
            <RouterLink to="/createserver" class="createServerButton">
                <PlusIcon class="createServerButton-icon"/>
                <p>create new</p>
            </RouterLink>
        </div>
        
        <ul class="serverList">
            <li v-for="server of servers">
                <ServerCard :server="server"/>
            </li>
        </ul>
        
        
        
    </div>
</template>

<script>

    export default {
        data() {
            return {
                servers: "loading..."
            }
        },
        async mounted() {
            this.servers = await window.ipc.getAllServersForDashboard();
        }
    }

</script>

<style scoped>

    
    .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 4rem;
    }
    .serverList {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
    }

    .createServerButton {
        background-color: #2e313f;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        height: 2.5rem;
        padding: 0px 15px;
        text-decoration: none;
        color: #dbdde4;
        transition: background-color 200ms ease-in-out;
    }
    .createServerButton:hover {
        background-color: #20232a;
    }

    .createServerButton p{
        margin-top: 0.8rem;
        font-weight: 600;
    }
    .createServerButton-icon {
        height: 25px;
        height: 25px;
        margin-right: 10px;
    }

</style>