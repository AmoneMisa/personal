<script setup>

</script>

<template>
  <v-container class="py-10" max-width="1280">
    <v-row class="mb-10">
      <v-col cols="12">
        <h2 class="gradient-text text-h4 font-weight-bold mb-6 text-white">About Me</h2>

        <div class="about-card">
          <section>
            <h3 class="text-h6 font-weight-bold mb-2 text-white d-flex align-center">
              <v-icon class="me-2" color="primary" size="20">mdi-account</v-icon>
              Biography
            </h3>
            <p>I'm a frontend developer and a friendly, slightly shy girl from Kharkiv. I enjoy creating new things or giving a fresh twist to something old and familiar. In my spare time, I especially enjoy creating bots for Telegram and Discord – it's an interesting way to diversify your server with interesting features you can think of. I've also tried my hand at developing a desktop app using Electron for myself and my friends, and it really drew me in :). I'd like to keep growing in frontend, especially with Vue or the services I mentioned — bots and Electron-based apps.</p>
          </section>

          <div class="divider"></div>

          <section>
            <h3 class="text-h6 font-weight-bold mb-2 text-white d-flex align-center">
              <v-icon class="me-2" color="primary" size="20">mdi-code-tags</v-icon>
              Tech Stack
            </h3>
            <div class="stack-list">
              <p><strong>Markup & Styling:</strong></p>
              <ul>
                <li>HTML</li>
                <li>CSS/SCSS</li>
                <li>Responsive Layout</li>
                <li>Email template coding</li>
                <li>Freemarker</li>
                <li>Liquid</li>
              </ul>

              <p><strong>Frontend:</strong></p>
              <ul>
                <li>JavaScript</li>
                <li>Vue, Nuxt, Vite</li>
                <li>Vuex, Pinia</li>
              </ul>

              <p><strong>Backend:</strong></p>
              <ul>
                <li>Node.js</li>
                <li>REST API, Swagger</li>
              </ul>

              <p><strong>Utilities & Libraries:</strong></p>
              <ul>
                <li>Axios, Luxon, Lodash</li>
                <li>HTML-parsing, Cron</li>
                <li>DayJs, Express, moment.js</li>
                <li>i18n, node-pg-migrate, prisma</li>
              </ul>

              <p><strong>Desktop:</strong></p>
              <ul>
                <li>Electron</li>
              </ul>

              <p><strong>Databases:</strong></p>
              <ul>
                <li>SQL, PostgreSQL, MongoDB, MySQL</li>
              </ul>

              <p><strong>Bots & APIs:</strong></p>
              <ul>
                <li>Discord Bot API</li>
                <li>Telegram Bot API</li>
              </ul>

              <p><strong>Tools:</strong></p>
              <ul>
                <li>Git, Jira, IntelliJ, Figma</li>
              </ul>
            </div>
          </section>

          <div class="divider"></div>

          <section class="mt-10">
            <h3 v-observe class="fade-slide-left text-h6 font-weight-bold mb-2 text-white d-flex align-center">
              <v-icon class="me-2" color="primary" size="20">mdi-briefcase</v-icon>
              Work Experience
            </h3>

            <div class="mb-6">
              <div class="text-caption text-grey">05.2020 — 05.2021</div>
              <div class="text-subtitle-1 font-weight-bold text-white">ITSUA</div>
              <div class="text-body-2 font-italic text-light-grey mb-1">Junior Frontend Developer</div>
              <p class="text-light-grey">
                Create, update and fix templates for Shopify on Liquid. Create App on Vue for Shopify.
              </p>
            </div>
            <div>
              <div class="text-caption text-grey">06.2021 — Present</div>
              <div class="text-subtitle-1 font-weight-bold text-white">BPC</div>
              <div class="text-body-2 font-italic text-light-grey mb-1">Frontend Developer</div>
              <p class="text-light-grey">
                Marketplace development. Create and update templates on Freemarker. Fix responsive layouts. Create email templates.
              </p>
            </div>
          </section>

          <div class="divider"></div>

          <section>
            <h3 v-observe class="fade-slide-left text-h6 font-weight-bold mb-2 text-white d-flex align-center">
              <v-icon class="me-2" color="primary" size="20">mdi-school</v-icon>
              Education
            </h3>
            <p>
              2020 – National Law University, Bachelor's degree, Institute of Criminal Investigation and Forensics, Criminal Forensic Investigator<br>
              2021 – V. N. Karazin Kharkiv National University, Master's degree, Civil Law and Civil Relations, Lawyer
            </p>
          </section>

          <div class="divider"></div>

          <section>
            <h3 v-observe class="fade-slide-left text-h6 font-weight-bold mb-2 text-white d-flex align-center">
              <v-icon class="me-2" color="primary" size="20">mdi-star-four-points-outline</v-icon>
              Interests
            </h3>

            <p>I'm (very) passionate about video games — both single-player and MMOs (currently playing Lost Ark with my husband). I also love creating fun bots for Telegram and Discord based on the "it would be cool if I could do this" principle — and then I go ahead and make it happen :)
              I'm a huge fan of rock music, especially classics like Skillet, BMTH, Nirvana, and similar bands. I enjoy quiet places and the occasional trip to a bar as well.
              I casually follow CS2 and sometimes read visual novels (because why not, right?). I like modding, and I make a translations for mods for Skyrim, when I have a time (sometimes a little patchers aka "modifications").</p>
          </section>

          <div class="divider"></div>

          <section>
            <h3 v-observe class="fade-slide-left text-h6 font-weight-bold mb-2 text-white d-flex align-center">
              <v-icon class="me-2" color="primary" size="20">mdi-target-variant</v-icon>
              Goals
            </h3>
            <p>To join an international frontend team, work on exciting user-facing products and continue improving developer UX across platforms. I’m also highly interested in contributing to the backend side of applications, especially creating my own APIs, working with databases, and integrating services through Electron. Writing parsers, managing data flow, and building full-stack tools give me special joy — and I’d love to apply those skills in commercial projects.</p>
          </section>

          <div class="divider"></div>

          <section>
            <h3 v-observe class="fade-slide-left text-h6 font-weight-bold mb-2 text-white d-flex align-center">
              <v-icon class="me-2" color="primary" size="20">mdi-translate</v-icon>
              Languages
            </h3>
            <p>Russian – C2, English – B1, Ukrainian – C2, Turkish - А1</p>
          </section>

          <div class="divider"></div>

          <section>
            <h3 v-observe class="fade-slide-left text-h6 font-weight-bold mb-2 text-white d-flex align-center">
              <v-icon class="me-2" color="primary" size="20">mdi-map-marker</v-icon>
              Location
            </h3>
            <p>Born in Kharkiv, currently based in Bucharest, Romania</p>
          </section>

          <div class="divider"></div>

          <section>
            <h3 v-observe class="fade-slide-left text-h6 font-weight-bold mb-2 text-white d-flex align-center">
              <v-icon class="me-2" color="primary" size="20">mdi-clipboard-text</v-icon>
              Job Preferences
            </h3>
            <p>Looking for full-time remote work. Minimum salary: 2000 USD net/month.</p>
          </section>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.about-card {
  border: 2px solid transparent;
  border-radius: 16px;
  padding: 24px;
  background-clip: padding-box;
  background-color: rgba(255, 255, 255, 0.02);
  position: relative;
  z-index: 0;
  overflow: hidden;
}

.about-card::before {
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
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
}

.divider {
  height: 2px;
  margin: 24px 0;
  background: linear-gradient(90deg, #ff00cc, #3333ff, #00ffc6);
  background-size: 300% 300%;
  animation: border-animation 6s ease infinite;
  border-radius: 4px;
}

@keyframes border-animation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.stack-list ul {
  list-style: disc inside;
  margin-bottom: 16px;
}

.stack-list p {
  margin-top: 16px;
  margin-bottom: 4px;
  font-weight: 600;
}
</style>