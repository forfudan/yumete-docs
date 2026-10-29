<script setup lang="ts">
// "Book view": the same page in the mdBook rendering under /book/ (2026-10-29).
import { computed } from "vue";
import { useRoute, withBase } from "vitepress";

const route = useRoute();
const href = computed(() => {
  const here = route.path.replace(/^\/(zht|zhs)\//, "/").replace(/\.html$/, "");
  const page = here === "/" ? "/introduction" : here.replace(/\/$/, "");
  return withBase("/book" + page + ".html");
});
</script>

<template>
  <a class="book-link" :href="href">Book view</a>
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
