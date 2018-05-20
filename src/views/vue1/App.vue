<template>
  <div class="core-wrap">
    <div class="sample">
      {{text}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        text: 'i\'m a test text!',
      }
    },
  }
</script>

<style rel="stylesheet/less" lang="less">
  .core-wrap  {
    background: #f1f1f1;
    .sample {
      color: red;
    }
  }
</style>