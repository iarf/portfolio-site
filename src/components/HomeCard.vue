<template>
		<div class="about-card">
			<div  class="info">
				<a @click="$store.commit('heroNav','About')"><i class="fas fa-home" style="cursor:pointer;"></i></a>
				<a href="https://github.com/iarf" target="_blank"><i class="fab fa-github"></i></a>
				<a href="https://codepen.io/iarf/" target="_blank"><i class="fab fa-codepen"></i></a>
				<a href="mailto:ianrflom@gmail.com" target="_blank"><i class="fas fa-envelope-square"></i></a>
			</div>
		</div>
</template>

<script>
export default {
	props: [
		'name',
		'skills',
		'thumbnail'
	]

}
</script>

<style lang="sass" scoped>
.about-card
	height: 180px
	color: #dde3eb
	position: relative
	overflow: hidden
	margin-top: .5em
	.info
		position: absolute
		width: 100%
		text-align: center
		font-size: 2rem
		padding-top: 2rem
		display: flex
		justify-content: space-around
		a
			text-decoration: none
			color: inherit
			transition: all .3s ease-in-out
			&:hover
				transform: scale(1.2)
				color: white
</style>