<template>
  <div id="app">
    <v-main-wrapper>
    </v-main-wrapper>

  </div>
</template>

<script>
  import vMainWrapper from '../src/components/v-main-wrapper'
  import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'App',
   components:{
     vMainWrapper,

   },
  data() {
    return{

    }
  },
  computed:{
    ...mapGetters([

    ])
  },
  methods:{
    ...mapActions([

    ])
  },
  mounted() {

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
  background-image:linear-gradient(rgba(0, 191, 255, 0.6), rgba(0, 191, 255, 0.56), rgba(30, 144, 255, 0.53));

}


</style>
