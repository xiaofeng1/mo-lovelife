<template>
	<div class="banner">
		<img :src="data" ref="img">
	</div>
</template>

<style lang="scss">
	.banner{
		img{
			width:100%;
		}
	}
</style>

<script>
  export default{
    data(){
      return{
        data:_data.banner
      }
    },
  }
</script>