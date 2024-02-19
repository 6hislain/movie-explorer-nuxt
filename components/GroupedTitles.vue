<template>
  <v-row>
    <v-col cols="12" md="3" v-for="(item, id) in items" :key="id">
      <v-card>
        <v-img
          cover
          height="360"
          :src="item?.primaryImage?.url"
          class="align-end text-white hover"
          @click="redirect('/titles/' + item?.id)"
          :alt="item?.primaryImage?.caption?.plainText"
        >
        </v-img>
        <v-card-text>
          <NuxtLink :to="'/titles/' + item?.id" class="plain-text">
            {{ item?.titleText?.text }}
          </NuxtLink>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const props = defineProps(["titles"]);
const items = ref(props?.titles?._value?.results);

function redirect(route: string): void {
  navigateTo(route);
}
</script>

<style scoped>
.plain-text {
  text-decoration: none;
}
.hover {
  cursor: pointer;
}
</style>
