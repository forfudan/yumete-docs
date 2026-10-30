<script setup lang="ts">
// "Book view": the same page in the mdBook rendering, which has the root
// since 2026-10-30 (this rendering sits under /site/).
import { computed } from "vue";
import { useData, useRoute } from "vitepress";

const route = useRoute();
const { site } = useData();
const href = computed(() => {
  // The route carries the site's base (/site/, or /yumete-docs/site/ on
  // GitHub Pages); the book is one step above it.
  const base = site.value.base;
  const root = base.replace(/site\/$/, "");
  const path = route.path.startsWith(base) ? "/" + route.path.slice(base.length) : route.path;
  const here = path.replace(/^\/(zht|zhs)\//, "/").replace(/\.html$/, "");
  const page = here === "/" ? "introduction" : here.replace(/^\//, "").replace(/\/$/, "");
  return root + page + ".html";
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
