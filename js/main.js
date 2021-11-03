$(document).ready(function () {
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

jQuery(function ($) {
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function () {
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
      $animatables = $('.animatable')

    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations)
    }

    // Check all animatables and animate them if necessary
    $animatables.each(function (i) {
      var $animatable = $(this)
      if ($animatable.offset().top + $animatable.height() - 20 < offset) {
        $animatable.removeClass('animatable').addClass('animated')
      }
    })
  }

  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on('scroll', doAnimations)
  $(window).trigger('scroll')
})
