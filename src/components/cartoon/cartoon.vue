<template>
  <div class="cartoon mt-1" >
	<a :href="data.banner.url" @:click="tongJi(data.banner.title)">
		<img :src="data.banner.img">
	</a>
	<a :href="data.enter1.url" @:click="tongJi(data.enter1.title)">{{data.enter1.title}}</a>
	<a :href="data.enter2.url" @:click="tongJi(data.enter2.title)">{{data.enter2.title}}</a>
  </div>
</template>

<script>
	export default{
		name: 'cartoon',
		data(){
			return{
				data: _data.four
			}
		},

		methods:{
			tongJi
		}
	}
</script>

<style lang="scss">
	@import '../../scss/base.scss'; 
	.cartoon{
		position: relative;

		a:nth-child(1){
			img{
				width: 100%;
			}
		}
		a:nth-child(2),a:nth-child(3){
			width: 3.05rem;			
			position: absolute;			
			bottom:.36rem;	
		}
		a:nth-child(2){
			@include bg-btn-radius(#aa9ffd,#7867fc,#6357f8);
			left: .28rem;
			
		}
		a:nth-child(3){
			@include bg-btn-radius(#fe92be,#ff57a6,#eb3e90);
			left:3.86rem;
		}
	}
</style>