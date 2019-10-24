<template>
	<div class="row" :style="rowStyle">
		<slot></slot>
	</div>
</template>
<script>
  export default {
    name: 'pandaRow',
    props: {
      gutter: {
        type: [Number, String]
      }
    },
    computed: {
      rowStyle() {
        let {gutter} = this;
        return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}
      }
    },
    mounted() {
      // console.log('row mouted');
      // console.log(this.$children);
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    }
  }
</script>
<style scoped lang="scss">
	.row {
		display: flex;
	}
</style>
