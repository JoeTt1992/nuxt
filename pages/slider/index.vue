<template>
	<div>
		<ul>	
			<li class="aaa" v-for="item in items" :key="item.a">
				{{ item }}
			</li>
		</ul>
	</div>
</template>

<script>

	export default{
		data(){
			return{
				items:[1,32,53,44,5]
			}
		}
	}
</script>