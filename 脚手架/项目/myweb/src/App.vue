<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li v-for="(item,index) in cartLists" :key="index">
        <h3>{{ item.title }}</h3>
        <p>{{ item.price }}</p>
      </li>
    </ul>
    <my-cart :title="title" :cart="cartLists"></my-cart>
  </div>
</template>

<script>
import myCart from "./components/cart.vue";
export default {
  name: 'App',
  data() {
    return {
      title:'购物车',
      cartLists:[],
      // cartLists:[
      //   {id:1,title:'vue课程',price:30,count:1,active:true},
      //   {id:1,title:'react课程',price:60,count:1,active:true},
      // ]
    }
  },
  components: {
    myCart
  },
  created () {
    // this.getContent();
    this.$fetch.get('/api/cartList')
      .then(res=>{
        this.cartLists = res.data.data;
      }).catch(err=>{
        console.log(err);
      })
  },
  methods: {
    getContent() {
      // this.$fetch.get('/api/cartList')
      // .then(res=>{
      //   this.cartLists = res.data.data;
      // }).catch(err=>{
      //   console.log(err);
      // })
      
      // try {
      //   const res =await this.$fetch.get('/api/cartList');
      //   this.cartLists = res.data.data;
      // } catch (error) {
      //   console.log(error);
      // }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
