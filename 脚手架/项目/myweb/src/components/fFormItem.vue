<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <!-- 插槽作用：分发内容或子组件 -->
    <slot></slot>
    <!-- 显示校验错误信息 -->
    <p v-if="vaildateStatus ===' error'" class="error">{{ errorMessage }}</p>
  </div>
</template>
<script>
// 0.绑定；label和prop属性
// 1.获取当前输入框的规则
// 2.如果输入框和规则不匹配，显示错误信息
// 3.input组件输入内容时，通知formItem做校验
// 4.使用async-validator做校验
export default {
  name: '',
  components: {

  },
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
   data() {
    return {
      vaildateStatus:'' ,//校验的状态值
      errorMessage:''//显示的错误信息
    }
  },
  methods: {

  }
};
</script>
<style scoped>
.error{
  color:red;
}
</style>