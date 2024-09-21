<template>
  <h2>
    <slot />
  </h2>
</template>

<script lang="ts" setup>

</script>

<style scoped>
h2 {
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  margin-top: 36px;
  margin-bottom: 10px;
  font-size: 24px;
  line-height: 1.5;
  transition: color .35s;
  color: #005bb7;
}

h2:before {
  content: "「";
  position: absolute;
  top: -6px;
  left: -14px
}

h2:after {
  content: "」";
  position: relative;
  top: 6px;
  right: auto
}
</style>