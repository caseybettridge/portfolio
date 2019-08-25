<template>
	<div id="home" class="home is-flex">
		<div class="dog-gif"></div>
		<div class="text-container is-flex">
			<div class="headline-container is-flex">
				<span class="headline"> Casey Bettridge </span>
				<span class="sub">Frontend Developer + UX Designer</span>
				<div class="salmon-line"></div>
			</div>
			<span class="description">
				<p>I’m an interdisciplinary frontend developer with 3.5 years experience with a focus on UX. In my current role I predominantly code in Vue.JS, SCSS + HTML, design wireframes in Sketch, and conduct user research in the field. I enjoy working on ambitious web projects with other like-minded individuals.</p> 
				<p>In my spare time, I play bass in a <a href="https://hermeticorderofthegrouphug.bandcamp.com/releases" target="_blank">punk band</a> and tend to my collection of houseplants.</p> 
				<scrollactive><a href="#about" class="scrollactive-item">
					<div class="button is-primary is-hidden-touch">About</div>
					<div class="button is-primary is-hidden-desktop">Learn More</div></a>
				</scrollactive>
			</span>
		</div>
	</div>
    
</template>

<script>
import TextCircle from './Circle'

export default {
	name: 'Home',
	data: function () {
		return {

		}
	},
	methods: {

	}
}
</script>

<style lang="scss" scoped>
@import "../styles/utils.scss";

.home {
	margin: 3rem;
	padding: 4rem;
	position: relative;
	border: 4px solid $primary;
	height: 80vh;
	min-height: 600px;
	@include touch {
		flex-direction: column;
		border: none;
		padding: 1rem;
		padding-top: 0;
		margin: 0;
		height: initial;
	}
	@include desktop {
		margin-left: 0;
	}
	@include fullhd {
	}
	@media screen and (min-width: 1500px) {
		padding: 5rem;
	}
}

.dog-gif {
	height: 100%;
	width: 100%;
	max-width: 350px;
	min-width: 250px;
	background-image: url('https://media.giphy.com/media/5WISrfbvjH5xd6rJMq/giphy.gif');
	background-size: cover;
	background-repeat: no-repeat;
	background-position-y: 23%;
	@include touch {
		margin-right: 0;
		max-width: 100%;
		min-height: 550px;
	}
	@include desktop {
		margin-right: 0;
	}
	@include widescreen {
		margin-right: 1rem;
		min-width: 400px;
	}
	@include fullhd {
		margin-right: 3rem;
		width: 35%;
		min-width: 35%;
	}
	@media screen and (min-width: 1500px) {
		width: 40%;
		min-width: 40%;
		margin-right: 5rem;
	}
}	

.text-container {
	flex-direction: column;
	max-width: 100%;
	width: 100%;
	padding: 2rem;
	max-width: 650px;
	@include touch {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 100%;
		padding: 1rem;
		top: -3rem;
	}
	@include desktop {
		padding: 0.5rem 2rem;
	}
	@include widescreen {
		padding: 1rem 2rem;
	}
	@include fullhd {
		padding: 0.5rem 1rem;
	}
}
.headline-container {
	flex-direction: column;
	justify-content: space-between;
}
.headline {
	font-family: Avenir;
	font-weight: 900;
	line-height: 1.3;
	@include mobile {
		font-size: 2.5rem;
		background-color: white;
		padding: 0.5rem 1rem;
	}
	@include tablet {
		font-size: 3.5rem;
		background-color: white;
		padding: 1rem;
	}
	@include desktop {
		font-size: 2.2rem;
		padding: 0 0 0.25rem 0;
	}
	@include widescreen {
		font-size: 2.75rem;
		padding: 0.5rem 0;
	}
	@include fullhd {
		font-size: 4rem;
		padding: 0;
	}
	@media screen and (min-width: 1500px) {
		padding: 1rem 0;
	}
}
.sub {
	line-height: 1;
	margin: 1rem 0;
	font-weight: 500;
	@include touch {
		background-color: white;
		padding: 0.5rem 1rem;
		margin: 0;
		margin-bottom: 0.5rem;
		font-size: 1.5rem;
	}
	@include desktop {
		font-size: 1.5rem;
		margin: 0.5rem 0;
		line-height: 1.25;
	}
	@include fullhd {
		font-size: 2rem;
	}

}
.description {
	font-family: 'Noto Serif JP', serif;
	font-weight: 500;
	line-height: 1.75;
	max-width: 650px;
	margin-top: 0.5rem;
	@include touch {
		width: 100%;
	}
	@include desktop {
		font-size: 0.8rem;
		line-height: 1.75;
	}
	@include widescreen {
		font-size: 0.85rem;
	}
	@include fullhd {
		font-size: 0.9rem;
		line-height: 2;
		margin-top: 1.5rem;
	}
	@media screen and (min-width: 1500px) {
		font-size: 1rem;
	}
	p {
		margin-top: 0.75rem;
	}
}
.elements {
	margin-top: 2rem;
	span {
		font-weight: 900;
		margin: 0 1rem;
	}
	span:first-child {
		margin-left: 0;
	}
}
.salmon-line {
	height: 7px;
	width: 50px;
	background-color: $primary;
	margin-top: 0.5rem;
	@include fullhd {
		margin-top: 1rem;
	}
}

.button {
	padding: 1.25rem 3rem;
	font-family: Avenir;
	margin-top: 2rem;
	border-radius: 0;
}

</style>
