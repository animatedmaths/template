function headerScroll() {
  document.addEventListener('scroll', function(e) {
    header = document.querySelector('header')
    if (window.scrollY == 0) {
      header.classList = ""
    } else {
      header.classList = "scrolled"
    }
  })
}
