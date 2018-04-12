<template>
	<div>
		<div @click="myspread()">
			click me
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				items:[1,32,53,44,5]
			}
		},
		methods:{
			myspread2:function(x,y){
				console.info(x+y);
			},
			myspread:function(){
				const num = [1,5]
				this.myspread2(...num);
			}		
		}
	}
</script>