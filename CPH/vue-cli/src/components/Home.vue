<template>
	<div class="home">
		<div class="dog-gif"><img src="https://media.giphy.com/media/5WISrfbvjH5xd6rJMq/giphy.gif" /></div>
		<div class="text-container">
			<span class="headline"> Hello, I'm a UX developer</span>
			<div class="salmon-line"></div>
			<span class="description">
				<p>I plan and conduct user research, take those insights and create user experience deliverables, work with stakeholders to design the experience and interface, and eventually build and maintain the frontend.</p> 
				<p>This portfolio highlights examples in frontend development.</p>
				<p class="construction"> &#9786; It's also under construction &#9786; </p>
			</span>
		</div>
		<!-- <span class="long-arrow"><i class="fas fa-arrow-down"></i></span> -->
	</div>
    
</template>

<script>
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
	margin: 1rem;
	padding: 3rem;
	position: relative;
	display: flex;
	justify-content: space-between;
	border: 4px solid $primary;
	@include touch {
		flex-direction: column;
	}
}

.dog-gif {
	width: initial;
	@include touch {
		position: absolute;
	}
}

.text-container {
	display: flex;
	flex-direction: column;
	max-width: 70%;
	width: 70%;
	padding: 3rem 5rem 0;
	@include touch {
		background-color: white;
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 100%;
		padding: 1rem;
	}
}
.headline {
	font-family: Avenir;
	font-weight: 900;
	font-size: 4.5rem;
	line-height: 1.3;
}
.description {
	width: 550px;
	margin-top: 1.5rem;
	line-height: 1.8;
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
