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
      <!-- <Item :model="treeData" /> -->
    </el-menu>
  </div>
</template>

<script>
import variables from "@/styles/variables.scss";
import tree from "@/json/treeData";

export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      isCollapse: true,
      treeData: null
    };
  },
  watch: {},
  computed: {
    activeMenu() {
      console.log(tree);
      // treeData = treeData
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