<script setup>
defineProps({ projects: Array });
</script>

<template>
  <v-row dense>
    <v-col
        v-for="(project, i) in projects"
        :key="i"
        cols="12"
        md="6"
    >
      <div v-observe class="project-card text-white fade-bounce-in" :style="{ '--delay': (i * 100) + 'ms' }">
        <h3 class="text-h6 font-weight-bold mb-1">{{ project.name }}</h3>
        <p><strong>Stack:</strong> {{ project.stack }}</p>
        <p v-if="project.github">
          <strong>GitHub: </strong>
          <a :href="project.github" target="_blank" class="text-blue-lighten-2">{{ project.github }}</a>
        </p>
        <p>{{ project.description }}</p>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped>

.project-card {
  position: relative;
  z-index: 0;
  padding: 16px;
  border-radius: 16px;
  border: 2px solid transparent;
  background-clip: padding-box;
  background-color: rgba(255, 255, 255, 0.02);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 2px;
    background: linear-gradient(45deg, #ff00cc, #3333ff, #00ffc6, #ff00cc);
    background-size: 400% 400%;
    animation: border-animation 6s ease infinite;
    z-index: -1;
    border-radius: 16px;
    mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
  }
}

@keyframes border-animation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>