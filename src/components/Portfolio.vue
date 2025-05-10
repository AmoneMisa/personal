<script setup>
import ProjectGrid from "@/components/ProjectGrid.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import Biography from "@/components/Biography.vue";

const projects = {
  discord: [
    {
      name: 'Gold Bot',
      stack: 'Node.js, Discord.js, Discord API, prisma, Postgres, Docker',
      github: 'https://github.com/AmoneMisa/amorality-discord-bot',
      description: 'Bot for help users calc how many gold they get for month'
    },
    {
      name: 'Commercial LA helper Bot',
      stack: 'Node.js, Discord.js, Discord API, Postgres, node-pg-migrate, dayjs, axios, canvas, i18n, winston, cron, html-parser',
      github: 'https://github.com/AmoneMisa/discord-LA-commercial-bot',
      description: 'A powerful Bot for better Lost Ark players integration in Discord server. It has many systems, as like: market, subscribe, achievements, profiles etc'
    },
  ],
  telegram: [
    {
      name: 'Genshin Impact TG Bot',
      stack: 'Node.js, Node-Telegram-Bot-Api, Telegram bot Api, lodash, axios',
      github: 'https://github.com/AmoneMisa/Genshin-Impact-tg-bot',
      description: 'Telegram RPG-bot. Contains as primitive games (like 21 point, open random chest) and a hard one (like boss fight, upgrade character, buildings, shop, arena etc)'
    },
  ],
  electron: [
    {
      name: 'Account Status Lost Ark',
      stack: 'Electron, Vue, axios, lodash, luxon, SCSS, Vite',
      github: 'https://github.com/AmoneMisa/accountStatusLA',
      description: 'Desktop app for Lost Ark players. Give them possibility to check their characters status. Have some useful calcs and tools.'
    },
  ],
  unfinished: [
    {
      name: 'Monopoly',
      stack: 'Nuxt, Pinia, Scss, Vue, i18n, MongoDB',
      github: '',
      description: 'On hold. The monopoly-game, particularly working, has registration and login system'
    },
  ],
  skyrim: [
    {
      name: 'AllBooksHavePerks',
      stack: 'C#, Mutagen',
      github: 'https://github.com/AmoneMisa/AllBooksHavePerks/tree/master',
      description: 'Patcher for all books give a random perk when read first time'
    },
    {
      name: 'AutoTranslateTexts',
      stack: 'C#, Mutagen',
      github: 'https://github.com/AmoneMisa/AutoTranslateTexts',
      description: 'Patch for merge strings from main game to untranslated plugins'
    },
    {
      name: 'MoreGoldForMerchants',
      stack: 'C#, Mutagen',
      github: 'https://github.com/AmoneMisa/MoreGoldForMerchants',
      description: 'Patcher for give merchants more gold'
    },
    {
      name: 'FreeFastTravel',
      stack: 'C#, Mutagen',
      github: 'https://github.com/AmoneMisa/FreeFastTravel',
      description: 'Patcher for make mostly locations in Skyrim available for Fast travel'
    },
  ]
}
</script>

<template>
  <v-container class="py-10" max-width="1280">
    <v-row class="mb-10">
      <v-col cols="12" class="text-center">
        <h1 class="gradient-text text-lg-h2 text-md-h3 text-h4 font-weight-bold mb-2">Hello, I'm Marharyta</h1>
        <p class="text-h5 text-white">Frontend Developer</p>
      </v-col>
    </v-row>

    <biography class="text-white"/>

    <SectionTitle title="Discord Bots"/>
    <ProjectGrid :projects="projects.discord"/>

    <SectionTitle title="Telegram Bots"/>
    <ProjectGrid :projects="projects.telegram"/>

    <SectionTitle title="Desktop on electron"/>
    <ProjectGrid :projects="projects.electron"/>

    <SectionTitle title="Unfinished"/>
    <ProjectGrid :projects="projects.unfinished"/>

    <SectionTitle title="Modifications for Skyrim"/>
    <ProjectGrid :projects="projects.skyrim"/>

    <SectionTitle title="My contacts"/>
    <v-row class="text-white text-body-1 flex-wrap ga-3" dense>
      <v-col class="d-inline-flex align-center ga-1" cols="auto">
        <v-icon>mdi-email</v-icon>
        <a href="mailto:kubai.rita5@gmail.com" class="contact-link">kubai.rita5@gmail.com</a>
      </v-col>

      <v-col class="d-inline-flex align-center ga-1" cols="auto">
        <v-icon>mdi-phone</v-icon>
        <a href="tel:+40754784610" class="contact-link">+40754784610</a>
      </v-col>

      <v-col class="d-inline-flex align-center ga-1" cols="auto">
        <v-icon>mdi-whatsapp</v-icon>
        <a href="https://wa.me/380638877209" target="_blank" class="contact-link">+380638877209</a>
      </v-col>

      <v-col class="d-inline-flex align-center ga-1" cols="auto">
        <v-icon>mdi-github</v-icon>
        <a href="https://github.com/AmoneMisa" target="_blank" class="contact-link">AmoneMisa</a>
      </v-col>
    </v-row>

  </v-container>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(90deg, #ff00cc, #3333ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 300% 300%;
  animation: gradient-animation 6s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.contact-link {
  color: #bb86fc;
  text-decoration: none;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
}

.contact-link:hover {
  color: #ffffff;
  text-shadow: 0 0 8px #bb86fc;
}
</style>