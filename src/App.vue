<template>
  <div class="app">
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">
      <router-link to="/msg">消息</router-link>
      <router-link to="/my">我的</router-link>
      <router-link to="/kong">空间</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style:none;
}
html,body,#app,.app{
  width: 100%;
  height: 100%;
}
a{
  text-decoration: none;
  color: #000;
}
.app{
  display: flex;
  flex-direction: column;
}
.app .main{
  flex:1;
  overflow: auto;
}
.app .footer{
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display:flex;
  justify-content: space-around;
  align-items: center;
}
</style>