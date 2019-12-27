<template>
  <div name="showList">
      <ul class="goodList">
          <li v-for="goods in list" v-bind:key="goods.id">
              <!-- 绑定到src -->
              <img class="img-cls" v-bind:src="goods.imgUrl">
              <p>{{goods.goodNme}}</p>
          </li>
      </ul>
  </div>
</template>
<style>
    .goodList li{
        width: 320px;
        height: 200px;
        /* 列表签的点曲调 */
        list-style: none;
        float: left;
        font-size: 15px;
        color: red;
    }
    .goodList li .img-cls{
        width: 300px;
        height: 200px;
    }
</style>
<script>
export default {
    name:"showList",
    data(){
        var _this=this;
        // 同级组件传值
        // 从public后开始获取地址,then为回调函数
        var url="";
        if(_this.goodId ==1 ){
            url="json/bjb.json";
        }else if(_this.goodId ==2){
            url="json/sj.json";
        }
        this.$http.get(url).then(function(res){
            // res.data 中的data 为关键字,是获取res中的数据
            _this.list=res.data;
        });
        //返回list数组
        return {
            list:[]
        }
    },
    // 父子组件传值:props
    props:{
        // 类型是 number类型
        goodId:Number
    },
    // 监听父组件 传递的goodId是否改变,如果改变就会捕捉到
    // watch 必须是已经有了一个值,发生改变 才会捕捉到(第二次的)
    watch:{
        goodId(){
            var _this=this;
            var url ="";
            if(_this.goodId ==1 ){
                url="json/bjb.json";
            }else if(_this.goodId ==2){
                url="json/sj.json";
            }
            this.$http.get(url).then(function(res){
                _this.list=res.data;
            });
            return {
                list:[]
            };
        }
    }
}
</script>

