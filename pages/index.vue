<template>
  <div class="flex flex-col p-[2vw]">
    <!-- <span class="mb-2">home</span>
    <div
      v-if="isDesktop"
      class="flex-in-row mb-2">
      <Icon name="logos:microsoft-icon" />
      <span class="ml-2">桌面版</span>
    </div>
    <div
      v-if="isMobile"
      class="flex-in-row mb-2">
      <Icon name="logos:apple" />
      <span class="ml-2">移动版</span>
    </div> -->
    <div class="mb-2">
      <span class="text-[16px] font-semibold cursor-pointer">so why unocss?</span>
    </div>
    <div class="mb-2">
      <span class="text-[16px] font-semibold">陶喆</span>
    </div>
    <div class="flex gap-x-4">
      <div class="cd-cover">
        <NuxtImg
          class="rounded-md w-[120px] h-[120px] hover:scale-105 transition-all"
          src="https://img.linkstarted.top/dt/dt.jpg" />
        <a
          class="my-2 font-semibold"
          href="https://www.baidu.com"
          target="_blank">
          David Tao
        </a>
        <section class="flex-in-col">
          <span>沙滩</span>
          <span>空无一人，这片沙滩</span>
        </section>
      </div>
      <div class="cd-cover">
        <NuxtImg
          class="rounded-md w-[120px] h-[120px] hover:scale-105 transition-all"
          src="https://img.linkstarted.top/dt/Imok.jpg" />
        <a
          class="my-2 font-semibold"
          href="https://www.baidu.com"
          target="_blank">
          I'm Ok
        </a>
        <section class="flex-in-col">
          <span>天天</span>
          <span>我想要天天说，天天说，天天对你说</span>
        </section>
      </div>
      <div class="cd-cover">
        <NuxtImg
          class="rounded-md w-[120px] h-[120px] hover:scale-105 transition-all"
          src="https://img.linkstarted.top/dt/Heiseliuding.jpg" />
        <a
          class="my-2 font-semibold"
          href="https://www.baidu.com"
          target="_blank">
          黑色柳丁
        </a>
        <section class="flex-in-col">
          <span>蝴蝶</span>
          <span>就像一只蝴蝶飞过废墟</span>
        </section>
      </div>
      <div class="cd-cover">
        <NuxtImg
          class="rounded-md w-[120px] h-[120px] hover:scale-105 transition-all"
          src="https://img.linkstarted.top/dt/Yuezhilu.jpg" />
        <a
          class="my-2 font-semibold"
          href="https://www.baidu.com"
          target="_blank">
          乐之路
        </a>
        <section class="flex-in-col">
          <span>runaway</span>
          <span>淡掉的感情，还坚持下去又有什么样的意义</span>
        </section>
      </div>
      <div class="cd-cover">
        <NuxtImg
          class="rounded-md w-[120px] h-[120px] hover:scale-105 transition-all"
          src="https://img.linkstarted.top/dt/The_great_leap.jpg" />
        <a
          class="my-2 font-semibold"
          href="https://www.baidu.com"
          target="_blank">
          太平盛世
        </a>
        <section class="flex-in-col">
          <span>无缘</span>
          <span>不是你的错，不是我的错，怪你我不如先想清楚</span>
        </section>
      </div>
      <div class="cd-cover">
        <NuxtImg
          class="rounded-md w-[120px] h-[120px] hover:scale-105 transition-all"
          src="https://img.linkstarted.top/dt/Taimeili.jpg" />
        <a
          class="my-2 font-semibold"
          href="https://www.baidu.com"
          target="_blank">
          太美丽
        </a>
        <section class="flex-in-col">
          <span>今天你要嫁给我</span>
          <span>DT in the house</span>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const { isMobile, isDesktop } = useDevice();

  const pageTitle = ref('this is page title');
</script>

<style scoped lang="scss">
  .flex-in-row {
    @apply flex flex-row items-center justify-start;
  }
  .flex-in-col {
    @apply flex flex-col justify-start;
  }
  .cd-cover {
    @apply flex flex-col items-center justify-center flex-grow-0 flex-shrink-0 cursor-pointer rounded-md;
  }
</style>
