<template>
	<footer class="footer">
		<ul class="footer__rights">
			<li>Разработано в Mst</li>
			<li>2018</li>
		</ul>
	</footer>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: "Footer",
    })
    export default class Footer extends Vue {
    }
</script>

<style scoped lang="scss">
	.footer {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		background: #fff;

		&__rights {
			display: flex;
			margin: 0;
			padding: 21px 0 21px 56px;
			list-style: none;

			li {
				font-size: 13px;
				letter-spacing: 0.175729px;
				text-transform: uppercase;
				color: #505050;

				&:nth-child(1) {
					padding-right: 24px;
				}

				&:nth-child(2) {
					position: relative;
					padding-left: 24px;

					&:before {
						position: absolute;
						content: '';
						width: 1px;
						height: 14px;
						top: 0;
						left: 0;
						background: #7c7c7c;
					}
				}
			}
		}
	}
</style>
