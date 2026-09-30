document.body.classList.add("play");

document.querySelectorAll("[data-optional] img").forEach((img) => {
  const hide = () => { img.closest("[data-optional]").hidden = true; };
  if (img.complete && img.naturalWidth === 0) hide();
  img.addEventListener("error", hide);
});

