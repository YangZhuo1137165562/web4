<template>
  <div class="msg-page">
      <div class="items" v-for="item in data" :key="item.id">
        <div class="pic">
          <img :src="item.img" alt="">
        </div>
        <div class="item-con">
          <p>{{item.name}}</p>
          <p>{{item.desc}}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  computed:{
    data(){
      return this.$store.state.arr
    }
  },
  mounted(){
    this.$store.dispatch("getData")
  }
}
</script>

<style>
.msg-page{
  width: 100%;
  height: 100%;
}
.msg-page .items{
  display: flex;
  padding-left: 20px;
}
.msg-page .items .item-con{
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>