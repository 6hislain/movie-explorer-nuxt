<template>
  <v-row>
    <v-col cols="12" md="8">
      <v-carousel show-arrows="hover" interval="5000" continuous cycle>
        <v-carousel-item
          :src="item?.primaryImage?.url"
          v-for="(item, id) in items"
          :key="id"
          cover
        ></v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col cols="12" md="4">
      <v-list>
        <v-list-item
          :key="id"
          v-for="(item, id) in items"
          :title="item?.titleText?.text"
          :subtitle="item?.releaseYear?.year"
        />
      </v-list>
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
