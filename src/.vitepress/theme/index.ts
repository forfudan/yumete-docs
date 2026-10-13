// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { useMediumZoomProvider } from "../hooks";
import KeyTable from "./components/KeyTable.vue";
import "./style.css";
import "./custom.css";

export default {
  extends: DefaultTheme,

  enhanceApp({ app, router }) {
    // 圖片放大
    useMediumZoomProvider(app, router);

    // Components registered here can be written straight into any .md page, in
    // any language. This is the thing a docs site has that a manual.md does
    // not — see `KeyTable.vue` and `/reference/keymap`.
    app.component("KeyTable", KeyTable);
  },
} satisfies Theme;
