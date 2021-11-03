$(document).ready(function () {
  AOS.init()
  function menuTop() {
    if ($(this).scrollTop() >= 300) {
      $('.header').addClass('active')
    } else {
      $('.header').removeClass('active')
    }
  }
  menuTop()
  $(window).scroll(menuTop)
  $('.hamburger').on('click', function () {
    $('.hamburger').toggleClass('active')
    $('.menu-right').toggleClass('active')
  })
})

// Click on a color
const base = 'images/'
var el = document.getElementsByClassName('color')
for (var i = 0; i < el.length; i++) {
  el[i].onclick = changeColor
}

function changeColor(e) {
  // get the hex color
  let hex = e.target.getAttribute('data-color')
  // updated url
  let updateColor = base + hex + '.jpg'
  // update src of image
  document.getElementById('productImage').src = updateColor
  document.getElementById('product-colorName').textContent = `Màu ${hex} - 1K3`
}

$(document).on('click', '.pick .color', function () {
  $(this).addClass('color-active').siblings().removeClass('color-active')
})
AOS.init()
