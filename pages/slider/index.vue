<template>
	<div>
		初始值为：{{before}}
		<div @click="myspread()">
			点我
			添加后的值为:{{ result }}
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				items:[1,32,53,44,5],
				before:0,
				result:''
			}
		},
		methods:{			
			myspread(){
				const num = [1,5];
				this.myspread2(...num);
			},
			myspread2(x,y){
				this.result = x+y
			}	
		}
	}
</script>