<template>
  <v-row no-gutters>
    <v-col md="12"><Genres :genres="genresRequest.data" /></v-col>
    <v-col md="12"><UpComingTitles :titles="upcomingRequest.data" /></v-col>
    <v-col md="12">
      <h4 class="text-h4 my-3">Movies</h4>
      <RandomTitles :titles="randomRequest.data" />
    </v-col>
    <v-col md="12">
      <h4 class="text-h4 my-3">Series</h4>
      <RandomTitles :titles="randomSeriesRequest.data" />
    </v-col>
  </v-row>
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
const upcomingRequest = await useFetch(
  runtimeConfig.public.API_URL + "/titles/x/upcoming",
  { headers, query: { limit: 15 } }
);
const randomRequest = await useFetch(
  runtimeConfig.public.API_URL + "/titles/random",
  { headers, query: { limit: 20, list: "most_pop_movies" } }
);
const randomSeriesRequest = await useFetch(
  runtimeConfig.public.API_URL + "/titles/random",
  { headers, query: { limit: 20, list: "most_pop_series" } }
);
</script>
