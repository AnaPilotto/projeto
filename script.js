function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "A photo of Ana Pilotto's face, with purple hair, light makeup and smiling."
    )
  } else {
    img.setAttribute(
      "alt",
      "A photo of Ana Pilotto's face, with pink hair, light makeup and smiling."
    )
  }
}
