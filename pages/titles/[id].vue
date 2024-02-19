<template>
  <div>
    <Head>
      <Title>{{ title?.titleText?.text }}</Title>
      <Meta
        name="description"
        content="Welcome to our Movie Explorer project developed using Nuxt.js!"
      />
    </Head>
    <v-row>
      <v-col cols="12" md="5">
        <v-img
          class="align-end text-white"
          height="600"
          :src="title?.primaryImage?.url"
          :alt="title?.primaryImage?.caption?.plainText"
          cover
        ></v-img>
      </v-col>
      <v-col cols="12" md="7">
        <h1>{{ title?.titleText?.text }}</h1>
        <h2>{{ title?.releaseYear?.year }}</h2>
        <v-chip-group>
          <v-chip v-for="(item, id) in imdb?.genres?.genres" :key="id">
            {{ item?.text }}
          </v-chip>
        </v-chip-group>
        <h3 class="mt-2">Plot</h3>
        <p>{{ imdb?.plot?.plotText?.plainText }}</p>
        <h3 class="mt-2">Cast</h3>
        <v-chip-group>
          <v-chip
            v-for="(item, id) in imdb?.cast?.edges"
            :key="id"
            prepend-icon="mdi-account-circle"
          >
            {{ item?.node?.name?.nameText?.text }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
interface TitleProps {
  data?: {
    _value?: {
      results?: {
        titleText?: { text?: string };
        releaseYear?: { year?: number };
        primaryImage?: { url?: string; caption?: { plainText?: string } };
      };
    };
  };
}
interface IMDBProps {
  data?: {
    _value?: {
      genres?: {
        genres?: { id?: string; text?: string; __typename?: string }[];
      };
      plot?: { plotText?: { plainText?: string } };
      cast?: {
        edges?: {
          node?: { name?: { id?: string; nameText?: { text?: string } } };
        }[];
      };
    };
  };
}
const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const headers = {
  "X-RapidAPI-Key": runtimeConfig.public.API_KEY,
  "X-RapidAPI-Host": runtimeConfig.public.API_HOST,
};

const IMDBheaders = {
  "X-RapidAPI-Key": runtimeConfig.public.API_KEY,
  "X-RapidAPI-Host": runtimeConfig.public.IMDB_HOST,
};

const titleRequest = await useFetch(
  "https://" + runtimeConfig.public.API_HOST + "/titles/" + route.params.id,
  { headers }
);

const IMDBRequest = await useFetch(
  "https://" + runtimeConfig.public.IMDB_HOST + "/v1/title/",
  { headers: IMDBheaders, params: { id: route.params.id } }
);

const imdb = ref((IMDBRequest as IMDBProps)?.data?._value);
const title = ref((titleRequest as TitleProps)?.data?._value?.results);
</script>
