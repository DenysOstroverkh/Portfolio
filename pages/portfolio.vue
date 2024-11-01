<template>
  <main class="pt-[10em] sm:pt-[5em]">
    <div class="page-portfolio">
      <h1>Representative Works</h1>

      <div class="flex justify-center w-full gap-1em flex-wrap">
        <div class="container">
          <div class="frame">
            <img src="@/assets/imgs/photos/portfolio-07.png" />

            <h2>TUBBY TODD</h2>
            <h3><b>Updated:</b> Oct 17, 2024</h3>
            <h4>
              <b>URL:</b> <a href="https://tubbytodd.com">tubbytodd.com</a>
            </h4>

            <div class="flex justify-between">
              <label><b>Summary</b></label>
              <i
                :class="[
                  'fas',
                  'fa-plus',
                  'cursor-pointer',
                  { rotate: visibleSummaryArray[7] },
                ]"
                @click="visibleSummary(7)"
              ></i>
            </div>

            <div class="description" v-if="visibleSummaryArray[7]">
              <b>Service of Ordering/Selling For Smooth Skin</b><br />
              I updated this service for eCommerce through Shopify APIs as well as its frontend using React.<br />
              I have utilized<br />
              ✔Shopify, ✔React, ✔PayPal, ✔Apply Pay,
              ✔Venmo, ✔Rebuy, ✔Cloudflare, ✔Facebook Pixel<br>
              and other technologies.
            </div>
          </div>
        </div>

        <div class="container">
          <div class="frame">
            <img src="@/assets/imgs/photos/portfolio-01.png" />

            <h2>IWDL</h2>
            <h3><b>Published:</b> Jun 11, 2024</h3>
            <h4>
              <b>URL:</b> <a href="https://iwdl.vercel.app">IWDL.vercel.app</a>
            </h4>

            <div class="flex justify-between">
              <label><b>Summary</b></label>
              <i
                :class="[
                  'fas',
                  'fa-plus',
                  'cursor-pointer',
                  { rotate: visibleSummaryArray[0] },
                ]"
                @click="visibleSummary(0)"
              ></i>
            </div>

            <div class="description" v-if="visibleSummaryArray[0]">
              <b>Software Company website</b><br />
              I completed it from scratch, including both the graphic and
              logical design.<br />
              I have utilized<br />
              ✔JavaScript/TypeScript, ✔Next.js, ✔KOA/Node.js, ✔Tailwind CSS,
              ✔SASS, ✔HTML5/CSS3, ✔Firestore, and other technologies.
            </div>
          </div>
        </div>

        <div class="container">
          <div class="frame">
            <img src="@/assets/imgs/photos/portfolio-03.png" />

            <h2>District Design</h2>
            <h3><b>Published:</b> Aug 17, 2024</h3>
            <h4>
              <b>URL:</b>
              <a href="https://districtdesign.carbonmade.com"> Click here</a>
            </h4>

            <div class="flex justify-between">
              <label><b>Summary</b></label>
              <i
                :class="[
                  'fas',
                  'fa-plus',
                  'cursor-pointer',
                  { rotate: visibleSummaryArray[1] },
                ]"
                @click="visibleSummary(1)"
              ></i>
            </div>

            <div class="description" v-if="visibleSummaryArray[1]">
              <b>Graphic design Company website</b><br />
              I completed it from scratch, including both the graphic and
              logical design.<br />
              I have utilized<br />
              ✔HSTS, ✔anime.js, ✔Swiper, ✔JavaScript, ✔HTML5/CSS3, and other
              technologies.<br />
              I specifically applied <b>HSTS</b> to
              <u>strengthen website security</u> and used
              <u
                ><b>Swiper</b> to enhance the user experience on touch-based
                devices</u
              >.
            </div>
          </div>
        </div>

        <div class="container">
          <div class="frame">
            <img src="@/assets/imgs/photos/portfolio-04.png" />

            <h2>GREATE GAMES</h2>
            <h3><b>Published:</b> Jan 25, 2023</h3>
            <h4>
              <b>URL:</b>
              <a href="https://greatgames.com.au/"> GreatGames.com</a>
            </h4>

            <div class="flex justify-between">
              <label><b>Summary</b></label>
              <i
                :class="[
                  'fas',
                  'fa-plus',
                  'cursor-pointer',
                  { rotate: visibleSummaryArray[4] },
                ]"
                @click="visibleSummary(4)"
              ></i>
            </div>

            <div class="description" v-if="visibleSummaryArray[4]">
              <b>Puzzle game & eCommerce service</b><br />
              I participated its update for 2 months<br />
              I have utilized<br />
              ✔WordPress, JavaScript / jQuery, ✔CoreJS, ✔PayPal & ✔Stripe APIs,
              ✔Facebook Pixel, and other technologies.
            </div>
          </div>
        </div>

        <div class="container">
          <div class="frame">
            <img src="@/assets/imgs/photos/portfolio-05.png" />

            <h2>iMinify</h2>
            <h3><b>Updated:</b> Jul 25, 2023</h3>
            <h4>
              <b>URL:</b>
              <a href="https://imintify.com/"> iMintify.com</a>
            </h4>

            <div class="flex justify-between">
              <label><b>Summary</b></label>
              <i
                :class="[
                  'fas',
                  'fa-plus',
                  'cursor-pointer',
                  { rotate: visibleSummaryArray[5] },
                ]"
                @click="visibleSummary(5)"
              ></i>
            </div>

            <div class="description" v-if="visibleSummaryArray[5]">
              <b>NFT marketplace on Solana network</b><br />
              I participated its update for 3 months<br />
              I have utilized<br />
              ✔Python / TensorFlow / PyTorch, ✔GPT 4, ✔Rust, and other
              technologies.
            </div>
          </div>
        </div>

        <div class="container">
          <div class="frame">
            <img src="@/assets/imgs/photos/portfolio-06.png" />

            <h2>Campaign Signs</h2>
            <h3><b>Published:</b> Feb 22, 2024</h3>
            <h4>
              <b>URL:</b>
              <a href="https://campaignsigns.com/"> campaignsigns.com</a>
            </h4>

            <div class="flex justify-between">
              <label><b>Summary</b></label>
              <i
                :class="[
                  'fas',
                  'fa-plus',
                  'cursor-pointer',
                  { rotate: visibleSummaryArray[6] },
                ]"
                @click="visibleSummary(6)"
              ></i>
            </div>

            <div class="description" v-if="visibleSummaryArray[6]">
              I independently developed the CampaignSigns.com website from
              scratch within 2 weeks. To optimize both budget and time, I
              strategically utilized ✔WordPress as the platform.
            </div>
          </div>
        </div>

        <div class="container">
          <div class="frame">
            <img src="@/assets/imgs/photos/portfolio-02.png" />

            <h2><u>A</u>ssistant <u>F</u>or <u>F</u>reelancer</h2>
            <h3><b>Published:</b> Nov 20, 2023</h3>
            <h4><b>URL:</b> Private</h4>

            <div class="flex justify-between">
              <label><b>Summary</b></label>
              <i
                :class="[
                  'fas',
                  'fa-plus',
                  'cursor-pointer',
                  { rotate: visibleSummaryArray[2] },
                ]"
                @click="visibleSummary(2)"
              ></i>
            </div>

            <div class="description" v-if="visibleSummaryArray[2]">
              Service to support every type of freelancer or their team<br />
              Developing 3 types of services —
              <u>web, mobile, and desktop applications</u> — I led this project
              from scratch to completion as the team leader.<br />
              Our team utilized<br />
              ✔JavaScript/TypeScript, ✔React.js, ✔Socket.io, ✔Redux,
              ✔Express/Node.js, ✔SASS, HTML5/CSS3, ✔Flutter, ✔PostgreSQL, and
              other technologies."
            </div>
          </div>
        </div>
      </div>

      <div class="separator"></div>

      <Contact />
    </div>
  </main>
</template>

<script setup language="ts">
import { ref } from "vue";
import Contact from "@/components/layouts/contact.vue";
let visibleSummaryArray = ref([false, false, false, false, false, false, false, false]);

//Function to show summary of one portfolio
const visibleSummary = (id) => {
  visibleSummaryArray.value[id] = !visibleSummaryArray.value[id];
};
</script>
