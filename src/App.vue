<template>
  <div id="app">
    <!-- el也用ref显示 -->   
    <banner></banner>
    <icon></icon>
    <hot></hot>
    <sortImg></sortImg>
    <cartoon></cartoon>
    <sort></sort>
  </div>
</template>

<script>
  import banner from './components/banner/banner'
  import icon from './components/icon/icon'
  import hot from './components/hot/hot'
  import sortImg from './components/sortImg/sortImg'
  import cartoon from './components/cartoon/cartoon'
  import sort from './components/sort/sort'

  export default {
    components: {
      banner,
      icon,
      hot,
      sortImg,
      cartoon,
      sort
    }
  }
</script>

<style lang="scss">
  @import './scss/base.scss';
  //爱生活页面公共
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: $color-f9;
    font-size: .24rem;
  }
  .bor-t{
    border-top:1px solid $color-d9;
  }
  .mt-1{
    margin-top: .1rem;
  }
  .mt-2{
    margin-top: .2rem;
  }
  .pb-2{
    padding-bottom: .2rem;
  }
  #app,.icon,.banner,.hot,.sortImg,.sort{
    width: 100%;
  }
  .icon,.banner,.hot,.sortImg,.sort1,.sort2,.cartoon{
    background-color: $color-fff;
  }
  .hot,.sortImg,.sort1,.sort2,.cartoon{
    -webkit-box-shadow:0  .08rem .05rem $color-ede; 
    box-shadow:0 .08rem .05rem $color-ede;
    border-top:$color-f1 solid .01px;
    border-bottom:$color-e0 solid .04rem;
  }
</style>
