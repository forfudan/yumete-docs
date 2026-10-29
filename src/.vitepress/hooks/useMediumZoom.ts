import type { App } from "vue";
import type { Router } from "vitepress";
import { onMounted, watch, nextTick } from "vue";
import mediumZoom from "medium-zoom";

/** Click an image on a page to blow it up. Same hook `yu` uses. */
export function useMediumZoomProvider(app: App, router: Router) {
  if (typeof window === "undefined") return;
  const attach = () =>
    mediumZoom(".vp-doc img:not(.no-zoom)", { background: "var(--vp-c-bg)" });
  app.mixin({
    mounted() {
      nextTick(attach);
    },
  });
  if (router) {
    watch(
      () => router.route.path,
      () => nextTick(attach),
    );
  }
  onMounted?.(() => nextTick(attach));
}
