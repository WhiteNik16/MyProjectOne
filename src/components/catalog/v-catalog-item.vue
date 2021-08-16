<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__img" :src=" require('../../assets/images/'+product_data.image)"  alt="img">
     <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">Price: {{ product_data.price}}Грн</p>
    <button class="v-catalog-item__add_to_cart_btn btn"
            @click="addToCart"
    > Add to Cart</button>
  </div>
</template>

<script>
export default {
props: {
  product_data: {
    type: Object,
    default() {
      return{}
    }
  }
},
methods:{
  addToCart() {
    this.$emit('addToCart' , this.product_data);
  },
  mounted() {

  }


 }
}
</script>

<style>
.v-catalog-item{
  width: 50%;

  flex-basis: 25%;
  background-color: coral;

  box-shadow: 0 0 8px 0 #c0c0c0;
  padding :20px ;
  margin-bottom: 16px ;}
  .v-catalog-item__img{
  width: 150px;
   }
  .v-catalog-item__add_to_cart_btn{
    padding: 8px 16px;
    background: #26ae68;
    color: white;
    border: 0;
    border-radius: 8px;

  }


</style>