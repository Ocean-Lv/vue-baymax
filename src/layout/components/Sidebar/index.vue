<template>
  <div class="sidebar_index">
    <h1 style="font-size: 12px;">siderIndex</h1>

    <el-menu
      mode="vertical"
      :default-active="activeMenu"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      :unique-opened="false"
      :collapse-transition="false"
      @open="handleOpen"
      @close="handleClose"
    >
      <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'
import variables from "@/styles/variables.scss";

export default {
  name: "",
  components: {
    SidebarItem
  },
  props: {},
  data() {
    return {
      isCollapse: true,
      permission_routes: Array
      // treeList: this.$store.state.routers
    };
  },
  watch: {},
  computed: {
    activeMenu() {
      this.$store.commit('SET_ROUTES')
      this.permission_routes = this.$store.state.routers;
      console.log(this.permission_routes);
    },
    variables() {
      return variables;
    }

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //生命周期 - 创建之前
  beforeCreate() {},
  //生命周期 - 挂载之前
  beforeMount() {},
  //生命周期 - 更新之前
  beforeUpdate() {},
  //生命周期 - 更新之后
  updated() {},
  //生命周期 - 销毁之前
  beforeDestroy() {},
  //生命周期 - 销毁完成
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {}
};
</script>

<style lang="scss" scoped>
</style>