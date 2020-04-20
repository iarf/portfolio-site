<template>
	<b-col>
		<b-col class="about" cols="12" md="6" lg="4">
			<h1>Hi, I'm Ian.</h1>
			<h2>I'm a web developer.</h2>
			<p>I'm passionate about creating things that teach, inspire, and improve productivity. Use the navigation below to see some projects I've worked on. Feel free to <a href="mailto:ianrflom@gmail.com" class="light">email me</a> with any inquiries.</p>
			<b-button squared href="http://ianflom.com/docs/resume.pdf" target="_blank"><i class="fas fa-file"></i> Resume (pdf)</b-button>
		</b-col>
	</b-col>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.about
	margin-top: 3rem
	a.light
		color: #b0d0e8
	h2
		font-size: 1rem
		color: #99a5ba
@media only screen and (min-width: 700px)
	.about
		margin-left: 5rem
		margin-top: 4rem
</style>