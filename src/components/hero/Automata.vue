<template>
	<b-row class="project">
		<b-col cols="11" md="5" class="preview">
			<img src="../../assets/img/automata.jpg" alt="">
		</b-col>
		<b-col cols="12" md="6" lg="4">
			<article>
				<h2>3D Cellular Automata</h2>
				<p>A visualization tool for 3-dimensional cellular automata written in Javascript. It uses Three.js for the 3D graphics. I was curious about the behavior of algorithms like Conway's Game of Life when interpolated to a 3D space.</p>
				<div class="buttons">
					<b-button squared href="https://github.com/iarf/Automata3D" target="_blank"><i class="fab fa-github"></i> View code</b-button>
					<b-button squared href="http://ianflom.com/projects/automata3d/" target="_blank"><i class="fas fa-bolt"></i> Live demo</b-button>
				</div>
			</article>
		</b-col>
		<b-col cols="12" md="6" lg="3" class="skills">
			<h3>Built with</h3>
			<ul>
				<li>Javascript
					<ul>
						<li>Three.js</li>
					</ul>
				</li>
				<li>HTML5</li>
				<li>CSS3</li>
			</ul>
		</b-col>
	</b-row>
</template>

<script>
export default {

}
</script>

<style lang="sass">
</style>