<template>
  <div class=""> </div>
  <div v-if="articleList.length" class="grid grid-cols-4 gap-4">
    <ArticleCard
      v-for="item in articleList"
      :key="item.id"
      :title="item.title"
      :thumb="item.thumb"
      :desc="item.desc"
      :link="item.link"
      :publishTime="item.publishTime"
      :updateTime="item.publishTime" />
  </div>
</template>

<script lang="ts" setup>
  const articleList = ref([
    {
      id: 1,
      title: '文章标题',
      thumb: 'https://res.qique.cn/demo/24/09/25/16-38-278841.png',
      link: '',
      desc: '文章的副标题或者描述',
      publishTime: '',
      updateTime: '',
    },
    {
      id: 2,
      title: '文章标题',
      thumb: 'https://res.qique.cn/demo/24/09/25/16-38-278841.png',
      link: '',
      desc: '文章的副标题或者描述',
      publishTime: '',
      updateTime: '',
    },
    {
      id: 3,
      title: '文章标题',
      thumb: 'https://res.qique.cn/demo/24/09/25/16-38-278841.png',
      link: '',
      desc: '文章的副标题或者描述',
      publishTime: '',
      updateTime: '',
    },
    {
      id: 4,
      title: '文章标题',
      thumb: 'https://res.qique.cn/demo/24/09/25/16-38-278841.png',
      link: '',
      desc: '文章的副标题或者描述',
      publishTime: '',
      updateTime: '',
    },
    {
      id: 5,
      title: '文章标题',
      thumb: 'https://res.qique.cn/demo/24/09/25/16-38-278841.png',
      link: '',
      desc: '文章的副标题或者描述',
      publishTime: '',
      updateTime: '',
    },
  ]);
</script>

<style scoped lang="scss"></style>
