// "Web view": the same page in the VitePress rendering, which sits under
// /web/ beside this book (2026-10-30; it was the other way round before).
// The link stands at the foot of the sidebar: switching renderings is a
// once-in-a-while thing, and the top bar's slot went to the keymap.
(function () {
  // mdBook's own template sets `path_to_root` on the page.
  var root = new URL(typeof path_to_root === "string" ? path_to_root || "./" : "./", location.href).pathname;
  var here = location.pathname.slice(root.length).replace(/(index|introduction)?\.html$/, "");
  var a = document.createElement("a");
  a.className = "twin";
  a.href = root + "web/" + here;
  a.textContent = "Web view";
  var sidebar = document.querySelector(".sidebar-scrollbox");
  if (sidebar) sidebar.appendChild(a);
})();
