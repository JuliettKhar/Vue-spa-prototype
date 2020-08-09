<template>
	<aside class="aside">
		<ul class="aside__nav">
			<li v-for="(route, index) in currentAsideRoutes" :key="index" @click="onMenuItemClick(index)">
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
    import {Component, Vue} from 'vue-property-decorator';
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

        get currentAsideRoutes() {
            const currRoutes = {}
            routes[0].children.forEach((item) => {
                currRoutes[item.name] = item?.children || []
            })
            return currRoutes[this.$route.path.split('/')[1]]
        }

        onMenuItemClick(index: number): void {
            this.$store.commit('SET_PAGE_COUNT', index + 1)
        }

        mounted(): void {
            this.onMenuItemClick(0)
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
