<template>
  <div>
    <!-- 实现双向数据绑定 -->
    <!-- v-model=== :value @input -->
    <input :type="type" :value="inputValue" @input="handleInput">
  </div>
</template>
<script>
export default {
  name: 'fInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value:{
      type: String,
      default: ""
    }
  },
  data() {
    return {
      inputValue: this.value
    }
  },
  methods: {
    handleInput(e){
      // 实现双向数据绑定
      this.inputValue = e.target.value
      this.$emit('input',this.inputValue)
      // 通知父组件更新
      this.$parent.$emit('validate',this.inputValue);
    }
  }
};
</script>
<style lang='' scoped>
</style>