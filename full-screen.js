window.onload = function() {
  console.log("full-screen.js active !")

  var canvas = document.querySelectorAll(".canva");

  for (let canva of canvas) {
    let open = false
    canva.addEventListener('click', function(e) {
      if(this.classList.contains('fullscreen')){
        this.classList.remove('fullscreen')
        setTimeout(function() {
          let temp = document.querySelector('#tempcanva')
          temp.parentNode.removeChild(temp)
          canva.style.position = 'static'
          open = false
        }, 1000)
        //close
      } else {
        if (open) {
          console.log("already open !")
        } else {
          open = true
          //open
          let pos = getPosition(this)
          this.style.width = toPx(pos.width)
          this.style.height = toPx(pos.height)
          this.style.top = toPx(parseInt(pos.top) - 20)
          this.style.left = toPx(pos.left)
          console.log(pos)
          this.classList.add('fullscreen')

          this.style.position = 'fixed'

          console.log("trying to replace element")
          let temp = document.createElement('div')
          temp.setAttribute('class', 'canva')
          temp.setAttribute('id', 'tempcanva')

          temp.style.width = toPx(pos.width)
          temp.style.height = toPx(pos.height)
          temp.style.top = toPx(pos.top)
          temp.style.left = toPx(pos.left)

          canva.after(temp)
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
