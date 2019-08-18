/* Обработка и отправка формы с помошью AJaX */
$('#offer-form').on('submit', function(event) {
  event.preventDefault();  
  $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function(data) {
        $('.success').html(data);
        
      }
  });
});

$(document).ready(function(){
  /*валидация форм */
  $('#brif-form').validate({
    rules: {
      username:{
        required: true,
        minlength: 2,
        maxlength: 15
      }, 
      phone: "required",
      email:{
        required: true,
        email: true
      } 
    },
    messages: {
      username:{
        required: "Укажите ваше имя",
        minlength: jQuery.validator.format("Осталось символов {0}!"),
        maxlength: jQuery.validator.format("Превышен лимит в {0} символов!")
      }, 
      phone:"Укажите ваш номер телефона",
      email: "Укажите ваш email"
    }
  });

  $('#offer-form').validate({
    errorClass: "offer-invalid",
    rules: {
      username:{
        required: true,
        minlength: 2,
        maxlength: 15
      }, 
      userphone: "required"
    },
    messages: {
      username:{
        required: "Укажите ваше имя",
        minlength: jQuery.validator.format("Осталось символов {0}!"),
        maxlength: jQuery.validator.format("Превышен лимит в {0} символов!")
      }, 
      userphone:"Укажите ваш номер телефона"
    }
  });

  $('#modal-form').validate({
    rules: {
      username:{
        required: true,
        minlength: 2,
        maxlength: 15
      }, 
      userphone: "required"
    },
    messages: {
      username:{
        required: "Укажите ваше имя",
        minlength: jQuery.validator.format("Осталось символов {0}!"),
        maxlength: jQuery.validator.format("Превышен лимит в {0} символов!")
      }, 
      userphone:"Укажите ваш номер телефона"
    }
  });
  /*Маска для телефона */
  $('.phone').mask('+7(999) 999-99-99')
  /*Слайдер */
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});