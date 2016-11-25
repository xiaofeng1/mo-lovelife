<template>
  <div class="sortImg mt-1">
   	<a v-for="sortImg in data" :href="sortImg.url" @click="tongJi(sortImg.title)">
   		<img :src="sortImg.img">
   	</a>  
  </div>
</template>

<script>
	export default{
		data(){

			return {
				data : _data.detail
			}
		},

		methods:{
			tongJi
		}
	}
</script>

<style lang="scss">
	.sortImg{
		padding-top:.2rem;
		padding-bottom: .34rem;
		a{
			margin-top: .22rem;
			margin-left:.26rem;
			
			img{
				width:3.22rem;
			}
		}
	}
</style>