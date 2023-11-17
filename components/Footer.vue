<template>
  <v-footer class="d-flex flex-column pa-0">
    <div class="bg-teal d-md-flex w-100 align-center px-4">
      <strong>
        The extensive movie catalogue powered by MoviesDatabase @ RapidAPI
      </strong>
      <v-spacer></v-spacer>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
    </div>
    <div class="px-4 py-2 bg-grey-darken-4 text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Movie Explorer</strong>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
const icons = ref([
  "mdi-facebook",
  "mdi-twitter",
  "mdi-linkedin",
  "mdi-instagram",
]);
</script>
