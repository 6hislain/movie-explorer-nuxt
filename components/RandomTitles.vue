<template>
  <v-row>
    <v-col cols="12" md="3" v-for="(item, id) in items" :key="id">
      <v-card>
        <v-img
          class="align-end text-white"
          height="180"
          :src="item?.primaryImage?.url"
          cover
        >
        </v-img>
        <v-card-text>{{ item?.titleText?.text }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const props = defineProps(["titles"]);
const items = ref(
  props?.titles?._value?.results?.filter(
    (a: { primaryImage: { url: string } }) => a?.primaryImage?.url
  )
);
</script>
