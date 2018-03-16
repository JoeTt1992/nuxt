<template>
  <section class="container"> 
    <div class="slide">
      
    </div>
    <div class="content">
      <div class="item">
        <el-button type="primary" class="mybtn" @click="selectCity()">选择城市</el-button>
        <el-radio v-model="radio" label="1">北京</el-radio>
        <el-radio v-model="radio" label="2">上海</el-radio>
      </div>
      <div class="item">
        <el-button type="danger" class="mybtn" @click="returnName()">重置姓名</el-button>
        <el-input v-model="name" class="myinput" placeholder="请输入姓名"></el-input>
      </div>
      <div class="item">
        <el-button type="success" class="mybtn" id="pwd" @click="showPwd()">显示密码输入框</el-button>
        <el-input v-model="password" class="myinput" type="password" placeholder="请输入密码" v-if="pwdinput"></el-input> 
      </div>   
      <myform>
        <div class="myslot" slot="test">father</div>
      </myform>
    </div>   
  </section>
</template>

<script>
import myform from '~/components/form.vue'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'

Vue.use(ElementUI)

export default {
  components: {
    myform
  },
  data(){
    return{
      radio : '1',
      name:'',
      pwdinput: false,
      password : ''
    };
  },
  methods:{
    selectCity: function(){
      if(this.radio == '1'){
        this.radio = '2';
      }
      else{
        this.radio = '1';
      }
    },
    returnName: function(){
      this.name = '';
    },
    showPwd: function(){
      if(this.pwdinput == false){
        this.pwdinput = true;
        $("#pwd").html("隐藏密码输入框");
      }
      else{
        this.pwdinput = false;
        $("#pwd").html("显示密码输入框");
      }
    }
  }
}
</script>

<style lang="scss">
$width:1280px;
$height:10px;
.content{
  width: $width;
  padding: 20px;
}
.item{
  height: 50px;
}
.slide{
  width: 200px;
  height: $height;
  float:left;
  background-color: #409EFF;
  color: white;
}
.mybtn{
  float: left;
  margin-right: 20px;
}
.myinput{
  float: left;
  width: 200px;
}
</style>