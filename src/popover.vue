<template>
	<div class="popover" @click.stop="xxx">
		<div class="content-wrapper" ref="contentWrapper" v-show="visible" @click.stop>
			<slot name="content"></slot>
		</div>
		<span ref="triggerWrapper">
			<slot></slot>
		</span>
	</div>
</template>

<script>
  import content from "./content";

  export default {
    name: "pandaPopover",
    data() {
      return {
        visible: false
      }
    },
    mounted() {
      console.log(this.$refs.triggerWrapper);
    },
    methods: {
      xxx: function () {
        this.visible = !this.visible
        if (this.visible !== true) return; else {
          this.$nextTick(() => {
            document.body.appendChild(this.$refs.contentWrapper)
            let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
            this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            let eventHandler = () => {
              this.visible = false
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
		}
	
	.content-wrapper {
		position: absolute;
		border: 1px solid red;
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
		transform: translateY(-100%);
		}

</style>