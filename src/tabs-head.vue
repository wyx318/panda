<template>
	<div class="tabs-head">
		<slot></slot>
		<div class="actions-wrapper">
			<slot name="actions"></slot>
		</div>
	</div>
</template>
<script>
  export default {
    name: 'pandaTabsHead',
    inject: ['eventBus'],
    created() {
      // console.log('爷爷给爸爸的eventBus');
      // console.log(this.eventBus);
    }
  }
</script>
<style lang="scss" scoped>
	$tab-height: 40px;
	.tabs-head {
		display: flex;
		height: $tab-height;
		justify-content: flex-start;
		align-items: center;
		border: 1px solid red;
		
		> .actions-wrapper {
			margin-left: auto;
			padding: 0 10px;
			}
		}
</style>