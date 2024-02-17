<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
// 1.设置了model和rules,做了校验规则
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
  },
  created () {
    // 缓存需要校验的表单项 
    this.fileds = [];
    this.$on('formItemAdd',item=>{
      this.fileds.push[item];
    });
  },
  methods: {
    validate(callback) {
      // 获取所有的验证结果统一处理，只要有一个失败就失败
      // tasks保存着验证之后的多个promises对象
      const tasks = this.fileds.map(item=>item.validate());
      let ret = true;
      Promise.all(tasks).then(results=>{
        results.forEach(vaild=>{
          if(!vaild){
            ret = false; 
          }
        })
        callback(ret)
      })
    }
  },
}
</script>

<style lang="scss" scoped></style>