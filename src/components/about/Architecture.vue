<template>
	<section class="section">
		<div class="section__description">
			<div class="section__description-wrapper">
				<h1>Архитектура</h1>
				<p>
					{{croppedText}}
					<a
						href="#"
						class="section__dots"
						@click.prevent="isCroppedText = !isCroppedText"
					>...</a>
				</p>
				<div>
					<span>{{pageCount}}</span> / <span>{{currentRoutesLength}}</span>
				</div>
			</div>
		</div>
		<div class="section__image">
			<img src="../../assets/img/architecture.png" alt="">
		</div>
	</section>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: "Architecture",
    })

    export default class Architecture extends Vue {
        private sectionText = 'Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни. Современный двор европейского уровня — территория для детей, игр на свежем воздухе и вечерних'
        private isCroppedText = true

        get pageCount(): number {
            return this.$store.state.pageCount
        }

        get currentRoutesLength(): number {
            return this.$store.state.currentRoutesLength
        }

        get croppedText(): string {
            return this.isCroppedText ?
                this.sectionText.split(' ').slice(0, 10).join(' ') :
                this.sectionText
        }
    }
</script>
