<template>
  <!-- Page header component -->
  <div class="flex w-full justify-center relative">
    <div
      class="header-container flex justify-center flex-col sm:flex-row sm:justify-between"
    >
      <div class="flex justify-center align-center">
        <header>
          <a
            :class="['fas', 'fa-home', { select: route.path === '/home' }]"
            @click="pageRoute('/home')"
          />
          <a
            :class="['fas', 'fa-user', { select: route.path === '/about' }]"
            hef="/about"
            @click="pageRoute('/about')"
          />
          <a
            :class="[
              'fas',
              'fa-briefcase',
              { select: route.path === '/portfolio' },
            ]"
            hef="/portfolio"
            @click="pageRoute('/portfolio')"
          />
          <!--<a :class="['fas', 'fa-file-alt', { 'select': route.path === '/resume' }]" hef='/resume'
            @click="pageRoute('/resume')"/>-->
          <a
            :class="[
              'fas',
              'fa-address-book',
              { select: route.path === '/contact' },
            ]"
            @click="pageRoute('/contact')"
          />
        </header>
      </div>
      <div class="title">
        <label>IDEAL&nbsp;</label>
        <img src="@/assets/imgs/logo/01.png" />
        <span>SOFTER</span>
      </div>
      <Clock />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
import Clock from "@/components/elements/clock.vue";

const route = ref<string | null>(useRoute());
const router = useRouter();

const pageRoute = (path: string) => {
  router.push(path);
};
</script>
