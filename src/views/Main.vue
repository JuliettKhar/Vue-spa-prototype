<template>
	<div>
		<Aside/>
		<Navbar/>
		<main>
			<router-view/>
		</main>
		<Footer/>
	</div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Navbar from "@/components/Navbar.vue";
    import Aside from "@/components/Aside.vue";
    import Footer from "@/components/Footer.vue";

    @Component({
        name: "Main",
        components: {
            Navbar,
            Aside,
            Footer
        }
    })
    export default class Main extends Vue {}
</script>

<style scoped lang="scss">
	main {
		height: 100%;
		background: #F0F0F0;
	}
</style>
