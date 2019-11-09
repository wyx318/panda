<template>
	<div class="popover" @click.stop="xxx">
		<div class="content-wrapper" v-if="visible" @click.stop>
			<slot name="content"></slot>
		</div>
		<slot></slot>
	</div>
</template>

<script>
  export default {
    name: "pandaPopover",
    data() {
      return {
        visible: false
      }
    },
    methods: {
      xxx: function () {
        this.visible = !this.visible
        if (this.visible !== true) return; else {
          this.$nextTick(() => {
            let eventHandler = () => {
              console.log('点击关闭');
              this.visible = false
              console.log('删除');
              document.removeEventListener('click', eventHandler)
            }
            document.addEventListener('click', eventHandler)
          })
        }
      }
    }
  }
</script>

<style scoped lang="scss">
	.popover {
		display: inline-block;
		vertical-align: top;
		position: relative;
		
		.content-wrapper {
			position: absolute;
			bottom: 100%;
			left: 0;
			border: 1px solid red;
			box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
			}
		}
</style>