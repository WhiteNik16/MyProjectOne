<template>
  <div id="app">
    <v-main-wrapper>
    </v-main-wrapper>
  </div>
</template>

<script>
  import vMainWrapper from '../src/components/v-main-wrapper'
export default {
  name: 'App',
   components:{
     vMainWrapper
   }


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
  background-image:linear-gradient(deepskyblue ,deepskyblue, dodgerblue);

}

</style>
