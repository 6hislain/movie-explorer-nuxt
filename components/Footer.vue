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
      <v-icon icon="mdi-xml"></v-icon> with
      <v-icon icon="mdi-heart" color="red-darken-2"></v-icon> by
      <a class="my-link" target="_blank" href="https://bio.link/6hislain">
        @6hislain
      </a>
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

<style scoped>
.my-link {
  color: #4db6ac;
  text-decoration: none !important;
}
</style>
