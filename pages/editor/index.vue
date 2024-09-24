<template>
  <MdEditor v-model="text">
    <template #defToolbars>
          <Mark />
          <Emoji />
        </template>
  </MdEditor>
</template>

<script setup lang="ts">
import { MdEditor } from 'md-editor-v3';
import { Emoji, Mark } from '@vavt/v3-extension';
import 'md-editor-v3/lib/style.css';

const text = ref('Hello Editor!');
</script>