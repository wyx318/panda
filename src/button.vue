<template>
    <button :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')"
            class="g-button">
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
  export default {
    //  接受传递的参数 给一个默认的值
    // props: ['icon', 'iconPosition']
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        //属性检查器
        validator(value) {
          return !(value !== 'left' && value !== 'right');
        }
      }
    }
  }
</script>
<style lang="scss">
    /*loading 动画设置*/
    @keyframes spic {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }

    }

    /*loading 动画设置*/
    .loading {
        animation: spic 2s infinite linear;
    }

    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        /*弹性盒子布局 默认值*/
        > .content {
            order: 2;
        }

        > .icon {
            order: 1;
            margin-right: 0.1em;
        }

        &.icon-right {
            > .content {
                order: 1;
            }

            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: 0.1em;
            }
        }
    }

</style>