<template>
	<div>
		<div>
			<div class="card" v-for="item in results" :key="item.id">
				<div class="card-divider">
					{{ item.title }}
				</div>
				<div class="class-section">
					{{ item.abstract }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import Vue from 'vue'
	Vue.prototype.$http = axios

	export default{
		data(){
			return{
				results:[]
			}
		},
		mounted(){
			this.$http.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=47ad13524e454a098f63d001c7786bd9")
			.then(response => {
				console.info(response.data.results)
				this.results = response.data.results
			})
		}
	}

</script>

<style>
	.card{
		width: 200px;
		height: 300px;
		float:left;
		border:solid 1px #000;
		margin: 10px;
	}
	.card-divider{
		width: 100%;
		height: 100px;
		background-color: #999;
	}
	.card-section{
		width: 100%;
		height: 50px;
	}
</style>