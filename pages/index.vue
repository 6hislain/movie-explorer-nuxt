<template>
  <div>
    <Head>
      <Title>Home - Movie Explorer Nuxt</Title>
      <Meta
        name="description"
        content="Welcome to our Movie Explorer project developed using Nuxt.js!"
      />
    </Head>
    <v-row no-gutters>
      <v-col cols="12"><Genres :genres="genresRequest.data" /></v-col>
      <v-col cols="12"
        ><BoxOfficeTitles :titles="boxOfficeRequest.data"
      /></v-col>
      <v-col cols="12">
        <h4 class="text-h4 my-3">Movies</h4>
        <GroupedTitles :titles="movieRequest.data" />
      </v-col>
      <v-col cols="12">
        <h4 class="text-h4 my-3">Series</h4>
        <GroupedTitles :titles="seriesRequest.data" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const headers = {
  "X-RapidAPI-Key": runtimeConfig.public.API_KEY,
  "X-RapidAPI-Host": runtimeConfig.public.API_HOST,
};

const genresRequest = await useFetch(
  runtimeConfig.public.API_URL + "/titles/utils/genres",
  { headers }
);
const boxOfficeRequest = await useFetch(
  runtimeConfig.public.API_URL + "/titles/random",
  { headers, query: { limit: 10, list: "top_boxoffice_last_weekend_10" } }
);
const movieRequest = await useFetch(
  runtimeConfig.public.API_URL + "/titles/random",
  { headers, query: { limit: 20, list: "top_boxoffice_200" } }
);
const seriesRequest = await useFetch(
  runtimeConfig.public.API_URL + "/titles/random",
  { headers, query: { limit: 20, list: "top_rated_series_250" } }
);
</script>
