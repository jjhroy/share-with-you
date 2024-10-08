<template>
  <div class="flex flex-col">
    <div id="vditor"></div>
    <div class="flex flex-row mt-3" @click="sendContent">
      <span>发送</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Vditor from 'vditor';
  import 'vditor/dist/index.css';

  const vditor = ref();
  const content = ref('');

  const sendContent = () => {
    console.log('content', vditor.value.getValue());
  };

  onMounted(() => {
    vditor.value = new Vditor('vditor', {
      height: '50vh',
      width: '50vw',
      value: '',
    });
  });
</script>
