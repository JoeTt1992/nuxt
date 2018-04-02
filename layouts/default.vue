<template>
  <div>
    <div class="slide">
      <div class="slide-item"><nuxt-link class="mylink" to="/">首页</nuxt-link></div>
      <div class="slide-item"><nuxt-link class="mylink" :to="{name:'slider'}">form页面</nuxt-link></div>
      <div class="slide-item"><nuxt-link class="mylink" :to="{name:'slider-about'}">关于页面</nuxt-link></div>
    </div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
  $width:1280px;
  $height:1000px;
  $slide-w:150px;
  $line-height:$height;

  *{
    padding: 0;
    margin: 0;
  }
  .mylink{
    text-decoration: none;
    color: #fff;
  }
  .item{
    height: 50px;
  }
  .slide{
    width: $slide-w;
    height: $height;
    float:left;
    background-color: #409EFF;
    color: white;
  }
  .slide-item{
    height:40px;
    line-height:40px;
    text-align:center;
  }
  .slide-item:hover{
    background-color:#2C8EF4;
  }
</style>
