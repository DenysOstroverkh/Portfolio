<template></template>

<script setup language="ts">
/** The component to go to /home default */
import { useRoute } from "vue-router";
const route = useRoute();

onMounted(() => {
  //To set default path /home
  if (route.path === "/") location.href = "/home";
});
</script>
