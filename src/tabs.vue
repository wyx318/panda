<template>
	<div class="tabs">
		<slot></slot>
	</div>
</template>
<script>
  import Vue from 'vue'

  export default {
    name: 'pandaTabs',
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',//横向
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      // console.log(this.$children);
      if (this.$children.length === 0) {
        console && console.warn &&
        console.warn('tabs的子组件应该是 tabs-header和tabs-nav,但你没有写')
      }
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'pandaTabsHead') {
          vm.$children.forEach((chileVm) => {
            if (chileVm.$options.name === 'pandaTabsItem' && chileVm.name === this.selected) {
              // console.log(chileVm.$el);
              this.eventBus.$emit('update:selected', this.selected, chileVm)
            }
          })
        }
      })
    }
  }
</script>
<style lang="scss" scoped>
	.tabs {}
</style>