// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { useMediumZoomProvider } from "../hooks";
import BookLink from "./components/BookLink.vue";
import { h } from "vue";
import "./ink.css";
import "./custom.css";

export default {
  extends: DefaultTheme,

  // The link to the book view of the same page, at the end of the nav bar.
  Layout: () => h(DefaultTheme.Layout, null, { "nav-bar-content-after": () => h(BookLink) }),

  enhanceApp({ app, router }) {
    // 圖片放大
    useMediumZoomProvider(app, router);

    // Terminal cells in code blocks (book-theme/cells.js, shared with the book
    // view). Loaded after the page has hydrated, since it rewrites the blocks,
    // and run again on every page the router brings in.
    if (typeof window !== "undefined") {
      const run = () => setTimeout(() => (window as any).yumeteCells?.(), 0);
      window.addEventListener("load", () => import("../../../book-theme/cells.js").then(run));
      const before = router.onAfterRouteChange;
      router.onAfterRouteChange = (to) => {
        before?.(to);
        run();
      };
    }
  },
} satisfies Theme;
