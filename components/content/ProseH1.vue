<template>
  <h1>
    <slot />
  </h1>
</template>

<script setup lang="ts"></script>

<style scoped>
  h1 {
    position: relative;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    margin-top: 36px;
    margin-bottom: 10px;
    font-size: 24px;
    line-height: 1.5;
    transition: color 0.35s;
    color: #005bb7;
  }

  h1:before {
    content: '「';
    position: absolute;
    top: -6px;
    left: -14px;
  }

  h1:after {
    content: '」';
    position: relative;
    top: 6px;
    right: auto;
  }
</style>
