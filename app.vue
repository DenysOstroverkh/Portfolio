<template>
  <div class="page">
    <Background />
    <Mask v-if="visibleMask" />
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup language="ts">
import { ref, provide } from "vue";
import Background from "@/components/layouts/background.vue";
import Mask from "@/components/layouts/mask.vue";
import Header from "@/components/layouts/header.vue";
import Footer from "@/components/layouts/footer.vue";

//Function & value to render or not the Mask
const visibleMask = ref(false);
const updateVisibleMask = (visible) => {
  visibleMask.value = visible;
};
provide('updateVisibleMask', updateVisibleMask);
</script>
