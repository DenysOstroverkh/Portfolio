<template>
  <!-- Page Footer component -->
  <footer>
    <div class="flex-col xs2:flex-row">
      <div>
        <h1 @click="nativate('phone')">&#9743;&nbsp;{{ PHONE_NUMBER }}</h1>
        <h1 @click="nativate('email')">
          <i class="fab fa-google" /> &nbsp;{{ GMAIL }}
        </h1>
        <h1 @click="nativate('git')">
          <i class="fab fa-git" />&nbsp;{{ GIT }}
        </h1>
      </div>

      <div class="center">
        <h1>2024 © {{ TITLE_01 }}-{{ TITLE_02 }}</h1>
        <h1>All rights reserved</h1>
        <img src="@/assets/imgs/logo/01.png" />
      </div>

      <div>
        <h1 @click="nativate('skype')">
          <i class="fab fa-skype" />&nbsp;{{ SKYPE }}
        </h1>
        <h1 @click="nativate('telegram')">
          <i class="fab fa-telegram" />&nbsp;{{ TELEGRAM }}
        </h1>
        <h1 @click="nativate('linkedin')">
          <i class="fab fa-linkedin" />&nbsp;{{ LINKEDIN }}
        </h1>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {
  TITLE_01,
  TITLE_02,
  PHONE_NUMBER,
  GMAIL,
  GIT,
  SKYPE,
  TELEGRAM,
  LINKEDIN,
} from "@/libs/const";
import { nativate } from "@/libs/general";

const contact = (path: string) => nativate(path);
</script>
