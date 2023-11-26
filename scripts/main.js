(function () {
  const button = document.querySelector("#nav#theme"); // pakt eerste butotn die het kan vinden button, # betekent id, . betekend class
  const everything = document.querySelectorAll("body, body > *"); // selects alles

  let lightMode = false;

  button.addEventListener("click", function () {
    lightMode = !lightMode;

    lightMode
      ? everything.forEach((v) => v.classList.add("light"))
      : everything.forEach((v) => v.classList.remove("light"));
  });
})();
