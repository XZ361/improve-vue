<template>
   <div>
     <h3>{{title}}</h3>
     <el-table
    ref="multipleTable"
    :data="carts"
    border
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="title"
      label="课程"
      width="120">
    </el-table-column>
    <el-table-column
      prop="price"
      label="单价"
      width="120">
    </el-table-column>
    <el-table-column
      label="数量"
      width="200">
      <template slot-scope="scope">
      <el-input-number v-model="scope.row.count" :min="1" :max="100" label="描述文字"></el-input-number>
      </template>
    </el-table-column>
    <el-table-column
      label="总价"
      width="120">
      <template slot-scope="scope">{{ scope.row.price*scope.row.count }}</template>
    </el-table-column>
  </el-table>
     <table border="1">
      <tr>
        <th>#</th>
        <th>课程</th>
        <th>单价</th>
        <th>数量</th>
        <th>总价</th>
      </tr>
      <tr v-for="(c,i) in carts" :key="i">
        <td><input type="checkbox" v-model="c.active"></td>
        <td>{{ c.title }}</td>
        
        <td>{{ c.price }}</td>
        <td>
          <button @click="substract(i)">-</button>
          {{ c.count }}
          <button @click="add(i)">+</button>
        </td>
        <td>{{ c.price*c.count }}</td>
      </tr>
      <tr>
        <td></td>
        <td colspan="2">{{ activeCount }}/{{ countNumber }}</td>
        <td colspan="2">{{ totalPrice }}</td>
      </tr>
     </table>
   </div>
</template>
<script>
export default {
   name: 'my-cart',
   props: ['title'],
   data() {
     return {
      // 数据持久化存储，防止刷新页面，数据丢失
      carts: JSON.parse(localStorage.getItem('carts')) || [],
      multipleSelection: []
     }
   },
   computed: {
     countNumber:function(){
      return this.carts.length;
     },
     activeCount:function(){
      return this.multipleSelection.filter((item)=>item.active).length;
     },
     totalPrice:function(){
      // let sum = 0;
      // this.cart.forEach((c) => {
      //   if(c.active){
      //     sum+=c.price*c.count;
      //   }
      // });
      // return sum;
      // reduce有两个参数：一个是初始值，另一个是循环单项
      return this.carts.reduce((sum,c)=>{
        if(c.active){
          sum+=c.price*c.count;
        }
        return sum;
      },0)
     }
   },
   watch: {
    carts:{
      handler(n){
        this.setLocalData(n);
      },
      deep:true
    }
   },
   created () {
    this.$bus.$on('addCart1',(good)=>{
      // console.log(good);
      let ret = this.carts.find((v)=>v.id===good.id);
      if(!ret){
        this.carts.push(good);
        // console.log(ret);
      }else{
        ret.count+=1;
        // console.log(ret);
      }
    })
   },
   methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
    // 数据持久化存储
    setLocalData(n){
      localStorage.setItem('carts',JSON.stringify(n))
    },
     remove(i){
      if(window.confirm("确定是否要删除？")){
        this.carts.splice(i,1);
      }
     },
     substract(i){
      let count = this.carts[i].count;
      count > 1 ? this.carts[i].count-=1 : this.remove(i);
     },
     add(i){
      this.carts[i].count++;
     }
   }
};
</script>
<style lang='' scoped>
</style>