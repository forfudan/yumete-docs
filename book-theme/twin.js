// "Site view": the same page in the VitePress rendering (2026-10-29).
// `/book/guide/search.html` is `/guide/search` there; the book's own index
// is the site's home.
(function () {
  var here = location.pathname.replace(/^.*?\/book\//, "/");
  var there = here.replace(/(index)?\.html$/, "");
  if (there === "/introduction") there = "/";
  var a = document.createElement("a");
  a.className = "twin";
  a.href = there;
  a.textContent = "Site view";
  var bar = document.querySelector(".right-buttons");
  if (bar) bar.prepend(a);
})();
