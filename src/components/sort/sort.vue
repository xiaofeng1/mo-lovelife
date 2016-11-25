<template>
  <div class="sort mt-1">
    <div class="sort1">   
      	<h3 class="title"><em>小说</em>好看的小说推荐</h3>
      	<ul class="list-img">
      		<li>
            <a :href="data.img1.url"  @:click="tongJi(data.img1.title)">
        			<img :src="data.img1.img">   			
      		  </a>
            <a :href="data.info1.url" class="btn-img" @:click="tongJi(data.info1.title)">
              {{data.info1.title}}
            </a>
          </li>

          <li>
            <a :href="data.img2.url" @:click="tongJi(data.img2.title)">
              <img :src="data.img2.img">        
            </a>
            <a :href="data.info2.url" class="btn-img" @:click="tongJi(data.info2.title)">
              {{data.info2.title}}
            </a>
          </li>

      	</ul>	
    </div>
    <!-- 视频 -->
    <div class="sort2 mt-1">   
        <h3 class="title"><em>视频</em>娱乐全接触</h3>
        <ul class="list-img">
          <li>
            <a :href="data2.img1.url" @:click="tongJi(data2.img1.title)">
              <img :src="data2.img1.img">        
            </a>
            <a :href="data2.info1.url" class="btn-img" @:click="tongJi(data2.info1.title)">
              {{data2.info1.title}}
            </a>
          </li>

          <li>
            <a :href="data2.img2.url" @:click="tongJi(data2.img2.title)">
              <img :src="data2.img2.img">        
            </a>
            <a :href="data2.info2.url" class="btn-img" @:click="tongJi(data2.info2.title)">
              {{data2.info2.title}}
            </a>
          </li>

        </ul> 
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        data:_data.five,
        data2:_data.six
      }
    },

    methods:{
      tongJi
    }
  }
</script>

<style lang="scss">
  @import '../../scss/base.scss'; 
  .sort1,.sort2{
    padding-top: .24rem;
    .title{
      color:.24rem;
      font-weight: normal;
      margin-bottom: .22rem;
      em{
        color: $color-fff;
        background-color: #43aafd;
        border: #00a7fc solid 1px;
        border-radius: .04rem;
        padding-right:.16rem;
        padding-left: .16rem;
        margin-left: .2rem;
        margin-right: .26rem;
        padding-top:.04rem;
      }
    }
    .list-img{
        @include flex;
        li{
          display: inline-block;
          width:3.3rem;
          margin-left: .2rem;
          a{
            img{
              width: 3.3rem;
            }
          }
          .btn-img{
            @include bg-btn-radius(#8ed6fe,#35bbfd,#4ca7ef);
            width: 3.3rem;
            margin-top: .18rem;
            margin-bottom: .18rem;
          }
        }
        li:nth-child(2){
          .btn-img{
            @include bg-btn-radius(#4ce187,#27cc5e,#1ab547);
          }
        }
    }
  }
  .sort2{
    .title{
      em{
        background-color:#fe66ae;
        border-color:#ff55ab;
      }
    }
    .list-img{
        li:nth-child(1){
          .btn-img{
            @include bg-btn-radius(#fe8bba,#ff57a6,#eb408f);
          }
        }

        li:nth-child(2){
          .btn-img{
            @include bg-btn-radius(#8e80fc,#7361fc,#6e4ddc);
          }
        }
    }
      
  }
</style>