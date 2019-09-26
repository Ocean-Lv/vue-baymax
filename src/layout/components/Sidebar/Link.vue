<template>
  <div>
    <!-- eslint-disable vue/require-component-is -->
    <component v-bind="linkProps(to)">
      <slot/>
    </component>
  </div>
</template>

<style lang='' scoped>
</style>
<script>
export default {
  name: "",
  props: {
    to: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    linkProps(url) {
    //   if (isExternal(url)) {
    //     return {
    //       is: "a",
    //       href: url,
    //       target: "_blank",
    //       rel: "noopener"
    //     };
    //   }
      return {
        is: "router-link",
        to: url
      };
    }
  },

  watch: {}
};
</script>