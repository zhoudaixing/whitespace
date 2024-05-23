<template>
  <nav mt-6 inline-flex gap-2 text-xl>
    <button icon-btn @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </button>

    <a
      i-carbon-logo-github icon-btn
      rel="noreferrer"
      href="https://github.com/antfu/vitesse-lite"
      target="_blank"
      title="GitHub"
    />
  </nav>
  <section>
    <ol>
      <li v-for="(item, i) in items" :key="i">
        <a
          :href="item.href"
          :class="{ 'text-accent': item.href === currentRoute }"
        >
          {{ item.text }}
        </a>
      </li>
    </ol>
  </section>
</template>
