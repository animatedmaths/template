function headerScroll() {
  header = document.querySelector('header')
  title = document.querySelector('#title')
  hero = document.querySelector('#hero')
  document.addEventListener('scroll', function(e) {
    if (window.scrollY == 0) {
      header.classList = ""
    } else {
      header.classList = "scrolled"
    }

    title.style.top = (50 +window.scrollY/30) + "%"
  })
}
