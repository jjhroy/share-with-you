<template>
  <div class="flex flex-col py-3 px-4 bg-[#fff] rounded-md transition-all">
    <NuxtLink class="flex flex-col relative rounded-md" to="/hello">
      <img class="w-full h-full flex-shrink-0 rounded-md" :src="props.thumb" />
    </NuxtLink>
    <div class="text-[16px] text-[#1a1a1a] font-semibold mt-2">
      <span>{{ props.title }}</span>
    </div>
    <div class="text-[14px] text-[#7a7a7a] mt-1">
      <span>{{ props.desc }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    title: string;
    desc: string;
    thumb: string;
    link: string;
    publishTime: string;
    updateTime: string;
  }>();
</script>

<style scoped lang="scss"></style>
