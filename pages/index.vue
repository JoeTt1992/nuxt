<template>
  <section class="container">
    <div>
      <el-button type="primary" class="mybtn" @click="selectCity()">选择城市</el-button>
      <el-radio v-model="radio" label="1">北京</el-radio>
      <el-radio v-model="radio" label="2">上海</el-radio>
    </div>
    <div>
      <el-button type="danger" class="mybtn" @click="returnName()">重置姓名</el-button>
      <el-input v-model="name" placeholder="请输入姓名"></el-input>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

export default {
  components: {
    AppLogo
  },
  data(){
    return{
      radio : '1',
      name:''
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
      this.name = ''
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.mybtn{
  margin-right: 20px;
}
</style>
