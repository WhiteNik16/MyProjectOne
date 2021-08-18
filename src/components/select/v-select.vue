<template>
<div class="v-select">
  <p
    class="v-select_title"
   @click="areOptionsVisible=!areOptionsVisible"
    @selected="selected"
  >{{ selected }}
  </p>
  <div class="v-select_options"
  v-if="areOptionsVisible || isExpanded">

    <p
    v-for="option in options"
    :key="option.value"
    @click="selectOption(option)"
    >
      {{option.name}}
    </p>
  </div>
</div>
</template>

<script>
export default {
  props: {
    options:{
      type: Array,
      default() {
        return[]
      }
    },
    selected:{
      type: String,
      default:''


    },
    isExpanded:{
      type: Boolean,
      default: false
      }
    },

  data(){
    return{
      areOptionsVisible: false
    }
  },
  methods:{
    selectOption(option){
      this.$emit('select',option)
      this.areOptionsVisible = false;
    },
    hideSelect(){
      this.areOptionsVisible = false;
    }
  },
  mounted() {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click',this.hideSelect)
  }
}


</script>

<style>
.v-select_title{
  border: solid 2px;
  background: #e7e7e7;

}
.v-select{
  position: relative;
  width: 200px;
  cursor: pointer;
}
.v-select p{
  margin: 0;
}
.v-select_options{
  border: solid 1px #acacac;
  position: absolute;
  top:21px;
  right: 0;
  width: 99%;
  background: #e7e7e7;
}
.v-select_options p:hover{
  background: #26ae68;

}
</style>