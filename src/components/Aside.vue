<template>
	<aside class="aside">
		<ul class="aside__nav">
			<li v-for="(route, index) in asideItems" :key="index" @click="onMenuItemClick(index)">
				<router-link
					v-if="route.meta"
					:to="{path: route.name, params: {name: route.name }}"
					@click.native="isActive = route.name"
					:class="{'aside-is-active': currentRouteName === route.name}"
				>{{ route.meta.title}}
				</router-link>
			</li>
		</ul>
	</aside>
</template>

<script lang="ts">
    import {Component, Watch, Vue} from 'vue-property-decorator';
    import {routes} from "@/router/routes";
    import {RouteConfig} from "vue-router";

    @Component({
        name: "Aside",
    })

    export default class Aside extends Vue {
        private asideItems: RouteConfig[] = []
        private isActive: string | null | undefined = ''

        get currentRouteName(): string | null | undefined {
            return this.$route.name
        }

        set currentRouteName(value) {
            this.isActive = value
        }

        onMenuItemClick(index: number): void {
            this.$store.commit('SET_PAGE_COUNT', index + 1)
        }


        @Watch('$route', {immediate: true})
        private onRouteChange(): void {
            if (this.$route.path.includes('about')) {
                this.asideItems = routes[0].children[0].children || []
                this.$store.commit('SET_ROUTES_LENGTH', this.asideItems.length)
                this.$store.commit('SET_PAGE_COUNT', 1)
            }
            if (this.$route.path.includes('features')) {
                this.asideItems = routes[0].children[1].children || []
                this.$store.commit('SET_ROUTES_LENGTH', this.asideItems.length)
                this.$store.commit('SET_PAGE_COUNT', 1)
            }
            if (this.$route.path.includes('penthouses')) {
                this.asideItems = routes[0].children[2].children || []
                this.$store.commit('SET_ROUTES_LENGTH', this.asideItems.length)
                this.$store.commit('SET_PAGE_COUNT', 1)
            }
            if (this.$route.path.includes('choose')) {
                this.asideItems = routes[0].children[3].children || []
                this.$store.commit('SET_ROUTES_LENGTH', this.asideItems.length)
                this.$store.commit('SET_PAGE_COUNT', 1)
            }
        }
    }
</script>

<style scoped lang="scss">
	.aside {
		display: flex;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		align-items: center;
		padding: 0 108px 0 55px;
		background: #fff;

		&__nav {
			list-style: none;
			padding: 0;
			margin: 0;

			li {
				margin-bottom: 38px;

				a {
					font-family: Roboto, sans-serif;
					font-size: 13px;
					color: #505050;
					text-decoration: none;
					z-index: 1;
				}
			}
		}
	}

	.aside-is-active {
		position: relative;
		font-weight: bold;
		font-size: 14px;
		text-transform: uppercase;
		color: #262525;

		&:after {
			position: absolute;
			content: '';
			left: 0;
			bottom: -2px;
			width: 100%;
			height: 9px;
			background: #EBD8CC;
			z-index: -1
		}
	}

</style>
