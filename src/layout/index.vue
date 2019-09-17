<template>
 <div class="app-wrapper">
     <sidebar class="sidebar-container" /><!-- sidebar -->

     <div class="main-container">
         
         <div class="fixedHeader">
             <!-- <navbar /> -->
             <!-- <tags-view v-if="needTagsView" /> -->
         </div>

         <!-- <app-main /> -->
     </div><!-- Header & Breadcrumb -->
 </div>
</template>

<script>
import { Sidebar } from './components'

export default {
    name: '',
    components:{
        Sidebar,
    },
    props:{},
    data(){
        return {
        
        }
    },
    watch:{},
    computed:{},
    methods:{},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
      
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      
    },
    //生命周期 - 创建之前
    beforeCreate() {
      
    },
    //生命周期 - 挂载之前
    beforeMount() {
      
    },
    //生命周期 - 更新之前
    beforeUpdate() {
      
    },
    //生命周期 - 更新之后
    updated() {
      
    },
    //生命周期 - 销毁之前
    beforeDestroy() {
      
    },
    //生命周期 - 销毁完成
    destroyed() {
      
    },
    //如果页面有keep-alive缓存功能，这个函数会触发
    activated() {
      
    },
}
</script>

<style lang="scss" scoped>

</style>