<template>
  <div class="flex flex-col min-h-[100vh]">
    <header class="flex-in-sb py-4 px-3 relative z-10">
      <div class="flex-in-row">
        <Icon class="mr-2" name="logos:vue" />
        <Icon name="logos:unocss" />
      </div>
      <ul v-if="headTabList.length" class="flex-in-row">
        <li v-for="(item, index) in headTabList" :key="index">
          <NuxtLink
            class="mr-3 text-[#374151] opacity-60 hover:opacity-100 transition-opacity text-lg"
            :to="item.link"
            >{{ item.label }}</NuxtLink
          >
        </li>
      </ul>
    </header>
    <main class="flex flex-col flex-grow">
      <slot />
    </main>
    <footer
      class="fixed bottom-0 left-0 right-0 w-full flex-in-box sm:flex-row text-[#555] text-sm py-2">
      <span>2023-PRESENT © Roy</span>
    </footer>
  </div>
</template>

<script setup>
  const headTabList = ref([
    {
      label: 'home',
      link: '/',
    },
    {
      label: 'articles',
      link: '/articles',
    },
    {
      label: 'navigation',
      link: '/navigation',
    },
  ]);
</script>

<style></style>
