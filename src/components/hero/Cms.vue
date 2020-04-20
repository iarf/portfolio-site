<template>
	<b-row class="project">
		<b-col cols="11" md="5" class="preview">
			<img src="../../assets/img/cmsthumb.jpg" alt="">
		</b-col>
		<b-col cols="12" md="6" lg="4">
			<article>
				<h2>SimpleCMS</h2>
				<p>A headless CMS. It utilizes a GraphQL API powered by Apollo Server. It includes a frontend admin UI which can be used for easy administration of the database. Authentication is handled using JSON Web Tokens and passwords are encrypted with Bcrypt on the backend.</p>
				<div class="buttons">
					<b-button squared href="https://github.com/iarf/blog-cms" target="_blank"><i class="fab fa-github"></i> View code</b-button>
					</div>
			</article>
		</b-col>
		<b-col cols="12" md="6" lg="3" class="skills">
			<h3>Built with</h3>
			<ul>
				<li>Javascript
					<ul>
						<li>Node.js</li>
						<li>Apollo Server</li>
						<li>Vue.js</li>
						<li>Prisma</li>
					</ul>
				</li>
				<li>GraphQL</li>
				<li>HTML5</li>
				<li>CSS3
					<ul>
						<li>Sass</li>
					</ul>
				</li>
			</ul>
		</b-col>
	</b-row>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.project
	width: 100%
	padding: 1rem
	a
		color: #b0d0e8
	.preview
		padding-top: 1rem
		img
			width: 100%
			padding-left: 1rem
	.skills
		ul
			list-style-type: none
			padding-left: 0
			font-size: 1.2rem
			li
				ul
					padding-left: 10px
					li
						font-size: 1rem
	.buttons
		padding-right: 1.2rem
		a
			color: white
</style>