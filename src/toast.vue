<template>
	<div class="toast" ref="wrapper" :class="toastClass">
		<div class="mesage">
			<slot v-if="!enableHtml"></slot>
			<div v-html="$slots.default[0]">bbb</div>
		</div>
		<div class="line" ref="line"></div>
		<span class="close" v-if="closeButton" @click="onClickClose">
			{{closeButton.text}}
		</span>
	</div>
</template>
<script>
  export default {
    name: 'Pandatoast',
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 50
      },
      closeButton: {
        type: Object, //对象后面必须跟上 return 主要是复用性问题
        default() {
          return {
            text: '关闭',
            callback: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0
        }
      }
    },
    created() {
      console.log(this.closeButton)
    },
    mounted() {
      this.updateStyle()
      this.execAutoClose()
    },
    computed: {
      toastClass() {
        return {
          [`position-${this.position}`]: true
        }
      }
    },
    methods: {
      execAutoClose() {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoCloseDelay * 1000)
        }
      },
      updateStyle() {
        this.$nextTick(() => {
          this.$refs.line.style.height =
            `${this.$refs.wrapper.getBoundingClientRect().height}px`
        }, 1000)
      },
      close() {
        this.$el.remove();//元素删除
        this.$destroy() //组件死掉
      },
      log() {
        console.log('测试')
      },
      onClickClose() {
        this.close();
        if (this.closeButton && typeof this.closeButton.callback === "function") {
          this.closeButton.callback(this) //this指的是 toast vue 实例
        }
      }
    },

  }
</script>
<style lang="scss" scoped>
	$font-size: 14px;
	$toast-min-height: 40px;
	$toast-bg: rgba(0, 0, 0, 0.75);
	.toast {
		font-size: $font-size;
		line-height: 1.8;
		min-height: $toast-min-height;
		color: white;
		position: fixed;
		display: flex;
		align-items: center;
		background: $toast-bg;
		border-radius: 4px;
		box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
		padding: 0 16px;
		left: 50%;
		
		
		.mesage {
			padding: 4px 0;
		}
		
		.close {
			padding-left: 16px;
			flex-shrink: 0;
		}
		
		.line {
			height: 100%;
			border-left: 1px solid #666666;
			margin-left: 16px;
			padding: 4px;
		}
		
		&.position-top {
			top: 0;
			transform: translateX(-50%);
		}
		
		&.position-bottom {
			bottom: 0;
			transform: translateX(-50%);
		}
		
		&.position-middle {
			top: 50%;
			transform: translate(-50%, -50%);
		}
	}


</style>