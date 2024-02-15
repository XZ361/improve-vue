<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li v-for="(item,index) in cartLists" :key="index">
        <h3>{{ item.title }}</h3>
        <p>{{ item.price }}</p>
        <el-button @click="addCart(index)" type="success">添加商品</el-button>
      </li>
    </ul>
    <my-cart :title="title"></my-cart>
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
    }
  },
  components: {
    myCart
  },
  created () {
    this.getContent();
  },
  methods: {
    getContent() {
      this.$fetch.get('/api/cartList')
      .then(res=>{
        this.cartLists = res.data.result;
      }).catch(err=>{
        console.log(err);
      })
    },
    addCart(i){
      const good = this.cartLists[i];
      this.$bus.$emit('addCart1',good);
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