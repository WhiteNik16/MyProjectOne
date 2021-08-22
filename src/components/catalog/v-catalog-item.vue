<template>
  <div class="v-catalog-item">




    <v-popup
      v-if="isInfoPopupVisible"
      right-btn-title="Add to Cart"
      :popupTitle="product_data.name"
      @closePopup="closeInfoPopup"
      @rightBtnAction="addToCart"
    >
      <img :src=" require('../../assets/images/'+product_data.image)" alt="img">
      <div>
        <p class="v-catalog-item__pop">{{product_data.name}}</p>

        <p class="v-catalog-item__pop">Price: {{ product_data.price | toFix| formattedPrice  }}</p>

        <p class="v-catalog-item__pop">{{product_data.category}}</p>
      </div>

    </v-popup>




    <img class="v-catalog-item__img" :src=" require('../../assets/images/'+product_data.image)"  alt="img">
     <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">Price: {{ product_data.price| toFix | formattedPrice }}</p>
    <button
    class="v-catalog-item__show-info"
    @click="showPopupInfo"
    >
      Show info
    </button>
    <button class="v-catalog-item__add_to_cart_btn btn"
            @click="addToCart"
    > Add to Cart</button>
  </div>
</template>

<script>
import vPopup from '../popup/v-popup'
import toFix from "../../filters/toFix";
import formattedPrice from "../../filters/price-format";

import Swal from 'sweetalert2';
export default {
  components:{
    vPopup,


  },
props: {
  product_data: {
    type: Object,
    default() {
      return{}
    }
  }
},
  data(){
    return{
      isVisiableMirror: false,
      isInfoPopupVisible: false
    }
  },
  filters:{
    toFix,
    formattedPrice
  },
methods:{



  showPopupInfo(){
    this.isInfoPopupVisible=true;

  },
  closeInfoPopup(){
    this.isInfoPopupVisible=false;
  },


  addToCart() {
    this.$emit('addToCart' , this.product_data)

      Swal.fire({
        title: 'Поздравляем!',
        text: 'Вы добавили товар в корзину',
        icon: 'success',
        timer: 1000,
        showConfirmButton: false,
      })
  }
  },
  mounted(){

  }


 }

</script>

<style>

.v-catalog-item{
  background-color: coral;
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;}

  .v-catalog-item__img{
  width: 100px;

   }
  .v-catalog-item__add_to_cart_btn{
    padding: 8px 16px;
    background: #26ae68;
    color: white;
    border: 0;
    border-radius: 8px;


  }


</style>