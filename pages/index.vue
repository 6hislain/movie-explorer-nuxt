<template>
  <v-row>
    <v-col md="3">
      <v-row>
        <v-col md="12">
          <v-card>
            <v-img
              class="align-end text-white"
              height="180"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            >
            </v-img>
            <v-card-text>Top 10 Australian beaches</v-card-text>
          </v-card>
        </v-col>
        <v-col md="12">
          <v-card>
            <v-img
              class="align-end text-white"
              height="180"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            >
            </v-img>
            <v-card-text>Top 10 Australian beaches</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col md="6">
      <v-carousel show-arrows="hover" interval="5000" continuous cycle>
        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
        ></v-carousel-item>
        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
          cover
        ></v-carousel-item>
        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        ></v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col md="3">
      <v-row>
        <v-col md="12">
          <v-card>
            <v-img
              class="align-end text-white"
              height="180"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            >
            </v-img>
            <v-card-text>Top 10 Australian beaches</v-card-text>
          </v-card>
        </v-col>
        <v-col md="12">
          <v-card>
            <v-img
              class="align-end text-white"
              height="180"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            >
            </v-img>
            <v-card-text>Top 10 Australian beaches</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col md="12">
      <v-sheet class="mx-auto">
        <v-slide-group show-arrows>
          <v-slide-group-item
            v-for="n in 25"
            :key="n"
            v-slot="{ isSelected, toggle }"
          >
            <v-btn
              class="my-2 mx-1"
              :color="isSelected ? 'primary' : undefined"
              @click="toggle"
              rounded
            >
              movie {{ n }}
            </v-btn>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-col>
  </v-row>
</template>
