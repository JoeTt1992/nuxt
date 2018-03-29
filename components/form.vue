<template>
	<div>
		<!-- <slot name="test">son test</slot>
		<slot name="test2">son test2</slot>
		<slot name="test3">ppp</slot> -->

		<div class="btnclick" @click="myevent">{{clickme}}</div>
		<p>{{formCount}}</p>
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
