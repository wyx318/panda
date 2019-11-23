<template>
    <div>
        <w-button>默认按钮</w-button>
        <w-button icon="settings">设置</w-button>
        <w-button icon="thumbs-up">点赞</w-button>
        <w-button icon="download" icon-position="right">下载</w-button>
        <w-button :loading="true">登录中</w-button>
    </div>
</template>

<script>
    import Button from '../../../src/button'
    import ButtonGroup from '../../../src/button-group'

    export default {
        components: {
            'w-button': Button,
            'w-button-group': ButtonGroup
        }
    }
</script>
