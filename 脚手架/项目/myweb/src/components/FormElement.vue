<template>
  <div>
    <h3>form表单</h3>
    <!-- 自研Ui -->
    {{ ruleForm }}
    <f-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <f-form-item label="用户名" prop="name">
        <f-input type="text" v-model="ruleForm.name"></f-input>
      </f-form-item>
      <f-form-item label="密码" prop="pwd">
        <f-input type="password" v-model="ruleForm.pwd"></f-input>
      </f-form-item>
      <f-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </f-form-item>
    </f-form>

    <!-- elementUi -->
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="名称" prop="name">
        <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input type="password" v-model="ruleForm.pwd" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm2('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// form负责定义数据，绑定校验规则
// formItem负责显示错误信息
// input负责数据的双向绑定
// provide、inject 依赖注入，内部共享数据 
import fInput from "./fInput.vue";
import fFormItem from "./fFormItem.vue";
import fForm from "./fForm.vue";
export default {
  components: {
    fInput,
    fFormItem,
    fForm
  },
  data() {
    return {
      ruleForm: {
        name: '',
        pwd: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名称' },
          { min: 6, max: 10, message: '请输入6~10位名称' },
        ],
        pwd: [
          { required: true, message: '请输入密码',min:4 }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      console.log(formName);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    submitForm2(formName) {
      console.log(formName);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },  
  }
};
</script>
<style lang='' scoped>
</style>