// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { useMediumZoomProvider } from "../hooks";
import BookLink from "./components/BookLink.vue";
import { h } from "vue";
import "./style.css";
import "./ink.css";
import "./custom.css";

export default {
  extends: DefaultTheme,

  // The link to the book view of the same page, at the end of the nav bar.
  Layout: () => h(DefaultTheme.Layout, null, { "nav-bar-content-after": () => h(BookLink) }),

  enhanceApp({ app, router }) {
    // 圖片放大
    useMediumZoomProvider(app, router);
  },
} satisfies Theme;
