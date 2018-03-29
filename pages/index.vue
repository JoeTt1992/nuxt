<template>
  <section class="container"> 
    <div class="slide">
      <div class="slide-item">form页面</div>
      <div class="slide-item">图片页面</div>
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
        <el-button type="success" class="mybtn" id="pwd" @click="showPwd()">{{pwdtext}}</el-button>
        <el-input v-model="password" class="myinput" type="password" placeholder="请输入密码" v-if="pwdinput"></el-input> 
      </div>   
      {{count}}
      <myform :form-count="nowcount"  @on-change="changecount">
        <!-- <h1 class="myslot" slot="test">father</h1> -->
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
      count : 20,
      radio : '1',
      name:'',
      pwdinput: false,
      password : '',
      pwdtext:'显示密码输入框',
      nowcount:80
    };
  },
  methods:{
    changecount: function(){
      this.count++;
      this.nowcount = this.count;
    },
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
        this.pwdtext = '隐藏密码输入框';
      }
      else{
        this.pwdinput = false;
        this.pwdtext = '显示密码输入框';
      }
    }
  }
}
</script>

<style lang="scss">
$width:1280px;
$height:1000px;
$slide-w:150px;
$line-height:$height;

body{
  font-size:14px;
}
.content{
  width: $width;
  padding: 20px;
  margin-left:$slide-w;
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
.mybtn{
  float: left;
  margin-right: 20px;
}
.myinput{
  float: left;
  width: 200px;
}
</style>