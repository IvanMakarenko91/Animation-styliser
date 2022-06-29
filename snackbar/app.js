function snack() {
  const snackbar = document.getElementById("snackbar")

  snackbar.classList.toggle('show')
  setTimeout(function() {
    snackbar.classList.toggle('show')
  }, 3000)
}