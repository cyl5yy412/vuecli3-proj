<template>
    <div>
        <div v-if="kk==1">
            <!-- 父组件往子组件传值 -->
           <good-list :goodId="1"/>
        </div>
        <div v-if="kk==2">
            <good-list :goodId="2"/>
        </div>
    </div>
</template>

<script>
    import Msg from './Msg.js';
    import GoodList from './goodList.vue';
export default {
    data(){
        return {
            kk:0,
        }
    },
    mounted:function(){
        var _this=this;
        Msg.$on('val',function(m){
            _this.kk = m;
        })
    },components:{
        GoodList,
    }
}
</script>

<style>

</style>