<template>
	<div class="layout" :class="LayoutClass">
		<slot></slot>
	</div>
</template>
<script>
  export default {
    name: 'PandaLayout',
    data() {
      return {
        LayoutClass: {
          hasSider: false
        }
      }
    },
    //	原理 vue生命钩子函数 create 和 mounted 的 区别 发现 子组件中 中含有 某个名字PandaSider 时候 就做什么 就往自己的class上添加 对样的 操作
    mounted() {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'PandaSider') {
          this.LayoutClass.hasSider = true
        }
      })
    }

  }
</script>
<style lang="scss" scoped>
	.layout {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		border: 1px solid red;
		
		&.hasSider {
			flex-direction: row;
		}
	}
</style>