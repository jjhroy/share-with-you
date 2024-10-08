<template>
  <div
    class="flex flex-col justify-center items-center mx-[5%] sm:mx-auto mt-[15%]">
    <div
      class="relative w-full sm:w-[640px] min-h-[48px] rounded-[24px] shadow-[0_1px_6px_0_#20212447] overflow-hidden">
      <div
        class="flex justify-center items-center w-full md:w-[600px] h-[48px] px-4">
        <!-- <div
            class="flex gap-x-1 w-[22px] hover:w-auto overflow-x-hidden hover:overflow-auto transition-all">
            <Icon
              v-for="{ icon, key, color } in searchEngineList"
              class="flex-shrink-0 cursor-pointer"
              :style="{ color: color }"
              :name="icon"
              size="22px"
              @click="switchEngine(key)" />
          </div> -->
        <Icon
          class="flex-shrink-0 cursor-pointer text-[#1a1a1a] mr-3"
          name="iconamoon:search-bold"
          size="18" />
        <input
          v-model="searchKeyWord"
          @input="getInput"
          @keyup.enter="toSearchPage"
          @blur="isFocus = false"
          @focus="isFocus = true"
          placeholder="想你所想"
          class="w-full h-[48px] outline-none bg-transparent text-[#1a1a1a] caret-pink-500" />
      </div>
      <ul
        v-if="suggestList.length && isFocus"
        class="flex flex-col max-h-[400px] scrollbar-custom">
        <li v-for="word in suggestList" :key="word">
          <NuxtLink
            class="flex-in-row text-gray-600 hover:bg-[#20212419] py-3 px-4"
            :to="`${searchEngineList[0].baseUrl}${word}`"
            external
            target="_blank">
            <Icon
              class="flex-shrink-0 cursor-pointer mr-3"
              name="iconamoon:search-bold"
              size="18" />
            <span>{{ word }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useGlobalStore, globalStore } from '~/stores/global';
  import type { IBaiduSuggestion, ISearchEngine } from '~/typings/navigation';
  import fetchJsonp from 'fetch-jsonp';

  const { engineKey } = useGlobalStore();
  const { switchEngine } = globalStore();
  const searchKeyWord = ref('');
  const suggestList = ref<string[]>([]);
  const searchEngineList = ref<ISearchEngine[]>([
    {
      key: 'google',
      color: '',
      icon: 'logos:google-icon',
      baseUrl: 'https://www.google.com/search?q=',
    },
    {
      key: 'bing',
      color: '#247ec3',
      icon: 'cib:bing',
      baseUrl: 'https://bing.com/search?q=',
    },
    {
      key: 'baidu',
      color: '#2932e1',
      icon: 'simple-icons:baidu',
      baseUrl: 'https://www.baidu.com/s?wd=',
    },
  ]);
  const isFocus = ref(false);
  const engineKeys = ['baidu', 'google', 'bing'];
  const currentEngineKey = ref(
    engineKeys.includes(engineKey.value) ? engineKey.value : 'baidu'
  );
  const currentEngine = ref(
    searchEngineList.value.find((item) => item.key === currentEngineKey.value)
  );

  // 切换搜索引擎
  // const switchEngine = (key: string) => {
  //   const cur = searchEngineList.value.find((item) => item.key === key);
  //   searchEngineList.value[0] = searchEngineList.value[index];
  //   searchEngineList.value[index] = cur;
  // };
  // 获取联想数据
  const suggestionList = () => {
    fetchJsonp(`https://suggestion.baidu.com/su?wd=${searchKeyWord.value}`, {
      jsonpCallback: 'cb',
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (json: IBaiduSuggestion) {
        suggestList.value = json.s;
      })
      .catch(function (ex) {
        console.log('parsing failed', ex);
      });
  };
  // 输入节流
  const getInput = useThrottle({ interval: 500 }, () => {
    if (searchKeyWord.value !== '') {
      suggestionList();
    } else {
      suggestList.value = [];
    }
  });
  // 发起搜索
  const toSearchPage = () => {
    if (searchKeyWord.value) {
      window.open(
        `${searchEngineList.value[0].baseUrl}${searchKeyWord.value}`,
        '_blank'
      );
    }
  };
</script>

<style scoped lang="scss"></style>
