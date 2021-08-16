<template>
  <div class="v-main-wrapper">
<keep-alive>
  <router-view></router-view>
</keep-alive>


  </div>
</template>

<script>



  export default {
    components: {},
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
  max-width: 900px;
  margin: 0 auto;
}
</style>