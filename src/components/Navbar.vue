<template>
	<header class="header">
		<div class="header__logo">
			<router-link to="/">Первомайская</router-link>
		</div>
		<nav class="header__nav">
			<template v-for="(route, index) in navbarRoutes">
				<router-link
					:key="index"
					:to="{name: route.name}"
					v-if="route.meta"
					:class="{'is-active': isActive === index}"
					@click.native="isActive = index"
				>
					{{route.meta.title}}
				</router-link>
			</template>

		</nav>
		<div class="header__contacts">
			<a href="#">8 888 888 88 88</a>
			<div class="header__squere">
				<span></span>
			</div>
		</div>
	</header>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import { routes } from "@/router/routes";

    @Component({
        name: "Navbar",
    })
    export default class Navbar extends Vue {
        private isActive = 0

        get navbarRoutes() {
            return routes[0].children
        }
    }
</script>

<style scoped lang="scss">
	.header {
		position: absolute;
		left: 0;
		top: 0;
		width: 96%;
		display: flex;
		padding: 21px 24px;

		&__logo {
			flex-basis: 344px;
		}

		&__contacts {
			flex-basis: 230px;

			a {
				font-style: normal;
				font-weight: 800;
				font-size: 17px;
				letter-spacing: 0.290629px;
				text-transform: uppercase;
				color: #262525;
				text-decoration: none;
			}
		}

		&__nav {
			flex-grow: 1;
			text-align: center;

			a {
				margin-right: 56px;
				font-weight: 800;
				font-size: 12px;
				letter-spacing: 0.8px;
				text-transform: uppercase;
				color: #262525;
				text-decoration: none;

				&:last-child {
					margin-right: 0;
				}

			}
		}

		&__logo {
			position: relative;
			display: flex;
			padding-left: 92px;

			&:before {
				position: absolute;
				content: '';
				left: 0;
				width: 70px;
				height: 70px;
				background: #262525;
			}

			a {
				font-weight: 800;
				font-size: 17px;
				letter-spacing: 0.290629px;
				text-transform: uppercase;
				color: #262525;
				text-decoration: none;
			}
		}

		&__squere {
			position: absolute;
			right: 0;
			top: 21px;
			width: 70px;
			height: 70px;
			background: #262525;

			&:before, &:after, span {
				position: absolute;
				content: '';
				width: 1px;
				height: 10px;
				background: #fff;
			}

			&:before {
				top: 16px;
				transform: rotate(46deg);
				left: 44%;
				height: 24px;
			}

			&:after {
				bottom: 20px;
				transform: rotate(46deg);
				left: 56%;
				height: 24px;
			}

			span {
				top: 13px;
				transform: rotate(46deg);
				left: 50%;
				height: 40px;
			}
		}
	}

	.is-active {
		position: relative;

		&:after {
			position: absolute;
			content: '';
			left: 0;
			bottom: -7px;
			width: 100%;
			height: 1px;
			background: #D88F5E;
			border-radius: 5px;
		}
	}

</style>
