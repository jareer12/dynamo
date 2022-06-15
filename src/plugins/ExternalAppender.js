const styles = [
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/solid.min.css",
];

const scripts = [
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js",
  "https://unpkg.com/@popperjs/core@2",
  "https://unpkg.com/tippy.js@6",
];

styles.forEach((script) => {
  let tag = document.head.querySelector(`[styles="${script}"`);
  if (!tag) {
    tag = document.createElement("style");
    tag.setAttribute("href", script);
    tag.setAttribute("type", "text/css");
    document.body.appendChild(tag);
  }
});

scripts.forEach((script) => {
  let tag = document.head.querySelector(`[scripts="${script}"`);
  if (!tag) {
    tag = document.createElement("script");
    tag.setAttribute("src", script);
    document.body.appendChild(tag);
  }
});

export default {
  Success: true,
};
