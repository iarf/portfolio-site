<template>
		<div class="project-card" @click="$store.commit('heroNav','Cms')">
			<img src="../assets/img/cmsthumb.jpg" alt="" class="bg-img">
			<div  class="info">
				<h3 class="name">SimpleCMS</h3>
				<div class="skills">
					<ul>
						<li>GraphQL</li>
						<li>Apollo Server</li>
						<li>Vue</li>
						<li>Bootstrap</li>
					</ul>
				</div>
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

<style lang="sass">
.project-card
	height: 180px
	color: #dde3eb
	position: relative
	overflow: hidden
	cursor: pointer
	margin-top: .5em
	border-radius: 6px
	box-shadow: 0 0 18px -8px black
	.bg-img
		width: 100%
		position: absolute
		top: 0
		transition: all 1s ease-in-out
	.info
		position: absolute
		width: 100%
		height: 100%
	h3
		transition: all .5s ease-in-out
		font-size: 1.2rem
		background: rgba(0,0,0,.8)
		margin: 0
		padding: .4rem
		position: relative
		top: calc( 100% - 2rem )
		width: 100%
	.skills
		transition: all .5s ease-in-out
		position: absolute
		bottom: 0
		width: 100%
		background: rgba(0,0,0,.7)
		height: 0
		overflow: hidden
		ul
			padding-left: 2rem
			list-style-type: none

	&:hover
		.bg-img
			transform: scale(1.2)
		h3
			top: 0
		.skills	
			height: calc( 100% - 2rem )
</style>