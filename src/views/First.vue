<template>
  <div class="main">
    <div class="left">
        <Left></Left>
    </div>
    <div class="right">
        <div class="top">
            <!-- views目录里引用 在public中的直接写public 目录下的子目录进行访问 -->
            <img src="img/title/title.jpg">
        </div>
        <div class="buttom">
            <Right></Right>
        </div>
    </div>
  </div>
</template>

<script>
    // 在views视图组件里 引用 components
    import Left from '../components/Left.vue';
    import Right from '../components/Right.vue';
    //注册需要的组件
    export default{
        components:{
            Left,
            Right
        }
    }
</script>

<style>
/* 默认间距为0: *{}  */
 *{
     padding: 0;
     margin: 0;
 }
 .left{
     width: 100px;
     float: left;
     margin-left: 10px;
 }
 .right{
     width: 1000px;
     float: left;
     margin-left: 10px;
 }
 .main{
     width: 1200px;
     margin:20px auto;
 }
 .main .right .top img{
     height: 150px;
     width: 1000px;
 }
 .left,.right{
     background-color:#f5f5f5;
     height: 500px;




     /* 页面先划分div ,划分好了之后可以把div设置上背景色,和高度,看看效果 
        总div ,左侧div ,右侧 div ,右侧div又分详细的div布局
     background-color: blue;
     height: 500px; */
 }
</style>