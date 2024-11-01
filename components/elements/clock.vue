
<template>
  <div class="clock">
    <div class="label">EXPERIENCE</div>
    <div class="value">{{ duration }}</div>
  </div>
</template>

<script setup language="ts">
import { onMounted, ref } from "vue";
import { calculateDuration } from "@/libs/time";
import { START_DATE } from "@/libs/const";
let intervalID = -1; //Timer ID
let duration = ref(""); //Duration string

onMounted(() => {
  //Run timer every second
  intervalID = setInterval(() => {
    //To get duration every second
    duration.value = calculateDuration(new Date(START_DATE), new Date());
  }, 1000);
  duration.value = calculateDuration(new Date(START_DATE), new Date());
});

onBeforeUnmount(() => {
  //Close timer when page unmounted
  if (intervalID !== null) {
    clearInterval(intervalID);
  }
});
</script>

<style scoped>
div.clock {
  font-size: 0.8em;
  text-align: center;
}

div.label {
  font-weight: bold;
}
</style>