<template>
  <div v-if="error.statusCode === 404">
    <h1>Custom 404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
  </div>
  <div v-else>
    <h1>An error occurred</h1>
    <p>{{ error.message }}</p>
  </div>
</template>

<script setup>
const error = useError();
</script>

<style scoped>
/* Your custom styles */
</style>