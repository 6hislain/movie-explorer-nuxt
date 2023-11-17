<template>
  <v-row>
    <v-col cols="12" md="3">
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-img
              class="align-end text-white"
              height="180"
              :src="title1?.primaryImage?.url"
              cover
            >
            </v-img>
            <v-card-text>{{ title1?.titleText?.text }}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-img
              class="align-end text-white"
              height="180"
              :src="title2?.primaryImage?.url"
              cover
            >
            </v-img>
            <v-card-text>{{ title2?.titleText?.text }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="6">
      <v-carousel show-arrows="hover" interval="5000" continuous cycle>
        <v-carousel-item
          :src="item?.primaryImage?.url"
          cover
          v-for="(item, id) in items"
          :key="id"
        ></v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col cols="12" md="3">
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-img
              class="align-end text-white"
              height="180"
              :src="title3?.primaryImage?.url"
              cover
            >
            </v-img>
            <v-card-text>{{ title3?.titleText?.text }}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-img
              class="align-end text-white"
              height="180"
              :src="title4?.primaryImage?.url"
              cover
            >
            </v-img>
            <v-card-text>{{ title4?.titleText?.text }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
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
const title1 = items.value[11];
const title2 = items.value[7];
const title3 = items.value[5];
const title4 = items.value[3];
</script>
