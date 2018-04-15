<template>
	<div>
		<slot name="fff">ppp</slot>
		<div class="btnclick" @click="myevent">{{clickme}}</div>
		<p>{{formCount}}</p>
		<h1>实战一下vuex和axios</h1>
	</div>	
</template>

<script>
import Vue from 'vue'

export default{
	data(){
		return{
			clickme: "点我"
		}
	},
	props:{
		formCount:{
			type: Number
		}
	},
	methods:{
		myevent:function(){
			this.$emit('on-change')
		}
	}
}
</script>

<style scoped>
	.btnclick{
		width: 200px;
		height: 50px;
		border: solid 1px red;
	}
</style>
