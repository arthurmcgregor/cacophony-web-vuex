<template>
	<div>
		<div class="hero" />
		<div class="container-fluid">
			Home
		</div>
	</div>
</template>

<script>

	export default {
		// https://vuejs.org/v2/style-guide/#Multi-word-component-names-essential
		name:'home-view',
		// https://vuejs.org/v2/style-guide/#Component-data-essential
		data () {
			return {}
		},
		// https://vuejs.org/v2/style-guide/#Simple-computed-properties-strongly-recommended
		computed:{},
		// https://vuejs.org/v2/style-guide/#Prop-definitions-essential
		props:{}
	}
</script>
<style>
	.hero {
		background-image: url('../assets/hero/hero-theory.jpg');
		background-position: center;
		background-repeat: no-repeat;
		background-color: transparent;
		position: relative;
		margin-top: -15px;
		margin-bottom: 15px;
	}

	/* Mobiles */
	.hero {
		height: 200px;
	}

	/* Large screens */
	@media only screen and (min-width: 768px) {
		.hero {
			height: 360px;
		}
	}

</style>
