<template>
  <ul class="hot bor-t">
   	<li v-for="hot in data">
   		<a :href="hot.url" @click="tongJi(hot.title)"><span>{{hot.desc}}</span>{{hot.title}}</a>
   	</li>
  </ul>
</template>

<script>
	export default {
	  data () {
	    return {
	    	data:_data.hot
	    };
	  },

		methods:{
			tongJi
		}
	};
</script>

<style lang="scss">
	@import '../../scss/base.scss'; 
	.hot{
		background:$color-fff url(./hot.png) no-repeat 0 bottom;
		background-size: 1.4rem 1.16rem;
		height: 1.16rem;
		//兼容安卓4.3系统
		border-top-width: 1px;
		li{
			margin-left: 1.4rem;
			border-left: 1px solid $color-d9;
			height: .58rem;
			line-height: .58rem;
			span{
				border:solid 1px  #ff5353;
				border-radius:2px;
				padding-top:.04rem;
				padding-right: .1rem;
				padding-left:.1rem;
				margin-left: .2rem;
				margin-right: .15rem;

			}
		}
		li:nth-child(1){
			padding-top: .1rem;
			height: .54rem;
			line-height: .54rem;
		}
	}
</style>