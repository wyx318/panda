<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly"

    >
    <template v-if="error">
      <icon name='error' class="icon-error"></icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>
<script>
  import Icon from './icon'

  export default {
    components: {Icon},
    name: 'panda-input',
    props: {
      value: {
        type: String,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      error: {
        type: String
      }
    }
  }
</script>
<style lang="scss" scoped>
  /*--button-height: 32px;*/
  /*--font-size: 14px;*/
  /*--button-bg: white;*/
  /*--button-active-bg: #eee;*/
  /*--border-radius: 4px;*/
  /*--color: #333;*/
  /*--border-color: #999;*/
  /*--border-color-hover: #666;*/
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #F1453D;

  .wrapper {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;

    > :not(:last-child) {
      margin-right: .5em;
    }

    > input {
      height: 32px;
      border: 1px solid $border-color;
      border-radius: 4px;
      padding: 0 8px;
      font-size: inherit;

      &:hover {
        border-color: $border-color-hover;
      }

      &:hover {
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }

      &[disabled], &[readonly] {
        border-color: #bbb;
        color: #bbb; /*  鼠标样式*/
        cursor: not-allowed;
      }
    }

    &.error {
      > input {
        border-color: $red;
      }
    }

    .icon-error {
      fill: $red;
    }

    .errorMessage {
      color: $red;
    }
  }
</style>