<template>
  <v-row>
    <v-col cols="12" md="3">
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-img
              class="align-end text-white"
              height="180"
              :src="items[11]?.primaryImage?.url"
              cover
            >
            </v-img>
            <v-card-text>
              <NuxtLink :to="'/titles/' + items[11]?.id" class="plain-text">
                {{ items[11]?.titleText?.text }}
              </NuxtLink>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-img
              class="align-end text-white"
              height="180"
              :src="items[7]?.primaryImage?.url"
              cover
            >
            </v-img>
            <v-card-text>
              <NuxtLink :to="'/titles/' + items[7]?.id" class="plain-text">
                {{ items[7]?.titleText?.text }}
              </NuxtLink>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="6">
      <v-carousel show-arrows="hover" interval="5000" continuous cycle>
        <v-carousel-item
          :src="item?.primaryImage?.url"
          v-for="(item, id) in items"
          :key="id"
          cover
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
              :src="items[3]?.primaryImage?.url"
              cover
            >
            </v-img>
            <v-card-text>
              <NuxtLink :to="'/titles/' + items[3]?.id" class="plain-text">
                {{ items[3]?.titleText?.text }}
              </NuxtLink>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-img
              class="align-end text-white"
              height="180"
              :src="items[5]?.primaryImage?.url"
              cover
            >
            </v-img>
            <v-card-text>
              <NuxtLink :to="'/titles/' + items[5]?.id" class="plain-text">
                {{ items[5]?.titleText?.text }}
              </NuxtLink>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
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
