<template>
	<div>
		<g-button>默认按钮</g-button>
		<g-button icon="setings">默认按钮</g-button>
		<g-button :loading="true">默认按钮</g-button>
		<g-button disabled>默认按钮</g-button>
		<pre>
			<code>
				{{content}}
			</code>
		</pre>
	</div>
</template>

<script>
	
  import Button from "../../../src/button"

  export default {
    mounted () {
      import('./iconfont.js').then(icon => {})
    },
    components: {
      'g-button': Button,
    },
    data() {
      return {
        content: `
<g-button>默认按钮</g-button>
<g-button icon="setings">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>
					`
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>
