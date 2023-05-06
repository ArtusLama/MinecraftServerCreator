<script setup>

    import ServerInfoBadge from "@components/serversPage/ServerInfoBadge.vue";
    import { setSelectedServer } from "@utils/SelectedMinecraftServer.js"
    import { RouterLink } from "vue-router";

</script>

<template>
    <div class="card" :style="onlineStatusStyle">
        <div>
            <h2 class="title"><span class="titleText">{{ server.name }}</span><ServerInfoBadge :server="server" class="badge"/></h2>
        </div>
        <div>
            <RouterLink to="/overview" class="serverButton" @click="setSelectedServer(server.name)">view</RouterLink>
        </div>
        
        

    </div>

</template>

<style scoped>

    .card {
        background-color: #20232A;
        border-radius: 20px;
        border-radius: 10px 20px 20px 10px;
        padding-left: 2rem;
        color: #F2F4FB;
        height: 6rem;
    }
    .title {
        padding-top: 4px;
        display: flex;
        align-items: center;
    }
    .titleText {
        overflow: hidden;
        max-width: 60%;
        text-overflow: ellipsis;
    }
    .badge {
        margin-left: 1rem;
    }

    .serverButton {
        text-decoration: none;
        color: #F2F4FB;
        background-color: #33373F;
        border-radius: 4px;
        padding: 4px 20px;
        font-weight: 600;
    }
    

</style>


<script>

    export default {
    props: {
        server: {
            required: true
        }
    },
    computed: {
        onlineStatusStyle() {
            return {
                borderLeft: this.server.server_type == "paper" ? "10px solid #5DD299" : "10px solid #C93E57"
            };
        }
    }
}

</script>

