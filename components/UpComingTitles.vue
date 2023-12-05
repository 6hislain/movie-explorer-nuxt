<template>
  <v-row>
    <v-col cols="8">
      <v-carousel show-arrows="hover" interval="5000" continuous cycle>
        <v-carousel-item
          :src="item?.primaryImage?.url"
          v-for="(item, id) in items"
          :key="id"
          cover
        ></v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const props = defineProps(["titles"]);
const items = ref(props?.titles?._value?.results);
</script>

<style scoped>
.plain-text {
  text-decoration: none;
}
</style>
