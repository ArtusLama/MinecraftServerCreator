<script setup>
    import { RouterLink } from "vue-router";

</script>

<template>

        <RouterLink :to="linkPage" class="routerLink">
            <li class="menu-item">
                <component :is="icon" class="menu-item-icon"/>
                <p class="menu-item-text">{{ name }}</p>
            </li>
        </RouterLink>

</template>

<script>

    export default {
        props: {
            icon: {
                type: Object,
                required: true,
            },
            name: {
                type: String,
                required: true
            },
            linkPage: {
                type: String,
                required: false
            }
        }
    }
    

</script>

<style scoped>

    .menu-item {
        cursor: pointer;
        border-radius: 6px;
        height: 2.75rem;
        width: 100%;
        display: flex;
        align-items: center;
        transition: background-color 100ms ease-in-out;
    }

    .menu-item:hover {
        background: #272934;
    }
    .menu-item:hover .menu-item-icon {
        stroke: #F2F4FB;
    }
    .menu-item:hover .menu-item-text {
        color: #F2F4FB;
    }
    .menu-item-icon {
        width: 30px;
        height: 30px;
        margin-left: 1rem;
        transition: stroke 200ms ease-in-out;
    }
    .menu-item-text {
        margin-left: 1rem;
        font-weight: 600;
        transition: color 200ms ease-in-out;
        
    }
    .routerLink {
        color: #8C91A6;
        text-decoration: none;
    }

</style>