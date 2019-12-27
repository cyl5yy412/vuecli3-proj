<template>
  <div>
      <div class="title">热门推荐</div>
      <ul class="menu">
        <!-- 写几个时间就要实现几个时间,否则会出错 -->
          <li @click="menu1">图片一</li>
          <li @click="menu2">图片二</li>
          <li>图片三</li>
          <li>图片四</li>
          <li>图片五</li>
          <li>图片六</li>
          <li>图片七</li>
          <li>图片八</li>
          <li>图片九</li>
          <li>图片十</li>
      </ul>
  </div>
</template>

<script>
// 引入目录在同一级,使用 ./
// 引入事件总线
import Msg from './Msg.js'
export default {
  methods:{
    menu1:function(){
      // $emit 触发 on事件:第一个参数 参数名,第二个:参数值
      // 将 1赋值在val中,触发Msg的on事件
      Msg.$emit("val", "1")
    },
    menu2:function(){
      Msg.$emit("val", "2")
    },
  }
}
</script>
  

<style>
  .title{
    width: 100px;
    color: red;
  }
  .menu li{
    list-style:none;
    height: 50px;
    margin-bottom: 2px;
    background-color: white;
    line-height: 50px;
    /* 手型指针 */
    cursor: pointer;
  }
</style>