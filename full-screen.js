window.onload = function() {
  headerScroll()
  console.log("header scroll active !");
  console.log("full-screen.js active !")

  var canvas = document.querySelectorAll(".canva");
  var timeout = 500

  document.addEventListener('scroll', function(e) {
    console.log("scroll happening");
    timeout = 500
  })

  for (let canva of canvas) {
    let open = false
    let icon = document.createElement('img')
    icon.setAttribute('src', 'expand-outline.svg')
    canva.appendChild(icon)
    icon.addEventListener('click', function(e) {
      if(canva.classList.contains('fullscreen')){
        canva.classList.remove('fullscreen')
        icon.setAttribute('src', 'expand-outline.svg')

        header.style.background = "rgba(0,0,0," + window.scrollY/document.body.offsetHeight + ")"

        setTimeout(function() {
          let temp = document.querySelector('#tempcanva')
          temp.parentNode.removeChild(temp)
          canva.style.position = 'sticky'
          open = false

          canva.style.width = "auto"
          document.body.style.overflow = "scroll"
        }, 1000)
        //close
        timeout = 10
      } else {
        if (open) {
          console.log("already open !")
        } else {
          icon.setAttribute('src', 'contract-outline.svg')
          open = true
          document.body.style.overflow = "hidden"
          // open
          var style = canva.currentStyle || window.getComputedStyle(canva);
          let pos = getPosition(canva)

          canva.style.width = toPx(pos.width)
          canva.style.height = toPx(pos.height)
          canva.style.top = toPx(parseInt(pos.top) - parseInt(style.marginTop))
          canva.style.left = toPx(pos.left)

          setTimeout(function() {
            canva.classList.add('fullscreen')

            canva.style.position = 'fixed'

            console.log("trying to replace element")
            let temp = document.createElement('div')
            temp.setAttribute('class', 'canva')
            temp.setAttribute('id', 'tempcanva')

            temp.style.zIndex = "1"
            temp.style.width = toPx(pos.width)
            temp.style.height = toPx(pos.height)
            temp.style.top = toPx(pos.top)
            temp.style.left = toPx(pos.left)

            canva.after(temp)

            header.style.background = "rgba(0,0,0,0)"
          }, timeout)
        }
      }
    });
  }
}

function getPosition(elem){
  const rect = elem.getBoundingClientRect()
  return {
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height
  }
}

function toPx(val){
  return [val, 'px'].join('')
}
