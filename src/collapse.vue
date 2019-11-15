<template>
	<div class="collapse">
		<slot></slot>
	</div>
</template>

<script>
  export default {
    name: "PandaCollapse"
  }
</script>

<style scoped lang="scss">
	$grey: #ddd;
	$border-radius: 4px;
	.collapse {
		border: 1px solid $grey;
		border-radius: $border-radius;
		border-bottom: none;
		}
</style>