<template>
  <v-row>
    <v-col cols="12" md="4">
      <v-carousel show-arrows="hover" interval="8000" continuous cycle>
        <v-carousel-item
          @click="redirect('/titles/' + item?.id)"
          v-for="(item, id) in leftItems"
          :src="item?.primaryImage?.url"
          :key="id"
          cover
        ></v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col cols="12" md="4">
      <v-carousel show-arrows="hover" interval="7000" continuous cycle>
        <v-carousel-item
          @click="redirect('/titles/' + item?.id)"
          v-for="(item, id) in centerItems"
          :src="item?.primaryImage?.url"
          :key="id"
          cover
        ></v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col cols="12" md="4">
      <v-carousel show-arrows="hover" interval="8000" continuous cycle>
        <v-carousel-item
          @click="redirect('/titles/' + item?.id)"
          v-for="(item, id) in rightItems"
          :src="item?.primaryImage?.url"
          :key="id"
          cover
        ></v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const props = defineProps(["titles"]);
const leftItems = ref([...props?.titles?._value?.results].slice(0, 3));
const rightItems = ref([...props?.titles?._value?.results].slice(3, 6));
const centerItems = ref([...props?.titles?._value?.results].slice(6, 10));

function redirect(route: string): void {
  navigateTo(route);
}
</script>

<style scoped>
.plain-text {
  text-decoration: none;
}
</style>
