<script setup lang="ts">
// "Book view": the same page in the mdBook rendering under /book/ (2026-10-29).
import { computed } from "vue";
import { useData, useRoute, withBase } from "vitepress";

const route = useRoute();
const { site } = useData();
const href = computed(() => {
  // The route carries the site's base (/yumete-docs/ on GitHub Pages), and
  // withBase adds it again, so it comes off first.
  const base = site.value.base;
  const path = route.path.startsWith(base) ? "/" + route.path.slice(base.length) : route.path;
  const here = path.replace(/^\/(zht|zhs)\//, "/").replace(/\.html$/, "");
  const page = here === "/" ? "/introduction" : here.replace(/\/$/, "");
  return withBase("/book" + page + ".html");
});
</script>

<template>
  <!-- target="_self" keeps VitePress's router from treating the click as a
       page of its own and showing its 404 (2026-10-30): /book/ is mdBook's,
       so the browser has to load it. -->
  <a class="book-link" :href="href" target="_self">Book view</a>
</template>

<style scoped>
.book-link {
  margin-inline-start: 1rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  white-space: nowrap;
}
.book-link:hover {
  color: var(--vp-c-brand-1);
}
</style>
