<template>
  <v-app-bar
    :elevation="1"
    color="rgba(38, 50, 56, 1)"
    location="top"
    title="Movie Explorer"
  >
    <template v-slot:append>
      <v-btn icon="mdi-heart"></v-btn>

      <v-btn icon="mdi-magnify"></v-btn>

      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>
