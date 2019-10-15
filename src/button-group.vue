<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script>
  export default {
    mounted() {
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        if (name !== 'button') {
          console.warn(`g-button-group 的子元素全是 g-button 你写的是 ${name}`)
        }
      }
    }
  }
</script>
<style lang="scss">
    .g-button-group {
        display: inline-flex;
        vertical-aline: middle;


        > .g-button {
            border-radius: 1px;

        }

        > .g-button:not(:first-child) {
            margin-left: -1px;

        }

        > .g-button:first-child {
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);

        }

        > .g-button:last-child {
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }

        > .g-button:hover {
            position: relative;
            z-index: 1;
        }

    }
</style>