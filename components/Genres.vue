<template>
  <v-sheet class="mx-auto mb-2">
    <v-slide-group show-arrows>
      <v-slide-group-item v-for="(genre, id) in items" :key="id">
        <NuxtLink :to="'/genres/' + genre">
          <v-btn class="my-2 mx-1" color="grey-lighten-2" rounded>
            {{ genre }}
          </v-btn>
        </NuxtLink>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script setup lang="ts">
const props = defineProps(["genres"]);
const items = ref(
  props?.genres?._value?.results
    .filter((a: string) => a)
    .sort(() => Math.random() - 0.5)
);
</script>
