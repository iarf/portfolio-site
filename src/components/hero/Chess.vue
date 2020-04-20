<template>
	<b-row class="project">
		<b-col cols="11" md="5" class="preview">
			<img src="../../assets/img/chessthumb.jpg" alt="">
		</b-col>
		<b-col cols="12" md="6" lg="4">
			<article>
				<h2>Master Chess Opening Explorer</h2>
				<p>A visual interface to consume the <a href="https://github.com/niklasf/lila-openingexplorer">Lichess opening explorer API</a>. Built using vanilla javascript, a user is able to position pieces on a chess board (HTML5 canvas) and see statistics on master-level games which contained that position.</p>
				<div class="buttons">
					<b-button squared href="https://github.com/iarf/chess-openings" target="_blank"><i class="fab fa-github"></i> View code</b-button>
					<b-button squared href="http://ianflom.com/projects/chess-explorer" target="_blank"><i class="fas fa-bolt"></i> Live demo</b-button>
				</div>
			</article>
		</b-col>
		<b-col cols="12" md="6" lg="3" class="skills">
			<h3>Built with</h3>
			<ul>
				<li>Javascript</li>
				<li>HTML5</li>
				<li>CSS3
					<ul><li>Sass</li></ul>
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
</style>