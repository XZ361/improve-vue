<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <!-- 插槽作用：分发内容或子组件 -->
    <slot></slot>
    <!-- 显示校验错误信息 -->
    <p v-if="vaildateStatus ==='error'" class="error">{{ errorMessage }}</p>
  </div>
</template>
<script>
// 0.绑定；label和prop属性
// 1.获取当前输入框的规则
// 2.如果输入框和规则不匹配，显示错误信息
// 3.input组件输入内容时，通知formItem做校验（校验方法）
// 4.使用async-validator做校验
import Schema from 'async-validator';
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
  inject:['form'],
  created() {
    this.$on('validate',this.validate);
  },
  methods: {
    validate(value){
      console.log(value);
      // let descriptor = {};//存储校验规则，来自于父组件Form

      // 获取校验对象==获取Form组件==》获取rules[this.prop]
      // console.log(this.$parent.rules);
      // 这块最好是provide/inject获取，因为父组件下可能有多个包裹元素或组件，$parent可能获取不到准确的父组件
      // 获取校验器对象 console.log(this.form.rules);
      // console.log(this.form.rules[this.prop]);
      // 用户名框绑定的是name，this.prop就是name；同理pwd也是
      //  descriptor[this.prop] = this.form.rules[this.prop];
      let descriptor = {
        [this.prop]: this.form.rules[this.prop]
      }
      const validator = new Schema(descriptor);
      // let obj = {};
      // obj[this.prop] = value;
      validator.validate({[this.prop]:value},errors=>{
        if(errors){
          // 显示错误
          this.vaildateStatus = 'error';
          this.errorMessage = errors[0].message;
        }else{
          // 错误置空
          this.vaildateStatus = ' ';
          this.error = '';
        }
      })
    }
  }
};
</script>
<style scoped>
.error{
  color:red;
}
</style>