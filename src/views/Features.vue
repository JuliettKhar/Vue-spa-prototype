<template>
	<router-view />
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: "Features",
    })
    export default class Features extends Vue {}
</script>

<style scoped>

</style>
