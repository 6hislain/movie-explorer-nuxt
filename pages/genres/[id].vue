<template>
  <section>
    <h4 class="text-h4 my-3">{{ route.params.id }}</h4>
    <v-row>
      <v-col cols="12" md="3" v-for="(item, id) in items" :key="id">
        <v-card>
          <v-img
            class="align-end text-white"
            height="180"
            :src="item?.primaryImage?.url"
            :alt="item?.primaryImage?.caption?.plainText"
            cover
          >
          </v-img>
          <v-card-text>
            <NuxtLink :to="'/titles/' + item?.id" class="plain-text">
              {{ item?.titleText?.text }}
            </NuxtLink>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
interface TitleProps {
  data?: {
    _value?: {
      results?: {
        titleText?: { text?: string };
        releaseYear?: { year?: number };
        primaryImage?: { url?: string; caption?: { plainText?: string } };
      }[];
    };
  };
}
const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const headers = {
  "X-RapidAPI-Key": runtimeConfig.public.API_KEY,
  "X-RapidAPI-Host": runtimeConfig.public.API_HOST,
};

const titleRequest = await useFetch(runtimeConfig.public.API_URL + "/titles", {
  headers,
  query: { limit: 50, genre: route.params.id },
});

const items = ref(
  (titleRequest as TitleProps)?.data?._value?.results?.filter(
    (a: { primaryImage: { url: string } }) => a?.primaryImage?.url
  )
);
</script>

<style scoped>
.plain-text {
  text-decoration: none;
}
</style>
