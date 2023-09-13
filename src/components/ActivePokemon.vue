<template>
    <div v-if="active" class="d-flex flex-column justify-content-center align-items-center h-100">
        <img :src="active.imgUrl" :alt="active.name">
        <h1>{{ active.name }}</h1>
    </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {
    setup() {
        return {
            active: computed(() => AppState.activePokemon),
        };
    },
};
</script>


<style></style>