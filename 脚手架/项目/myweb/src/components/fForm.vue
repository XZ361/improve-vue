<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  provide(){
    return {
      'form':this,//this表示提供的是当前组件实例
    }
  }
}
</script>

<style lang="scss" scoped></style>