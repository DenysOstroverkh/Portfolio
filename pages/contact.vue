<template>
  <main class="pt-[10em] sm:pt-[5em]">
    <div class="flex flex-col page-contact">
      <div class="frame flex flex-col">
        <p>Feel free to write a letter to me at any time</p>

        <div class="flex w-full flex-col md:flex-row justify-between gap-1em">
          <input type="text" placeholder="Your name" ref="name" />
          <input type="text" placeholder="Email address" ref="email" />
        </div>

        <div class="flex w-full flex-col md:flex-row justify-between gap-1em">
          <input type="text" placeholder="Nationality" ref="nationality" />
          <select ref="type">
            <option value="contract">Contract</option>
            <option value="QA">Q & A</option>
            <option value="Friendshiop">Friendship</option>
            <option value="review">REVIEW</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <textarea placeholder="How can I help you?" ref="message"></textarea>
        </div>

        <div class="status-bar">{{ status }}</div>

        <div class="button-group" @click="submit">
          <button>SUBMIT</button>
        </div>
      </div>

      <div class="frame contact">
        <p>Feel free to contact me at any time</p>
        <h1>
          Phone number: <i @click="contact('phone')">{{ PHONE_NUMBER }}</i>
        </h1>
        <h1>
          Email: <i @click="contact('email')">{{ GMAIL }}@gmail.com</i>
        </h1>
        <h1>
          Github: <i @click="contact('git')">https://github.com/{{ GMAIL }}</i>
        </h1>
        <h1>
          Skype: <i @click="contact('skype')">live:{{ SKYPE }}</i>
        </h1>
        <h1>
          Telegram: <i @click="contact('telegram')">@{{ TELEGRAM }}</i>
        </h1>
        <h1>
          Linkedin:
          <i @click="contact('linkedin')">https://linkedin.com{{ LINKEDIN }}</i>
        </h1>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import {
  PHONE_NUMBER,
  GMAIL,
  GIT,
  SKYPE,
  TELEGRAM,
  LINKEDIN,
} from "@/libs/const";
import { nativate } from "@/libs/general";

const updateShowMask = inject<Function>("updateVisibleMask");
const name = ref<HTMLInputElement | null>(null);
const email = ref<HTMLInputElement | null>(null);
const nationality = ref<HTMLInputElement | null>(null);
const type = ref<HTMLInputElement | null>(null);
const message = ref<HTMLTextAreaElement | null>(null);
const emit = defineEmits<{
  (e: "update-value", value: string): void;
}>();

const contact = (path: string) => nativate(path);
const status = ref("");

const submit = async () => {
  //check value every value
  if (!name.value?.value) {
    status.value = "Input your name";
    name.value?.focus();
    return;
  }

  if (!email.value?.value) {
    status.value = "Input your email address";
    email.value?.focus();
    return;
  }

  if (!nationality.value?.value) {
    status.value = "Input your nationality";
    nationality.value?.focus();
    return;
  }

  if (!message.value?.value) {
    status.value = "Input message to send";
    message.value?.focus();
    return;
  }

  updateShowMask(true); //Render mask before sending email
  try {
    //Send email
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        subject: `From ${name.value?.value} / ${type.value?.value} From Tailor Fuller`,
        text: `I'm ${nationality.value?.value}.
        My Email is ${email.value?.value}.
        
        ${message.value?.value}`,
      }),
    });

    const result = await response.json();

    //Show result
    if (result.success) {
      status.value = "Email sent";
    } else {
      status.value = "Failed to send email";
    }
  } catch (err) {
    status.value = err;
  }

  updateShowMask(false);  //Hide mask
};
</script>
