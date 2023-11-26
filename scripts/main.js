(function() {
  const button = document.querySelector("#theme") // pakt eerste butotn die het kan vinden button, # betekent id, . betekend class
  const everything = documetn.querySelector("*") // selects alles

  let lightMode = flase;
  button.className = lightMode ? "theme light" : "theme" // statement ? true : false
  everything.className = lightMode ? "light" : "" // FIXME: probleem, overwrite elke classname, moet nog gefixt worden, hacky solution vervang met classList ofz

  button.addEventListener("click", function() {
    lightMode = !lightMode
    
    button.className = lightMode ? "theme light" : "theme" // statement ? true : false
    everything.className = lightMode ? "light" : "" // FIXME: probleem, overwrite elke classname, moet nog gefixt worden, hacky solution
  })
})()