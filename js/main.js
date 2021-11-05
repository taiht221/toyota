$(document).ready(function () {
  const LOCATION = {
    'An Giang': [
      {
        value: 'Toyota Can Tho - CN An Giang',
      },
    ],
    'Ba Ria Vung Tau': [
      {
        value: 'Toyota Vung Tau',
      },
    ],
    'Bac Giang': [
      {
        value: 'Toyota Bac Giang',
      },
    ],
    'Bac Ninh': [
      {
        value: 'Toyota Bac Ninh',
      },
    ],
    'Binh Duong': [
      {
        value: 'Toyota Bien Hoa - CN Binh Duong',
      },
      {
        value: 'Toyota Binh Duong',
      },
    ],
    'Binh Dinh': [
      {
        value: 'Toyota Binh Dinh',
      },
    ],
    'Binh Thuan': [
      {
        value: 'Toyota Binh Thuan',
      },
    ],
    'Can Tho': [
      {
        value: 'Toyota Can Tho',
      },
      {
        value: 'Toyota Ninh Kieu',
      },
    ],
    'Dak Lak': [
      {
        value: 'Toyota Buon Ma Thuot',
      },
    ],
    'Da Nang': [
      {
        value: 'Toyota Da Nang',
      },
      {
        value: 'Toyota Okayama Da Nang',
      },
    ],
    'Dong Nai': [
      {
        value: 'Toyota Bien Hoa',
      },
      {
        value: 'Toyota Bien Hoa - Dong Nai',
      },
    ],
    'Gia Lai': [
      {
        value: 'Toyota Gia Lai',
      },
    ],
    'Ha Noi': [
      {
        value: 'Toyota Hoan Kiem',
      },
      {
        value: 'Toyota Giai Phong',
      },
      {
        value: 'Toyota Thang Long',
      },
      {
        value: 'Toyota My Dinh',
      },
      {
        value: 'Toyota Ha Dong',
      },
      {
        value: 'Toyota Long Bien',
      },
      {
        value: 'Toyota Giai Phong - CN Phap Van',
      },
      {
        value: 'Toyota Thanh Xuan',
      },
      {
        value: 'Toyota Thai Hoa Tu Liem',
      },
      {
        value: 'Toyota IDMC Hoai Duc',
      },
    ],
    'Ha Tinh': [
      {
        value: 'Toyota Ha Tinh',
      },
    ],
    'Hai Duong': [
      {
        value: 'Toyota Hai Duong',
      },
    ],
    'Hai Phong': [
      {
        value: 'Toyota Hai Phong',
      },
      {
        value: 'Toyota Nankai Hai Phong',
      },
    ],
    'Ho Chi Minh': [
      {
        value: 'Toyota An Thanh Fukushima',
      },
      {
        value: 'Toyota Dong Sai Gon',
      },
      {
        value: 'Toyota Hung Vuong',
      },
      {
        value: 'Toyota Ben Thanh',
      },
      {
        value: 'Toyota Ly Thuong Kiet',
      },
      {
        value: 'Toyota Hiroshima Tan Cang - HT',
      },
      {
        value: 'Toyota Dong Sai Gon - CN Go Vap',
      },
      {
        value: 'Toyota An Suong',
      },
      {
        value: 'Toyota Ly Thuong Kiet - CN Tan Phu',
      },
      {
        value: 'Toyota Ly Thuong Kiet - CN Tan Phu',
      },
      {
        value: 'Toyota Ben Thanh - CN Chuong Duong',
      },
      {
        value: 'Toyota Dong Sai Gon - CN Nguyen Van Luong',
      },
      {
        value: 'Toyota Hung Vuong - CN Tan Tao',
      },
      {
        value: 'Toyota An Suong - CN Truong Chinh',
      },
      {
        value: 'Toyota Ben Thanh - CN Binh Tan',
      },
      {
        value: 'Toyota Phu My Hung - CN Quan 7',
      },
    ],
    'Khanh Hoa': [
      {
        value: 'Toyota Nha Trang',
      },
    ],
    'Long An': [
      {
        value: 'Toyota Long An',
      },
    ],
    'Nam Dinh': [
      {
        value: 'Toyota Giai Phong - CN Nam Dinh',
      },
    ],
    'Nghe An': [
      {
        value: 'Toyota Vinh',
      },
      {
        value: 'Toyota Song Lam',
      },
    ],
    'Phu Tho': [
      {
        value: 'Toyota IDMC Phu Tho',
      },
    ],
    'Quang Binh': [
      {
        value: 'Toyota Quang Binh',
      },
    ],
    'Quang Ninh': [
      {
        value: 'Toyota Quang Ninh',
      },
      {
        value: 'Toyota Cam Pha',
      },
    ],
    'Son La': [
      {
        value: 'Toyota Tay Bac - Son La',
      },
    ],
    'Tay Ninh': [
      {
        value: 'Toyota Ly Thuong Kiet - CN Tay Ninh',
      },
    ],
    'Tien Giang': [
      {
        value: 'Toyota Tien Giang',
      },
    ],
    'Thai Nguyen': [
      {
        value: 'Toyota Thai Nguyen',
      },
    ],
    'Thanh Hoa': [
      {
        value: 'Toyota Thanh Hoa',
      },
      {
        value: 'Toyota Doanh Thu',
      },
    ],
    'Thua Thien Hue': [
      {
        value: 'Toyota Hue',
      },
    ],
    'Vinh Phuc': [
      {
        value: 'Toyota Hiroshima Vinh Phuc - HT',
      },
    ],
  }
  const baseIMG = 'images/'

  // Scroll Show Header
  function menuTop() {
    if ($(this).scrollTop() >= 300) {
      $('.header').addClass('active')
    } else {
      $('.header').removeClass('active')
    }
  }
  menuTop()
  $(window).scroll(menuTop)

  // Click change  color
  const el = document.getElementsByClassName('color')
  for (let i = 0; i < el.length; i++) {
    el[i].onclick = changeColor
  }
  function changeColor(e) {
    // get the hex color
    let hex = e.target.getAttribute('data-color')
    // updated url
    let updateColor = baseIMG + hex + '.jpg'
    // update src of image
    document.getElementById('productImage').src = updateColor
    document.getElementById(
      'product-colorName',
    ).textContent = `Màu ${hex} - 1K3`
  }
  $(document).on('click', '.pick .color', function () {
    $(this).addClass('color-active').siblings().removeClass('color-active')
  })

  //  Choose Province
  $('.register-form1 .province').on('change', function () {
    $('.register-form1 .retailer').html('')
    const value = LOCATION[this.value]
    value.map((e) => {
      $('.register-form1 .retailer').append(
        `<option value="${e.value}">${e.value}</option>`,
      )
    })
  })
  $('.register-form2 .province').on('change', function () {
    $('.register-form2 .retailer').html('')
    const value = LOCATION[this.value]
    value.map((e) => {
      $('.register-form2 .retailer').append(
        `<option value="${e.value}">${e.value}</option>`,
      )
    })
  })
  // validate form
  $.validator.addMethod(
    'phoneReg',
    function (value) {
      return /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/.test(
        value,
      )
    },
    'Xin hãy nhập đúng số điện thoại',
  )
  $('.register-form1').validate({
    rules: {
      fullname: {
        required: true,
        minlength: 1,
      },
      phonenumber: {
        number: true,
        required: true,
        phoneReg: true,
      },
    },
    messages: {
      fullname: {
        required: 'Vui lòng nhập họ và tên',
        minlength: 'Vui lòng nhập ít nhất 1 ký tự',
      },
      phonenumber: {
        number: 'Vui lòng nhập định dạng số',
        required: 'Vui lòng nhập số điện thoại',
      },
    },
  })
  $('.register-form2').validate({
    rules: {
      fullname: {
        required: true,
        minlength: 1,
      },
      phonenumber: {
        number: true,
        required: true,
        phoneReg: true,
      },
    },
    messages: {
      fullname: {
        required: 'Vui lòng nhập họ và tên',
        minlength: 'Vui lòng nhập ít nhất 1 ký tự',
      },
      phonenumber: {
        number: 'Vui lòng nhập định dạng số',
        required: 'Vui lòng nhập số điện thoại',
      },
    },
  })
  // Submit Form
  $('.register-form1').on('submit', function (e) {
    e.preventDefault()
    var name = $(".register-form1 input[name='fullname']").val()
    var phoneNumber = $(".register-form1 input[name='phonenumber']").val()
    var province = $('.register-form1 .province').val()
    var retailer = $('.register-form1 .retailer').val()
    $.ajax({
      data: {
        name: name,
        phone: phoneNumber,
        city: province,
        agency: retailer,
      },
      url: 'https://client-pages.adnetwork.vn/control/API/Toyota_Nov2021.php',
      type: 'post',
      success: function (res) {
        if (res === 'phone') {
          $('.er-phone1').css('display', 'block')
        } else {
          if (JSON.parse(res).status === 'ok') {
            $('.homepage').css('display', 'none')
            $('#modal').addClass('active')
            window.location.replace('https://www.toyota.com.vn/xe-moi')
          }
        }
      },
      error: function (res) {
        alert('Có lỗi xảy ra vui lòng nhập lại')
      },
    })
  })
  $('.register-form2').on('submit', function (e) {
    e.preventDefault()
    var name = $(".register-form2 input[name='fullname']").val()
    var phoneNumber = $(".register-form2 input[name='phonenumber']").val()
    var province = $('.register-form2 .province').val()
    var retailer = $('.register-form2 .retailer').val()
    $.ajax({
      data: {
        name: name,
        phone: phoneNumber,
        city: province,
        agency: retailer,
      },
      url: 'https://client-pages.adnetwork.vn/control/API/Toyota_Nov2021.php',
      type: 'post',
      success: function (res) {
        if (res === 'phone') {
          $('.er-phone2').css('display', 'block')
        } else {
          if (JSON.parse(res).status === 'ok') {
            $('.homepage').css('display', 'none')
            $('#modal').addClass('active')
            window.location.replace('https://www.toyota.com.vn/xe-moi')
          }
        }
      },
      error: function (res) {
        alert('Có lỗi xảy ra vui lòng nhập lại')
      },
    })
  })
})
