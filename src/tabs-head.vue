<template>
	<div class="tabs-head">
		<slot></slot>
		<slot name="actions"></slot>
	</div>
</template>
<script>
  export default {
    name: 'pandaTabsHead'
  }
</script>
<style lang="scss" scoped>
	.tabs-header {}
</style>