<template>
<div class="v-cart-item">
  <img
      class="v-cart-item__img"
      :src="require('../../assets/images/'+cart_item_data.image)" alt="">
  <div class="v-cart-item__info">
    <p>{{cart_item_data.name}}</p>
    <p>{{cart_item_data.price | toFix | formattedPrice }}</p>
    <p>{{cart_item_data.article}}</p>

  </div>
  <div class="v-cart-item__quantity">
    <p>Qty</p>
    <span>
      <span class="quantity__btn" @click="decrementItem">-</span>
        {{cart_item_data.quantity}}
        <span class="quantity__btn"  @click="incrementItem">+</span>
      </span>

  </div>
    <button @click="deleteFromCart">Delete</button>


</div>
</template>

<script>


import toFix from "../../filters/toFix";
import formattedPrice from "../../filters/price-format";
export default {
  name: "v-cart-item",
  props:{
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
    },
    data() {
      return{}
    },
  filters:{
    toFix,
    formattedPrice
  },
  methods:{
    deleteFromCart() {
      this.$emit('deleteFromCart')
    },

    incrementItem() {
   this.$emit('increment')


    },
    decrementItem(){
    this.$emit('decrement')
      }
  },
    mounted(){ this.$set(this.cart_item_data, 'quantity', 1);
    },
  }


</script>

<style>
.v-cart-item{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #c0c0c0;
  padding :20px ;
  margin-bottom: 16px

}
.v-cart-item__img{
  max-width: 70px;

}
.quantity__btn{
cursor: pointer;
}

</style>