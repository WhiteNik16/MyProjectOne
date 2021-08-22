<template>
<div class="v-header">
  <router-link :to="{name:'mainPage'}">
<img class="img_logo" src="../../assets/logo.png" alt="img">
  </router-link>
  <div class="search-field">
    <input
        type="text"
        v-model="searchValue"
       >
    <button class="search_btn" >
      <i class="material-icons" @click="search(searchValue)">search</i>
    </button>
    <button class="search_btn">
      <i class="material-icons" @click="clearSearchField">cancel</i>
    </button>
  </div>

</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data(){
    return{
      searchValue:''
    }
  },
  computed:{
    ...mapGetters([
        'SEARCH_VALUE'
    ])
  },
  methods:{
    ...mapActions([
      'GET_SEARCH_VALUE_TO_VUEX',
    ]),
    clearSearchField(){
      this.searchValue =''
      this.GET_SEARCH_VALUE_TO_VUEX();
      if (this.$route.path !== '/catalog') {
        this.$router.push('catalog')
      }
    },

    search(value){
      this.GET_SEARCH_VALUE_TO_VUEX(value);
      if (this.$route.path !== '/catalog') {
  this.$router.push('catalog')
    }
    },

},
}
</script>

<style>
.v-header{
  display:flex;
  justify-content: space-between;
  align-items: center;
  background: #26ae68;
  padding: 16px;
  position: absolute;
  width: 100%;
  top:0;
  left: 0;}
.img_logo{
  position: absolute;
  left: 1%;
  top:8px;
  width: 80px;

  }

.search-field{
  padding: 16px;
  color: #ffffff;
  position:relative ;
  right: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

}
.search_btn{
  background: transparent;
  border: none;
}
</style>