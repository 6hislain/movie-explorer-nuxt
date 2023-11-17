<template>
  <v-sheet class="mx-auto mb-2">
    <v-slide-group show-arrows>
      <v-slide-group-item
        v-for="(genre, id) in items"
        :key="id"
        v-slot="{ isSelected, toggle }"
      >
        <v-btn
          class="my-2 mx-1"
          :color="isSelected ? 'primary' : 'grey-lighten-2'"
          @click="toggle"
          rounded
        >
          {{ genre }}
        </v-btn>
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
