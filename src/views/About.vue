<template>
	<transition name="fade" mode="out-in">
			<router-view />
		</transition>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: "About",
    })

    export default class About extends Vue {}
</script>
