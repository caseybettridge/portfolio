<template>
	<div class="home is-flex">
		<div class="dog-gif"></div>
		<div class="text-container">
			<span class="headline"> Hello, I'm a frontend developer</span>
			<div class="salmon-line"></div>
			<span class="description">
				<p>I plan and conduct user research, take those insights and create UX deliverables, work with stakeholders to design the experience and interface, and build and maintain the frontend.</p> 
				<p>This portfolio highlights frontend development.</p>
				<!-- <p class="construction"> &#9786; It's also under construction &#9786; </p> -->
			</span>
			<!-- <span class="elements">
				<span> Research </span> + <span> Design UX </span> + <span> Design UI </span> + <span> Code </span>
			</span> -->
			<!-- <text-circle></text-circle> -->
		</div>
		<!-- <span class="long-arrow"><i class="fas fa-arrow-down"></i></span> -->
	</div>
    
</template>

<script>
import TextCircle from './Circle'

export default {
	name: 'Home',
	components: {
		TextCircle
	},
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
	padding: 3rem;
	position: relative;
	display: flex;
	justify-content: space-between;
	border: 4px solid $primary;
	@include touch {
		flex-direction: column;
		border: none;
		padding: 1rem;
		padding-top: 0;
		margin: 0;
	}
}

.dog-gif {
	height: 480px;
	width: 100%;
	background-image: url('https://media.giphy.com/media/5WISrfbvjH5xd6rJMq/giphy.gif');
	background-size: cover;
	background-repeat: no-repeat;
	background-position-y: 20%;
	@include touch {
	}
}	

.text-container {
	display: flex;
	flex-direction: column;
	max-width: 100%;
	width: 100%;
	padding: 3rem 5rem 0;
	padding-top: 2rem;
	@include touch {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 100%;
		padding: 1rem;
		top: -3rem;
	}
}
.headline {
	font-family: Avenir;
	font-weight: 900;
	font-size: 4.5rem;
	line-height: 1.3;
	@include touch {
		font-size: 3.5rem;
		background-color: white;
		padding: 1rem;
	}
}
.description {
	font-family: 'Noto Serif JP', serif;
	font-size: 0.9rem;
	font-weight: 500;
	width: 500px;
	margin-top: 1.5rem;
	line-height: 2;
	@include touch {
		width: 100%;
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
}
.long-arrow {
	font-size: 1rem;
	color: black;
	width: 100%;
	height: 2rem;
	margin-top: 2rem;
}
.construction {
	font-size: 0.77rem;
	color: gray;
}


</style>
