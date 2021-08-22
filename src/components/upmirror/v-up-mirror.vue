<template>
  <div class="wrapper_v-up-mirror" ref="wrapper_v-up-mirror">
    <div class="v-up-mirror">
      <p>{{productAdd}}</p>
      <button
          class="v-up-mirror__btn"
          @click="closeMirrorBtn">
              Закрыть
      </button>
   </div>
  </div>
</template>

<script>
export default {

  data(){
    return {

      productAdd: 'Вы добавили продукт в корзину',

    }
    },
  methods:{

    closeMirrorBtn(){
      this.$emit('closeMirrorBtn')
    }
  },
  mounted() {
    let vm = this;
    document.addEventListener('click',function (item){
      if(item.target === vm.$refs['wrapper_v-up-mirror']){
        vm.closeMirrorBtn()
      }
    })
  }

}
</script>


<style>
.wrapper_v-up-mirror {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.v-up-mirror{
  box-shadow: 0 0 16px 0 ;
  background:#14ff10;
  color: black;
  width: 300px;
  top:160px;
  position: fixed;
  left: 73%;
  z-index: 15;
  border-radius:15px  ;
}
.v-up-mirror__btn
{
  color: black;
  background: #e7e7e7;
  margin-bottom: 4px;
  height: 20px;
  border-radius: 16px;
 cursor: pointer;
}

</style>