<script setup>
defineProps({ title: String });
</script>

<template>
  <v-row class="mb-4 mt-10">
    <v-col cols="12">
      <h2 class="text-h5 text-white border-b pb-2">{{ title }}</h2>
    </v-col>
  </v-row>
</template>

<style scoped>
.border-b {
  border-bottom: 2px solid #666;
}
</style>