<template>
  <v-row>
    <v-col cols="12" md="5">
      <v-img
        class="align-end text-white"
        height="600"
        :src="title?.primaryImage?.url"
        :alt="title?.primaryImage?.caption?.plainText"
        cover
      ></v-img>
    </v-col>
    <v-col cols="12" md="7">
      <h1>{{ title?.titleText?.text }}</h1>
      <h2>Released in {{ title?.releaseYear?.year }}</h2>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
interface TitleProps {
  data?: {
    _value?: {
      results?: {
        titleText?: { text?: string };
        releaseYear?: { year?: number };
        primaryImage?: { url?: string; caption?: { plainText?: string } };
      };
    };
  };
}
const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const headers = {
  "X-RapidAPI-Key": runtimeConfig.public.API_KEY,
  "X-RapidAPI-Host": runtimeConfig.public.API_HOST,
};

const titleRequest = await useFetch(
  runtimeConfig.public.API_URL + "/titles/" + route.params.id,
  { headers }
);

const title = ref((titleRequest as TitleProps)?.data?._value?.results);
</script>
