<template>
  <div>
    <h1 class='v-title'>Catalog</h1>
    <div class="filters">
      <v-select
          :options="categories"
          @select="sortByCategories"
          :selected="selected"

      />

    <div class="range-slider">
      <input
          type="range"
          min="0"
          max="4000"
          step="10"
          v-model.number="minPrice"
          @change="setRangeSliders"
      >
      <input
          type="range"
          min="0"
          max="9000"
          step="10"
          v-model.number="maxPrice"
          @change="setRangeSliders"
      >
    </div>
      <div class="range-values">
        <p>Min:{{minPrice}}</p>
        <p>Max:{{maxPrice}}</p>
      </div>
    </div>

<div class='v-catalog'>
  <router-link :to="{name:'cart', params:{cart_data: CART}}">
    <div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
  </router-link>
  <router-link :to="{name:'pagedev'}">
    <div class="v-link_pagedev">PageDev</div>
  </router-link>



  <v-catalog-item class="v-catalog-item" v-for="product in filterProducts"
                  :key="product.article"
                   v-bind:product_data="product"
                   @addToCart="addToCart"
  />
</div>
</div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import{mapActions, mapGetters} from 'vuex'
import vSelect from '../../components/select/v-select'
export default {
  components: {
    vCatalogItem,
    vSelect
  },
  props: {},
  data() {
    return {
      categories: [
        {name: 'Все', value: 'All'},
        {name: 'Мужские', value: 'м'},
        {name: 'Женские', value: 'ж'}
      ],
      selected: 'Все',
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 9000,

    }


  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART',

    ]),
    filterProducts() {
      if(this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS
      }
      },
  },
  methods: {

    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    setRangeSliders(){
      if(this.minPrice>this.maxPrice){
        let tmp= this.maxPrice;
        this.maxPrice =this.minPrice;
        this.minPrice=tmp;
      }
      this.sortByCategories()
    },
    sortByCategories(category) {
      let vm = this;
      this.sortedProducts=[...this.PRODUCTS]
      this.sortedProducts=this.sortedProducts.filter(function (item){
        return item.price>=vm.minPrice && item.price<=vm.maxPrice
      })
      if(category){
        this.sortedProducts=this.sortedProducts.filter(function (e) {
          vm.selected = category.name;

          return e.category === category.name
        })
      }


    },
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },

  mounted() {
    this.GET_PRODUCTS_FROM_API()
    this.sortByCategories()
  }
}


</script>

<style>
.v-catalog{

  display: flex;
  flex-wrap: wrap;
  justify-content: normal;
  align-items: center;




}

.v-title
{
  align-items: center;

}
.v-catalog__link_to_cart{
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 14px;
  border: solid 1px #aeaeae;
  background: #26ae68;
  color: #e7e7e7;
}
.v-link_pagedev{
  position: absolute;
  top: 10px;
  right: 93px;
  padding: 14px;
  border: solid 1px #aeaeae;
  background: #26ae68;
  color: #e7e7e7;
}
.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}
.range-slider svg, .range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
}
input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
.filters {
   display: flex;
   justify-content: space-between;
   align-items: center;
 }


</style>