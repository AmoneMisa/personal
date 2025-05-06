<script setup>
import CustomFooter from "@/components/CustomFooter.vue";
import Portfolio from "@/components/Portfolio.vue";
</script>

<template>
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
