<template>
  <div class="v-main-wrapper">
    <v-header/>
<keep-alive>
  <router-view></router-view>
</keep-alive>


  </div>
</template>

<script>



  import VHeader from "./layouts/v-header";
  export default {
    components: {
      VHeader
    },
    props: {},
    data() {
      return {
        title: '1main wrapper'
      }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
    }
  }
</script>

<style>
.v-main-wrapper{
  max-width: 1100px;
  margin: 0 auto;
}
</style>