<template>
	<div id="app">
			<router-view/>
	</div>
</template>

<style lang="scss">
	@import './assets/sass/styles.scss';

	html, body {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}

	body {
		position: relative;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}

	#app {
		flex: 1 0 auto;
		font-family: 'Gilroy', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #262525;

		& > div {
			position: relative;
			display: flex;
			flex-direction: column;
			flex: 1 0 auto;
			height: 100%;
			padding-left: calc(100% / 5);
			padding-right: calc(60px);
			padding-top: calc(60px);
		}
	}
</style>
