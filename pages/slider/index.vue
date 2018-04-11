<template>
	<div>
		<div class="2" @click="myspread()">
			click me
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				items:[1,32,53,44,5],
				numbers:[1,2]
			}
		},
		methods:{
			myspread:function(){
				const numbers = [1,2];
				myspread2(...numbers);
			},
			myspread2:function(x,y){
				console.info(x+y)
			}		
		}
	}
</script>