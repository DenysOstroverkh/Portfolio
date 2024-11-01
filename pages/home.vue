<template>
  <main class="pt-[10em] sm:pt-[5em]">
    <div class="flex flex-col page-home">
      <div class="photo">
        <img src="@/assets/imgs/photos/mine-01.png" class="photo" />

        <div class="title">{{ LEVEL }}</div>

        <div class="available-mark">
          <i class="fas fa-circle" />
          &nbsp;
          <span>Available for new opportunities</span>
        </div>

        <div class="degree">
          <b>BACHELOR</b> of <i><u>Software engineering</u></i>
        </div>

        <div class="icons">
          <img src="@/assets/imgs/icons/web.png" />
          <img src="@/assets/imgs/icons/mobile.png" />
          <img src="@/assets/imgs/icons/desktop.png" />
          <img src="@/assets/imgs/icons/ai.png" />
          <img src="@/assets/imgs/icons/blockchain.png" />
        </div>

        <div class="annotation">
          Launching <b>Full-stack web</b> service | Developing
          <b>Mobile/Desktop Application</b> | Integrating / Creating
          <b>AI functionalities to software</b> | Releasing
          <b>SMART CONTRACT</b> solutions
        </div>

        <div class="description">
          <div>
            Looking for a skilled partner to bring your project to life?
          </div>
          <div>
            Look no further. You’ve already found the right person. With my
            expertise, this will be your final stop in finding the perfect
            individual or team of software professionals.
          </div>
        </div>

        <div class="slogan tagline">
          <i class="fas fa-hand-point-right" />

          <div class="panel">
            <p>My tagline is</p>
            <p>
              <i class="fas fa-quote-left" />
              The better satisfied my clients are, the more I get
              <i class="fas fa-quote-right" />
            </p>
          </div>
        </div>

        <div class="description">
          With nearly 15 years of experience in software development and
          engineering, I have the expertise and intuitive skill-set to deliver
          perfectly any software-related task, even if it's something new in my
          work history.
        </div>

        <div class="slogan experience">
          <div class="panel">
            <p>Experience: 14 years</p>
          </div>
          <i class="fas fa-hand-point-left" />
        </div>

        <div class="description">
          Especially, the successful completion of 6+ projects as a lead
          engineer within international teams has made me an ideal collaborator
          and team leader. This experience enables me to seamlessly tackle
          software duties of any scale or field, working with my global
          colleagues.
        </div>

        <div class="flex flex-col sm:flex-row mark-container">
          <div class="mark completion">
            <div class="panel">
              <p>Projects Completed: 46+</p>
            </div>
            <i class="fas fa-hand-point-up" />
          </div>

          <div class="mark colleague">
            <div class="panel">
              <p>colleagues</p>
              <p>26</p>
            </div>
          </div>

          <div class="mark led">
            <i class="fas fa-hand-point-down" />
            <div class="panel">
              <p>Teams led: 4+</p>
            </div>
          </div>
        </div>

        <img src="@/assets/imgs/photos/team-01.png" class="environment" />
      </div>

      <Contact />
    </div>
  </main>
</template>

<script setup lang="ts">
import { LEVEL } from "@/libs/const";
import Contact from "@/components/layouts/contact.vue";
</script>
