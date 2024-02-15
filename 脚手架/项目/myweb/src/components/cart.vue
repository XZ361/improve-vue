<template>
   <div>
     <h3>{{title}}</h3>
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
   props: ['title','cart'],
   data() {
     return {
      carts: this.cart,
     }
   },
   computed: {
     countNumber:function(){
      return this.carts.length;
     },
     activeCount:function(){
      return this.carts.filter((item)=>item.active).length;
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
   created () {
    
   },
   methods: {
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