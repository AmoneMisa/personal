<script setup>
import CustomFooter from "@/components/CustomFooter.vue";
import Portfolio from "@/components/Portfolio.vue";
</script>

<template>
  <img v-observe src="@/assets/cat_1.png" class="fade-slide-left cat cat-background cat-1" alt="cat_1" loading="lazy" />
  <img v-observe src="@/assets/cat_2.png" class="fade-slide-right cat cat-background cat-2" alt="cat_2" loading="lazy" />
  <img v-observe src="@/assets/cat_3.png" class="fade-slide-left cat cat-background cat-3" alt="cat_3" loading="lazy"/>
  <img v-observe src="@/assets/cat_4.png" class="fade-slide-right cat cat-background cat-4" alt="cat_4" loading="lazy"/>
  <img v-observe src="@/assets/cat_5.png" class="fade-slide-left cat cat-background cat-5" alt="cat_5" loading="lazy"/>
  <img v-observe src="@/assets/cat_6.png" class="fade-slide-right cat cat-background cat-6" alt="cat_6" loading="lazy"/>
  <img v-observe src="@/assets/cat_7.png" class="fade-slide-left cat cat-background cat-7" alt="cat_7" loading="lazy"/>
  <img v-observe src="@/assets/cat_8.png" class="fade-slide-right cat cat-background cat-8" alt="cat_8" loading="lazy"/>

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
