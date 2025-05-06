<script setup>
import CustomFooter from "@/components/CustomFooter.vue";
import Portfolio from "@/components/Portfolio.vue";

import cat1 from './assets/cat_1.png?w=400;800&format=webp;png&as=srcset';
import cat2 from './assets/cat_2.png?w=400;800&format=webp;png&as=srcset';
import cat3 from './assets/cat_3.png?w=400;800&format=webp;png&as=srcset';
import cat4 from './assets/cat_4.png?w=400;800&format=webp;png&as=srcset';
import cat5 from './assets/cat_5.png?w=400;800&format=webp;png&as=srcset';
import cat6 from './assets/cat_6.png?w=400;800&format=webp;png&as=srcset';
import cat7 from './assets/cat_7.png?w=400;800&format=webp;png&as=srcset';
import cat8 from './assets/cat_8.png?w=400;800&format=webp;png&as=srcset';

</script>

<template>
  <img :srcset="cat1" class="cat cat-background cat-1" alt="cat_1" />
  <img :srcset="cat2" class="cat cat-background cat-2" alt="cat_2" />
  <img v-observe :srcset="cat3" class="fade-slide-left cat cat-background cat-3" alt="cat_3" loading="lazy"/>
  <img v-observe :srcset="cat4" class="fade-slide-right cat cat-background cat-4" alt="cat_4" loading="lazy"/>
  <img v-observe :srcset="cat5" class="fade-slide-left cat cat-background cat-5" alt="cat_5" loading="lazy"/>
  <img v-observe :srcset="cat6" class="fade-slide-right cat cat-background cat-6" alt="cat_6" loading="lazy"/>
  <img v-observe :srcset="cat7" class="fade-slide-left cat cat-background cat-7" alt="cat_7" loading="lazy"/>
  <img v-observe :srcset="cat8" class="fade-slide-right cat cat-background cat-8" alt="cat_8" loading="lazy"/>

  <v-container>
    <portfolio/>
  </v-container>
  <custom-footer class="justify-center"/>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  width: 100%;
}

</style>
