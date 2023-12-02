<template>
  <v-app-bar :elevation="1" color="grey-darken-4" location="top">
    <v-app-bar-title>
      <NuxtLink to="/" class="text-white">Movie Explorer</NuxtLink>
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn icon="mdi-heart"></v-btn>
      <v-btn icon="mdi-magnify"></v-btn>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<style scoped>
.text-white {
  color: whitesmoke;
  text-decoration: none;
}
</style>
