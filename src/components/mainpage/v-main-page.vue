<template>
<div class="v-main-page">
  <h1>Online shop</h1>
<div>
  <v-login class="v-login"/>
</div>


  <router-link :to="{name:'catalog'}">
   <div class="v-link_catalog">Catalog</div>
  </router-link>

  <router-link :to="{name:'pagedev'}">
    <div class="v-link_pagedev">PageDev </div>
  </router-link>
</div>
</template>

<script>
import vLogin from "../v-login/v-login";
export default {
  name: "v-main-page",
  components: {
    vLogin
  }
}
</script>

<style>
.v-login{
  max-width: 200px;
  height: 215px;
}
.v-link_pagedev{
  position: absolute;
  top: 15%;
  right: 93px;
  padding: 14px;
  border: solid 1px #aeaeae;
  background: #26ae68;
  color: #e7e7e7;}
.v-link_catalog{
  position: absolute;
  top: 15%;
  right: 3px;
  padding: 14px;
  border: solid 1px #aeaeae;
  background: #26ae68;
  color: #e7e7e7;}

</style>