(function () {
  const button = document.querySelector("nav > button.theme"); // pakt eerste butotn die het kan vinden button, # betekent id, . betekend class
  const image = document.querySelector("nav > button.theme > img");
  const everything = document.querySelectorAll("body, body  *"); // selects alles

  let lightMode = false;

  button.addEventListener("click", function () {
    lightMode = !lightMode;

    lightMode
      ? everything.forEach((v) => v.classList.add("light"))
      : everything.forEach((v) => v.classList.remove("light"));

    lightMode
      ? (image.src = "/images/theme_switch_light.png")
      : (image.src = "/images/theme_switch_dark.png");
  });
})();
