$( document ).ready(function() {
  
  //modal

  $('.modal-link').click(function() {
    $('.modal-wraper').show();
    $(document).on('click.modal', function(e) {
      if (e.target.className == 'modal-wraper' || e.target.className == 'modal_close') {
        $('.modal-wraper').hide();
        $(document).off('click.modal');
      }
    });
  });

  // select

  $('.select').selectmenu();

  //перемещение label в input

  $('.form-control').focus(function() {
    $(this).parent().addClass('is-active');
  });

  $('.form-control').blur(function() {
    if ($(this).val().length === 0) {
      $(this).parent().removeClass('is-active');
    }
  });

  // проверка поля email

  $('#email-field').blur(function() {
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if ($(this).val().length === 0) {

    } else if (testEmail.test(this.value)) {
      $(this).parent().addClass('has-success');
    } else {
      $(this).parent().addClass('has-error');
    }
  });

  // проверка поля name

  $('#name-field').blur(function() {
    var testName = /^[a-zA-Zа-яА-Я]+$/;
    if ($(this).val().length === 0) {

    } else if (testName.test(this.value)) {
      $(this).parent().addClass('has-success');
    } else {
      $(this).parent().addClass('has-error');
    }
  });

  // снятие ошибок с полей email и name

  $('#name-field, #email-field').focus(function() {
    $(this).parent().removeClass('has-success');
    $(this).parent().removeClass('has-error');
  });

  // сятие ошибки с select

  $('.ui-selectmenu-button').click(function() {
    if ($('.select').parent().hasClass('has-error')) {
      $('.select').parent('.form-group').removeClass('has-error');
    }
  })

  // проверка всей формы

  $('.banner-form_accept').click(function() {
    if ($(this).siblings('.form-group').hasClass('has-error') || !$('#terms-checkbox').is(':checked') || $('.select').val() == null || $(this).siblings('.form-group').children('input').val().length === 0) {
      if ($('#email-field').val().length === 0) {
        $('#email-field').parent().addClass('has-error');
      }
      if ($('#name-field').val().length === 0) {
        $('#name-field').parent().addClass('has-error');
      }
      if ($('.select').val() == null) {
        $('.select').parent().addClass('has-error');
      };
      if (!$('#terms-checkbox').is(':checked')) {
        $('#terms-checkbox').parent().addClass('has-error');
        $('#terms-checkbox').on('click.checkboxError', function() {
          $(this).parent().removeClass('has-error');
          $('#terms-checkbox').off('click.checkboxError');
        });
      }
    } else {
      alert('Форма заполнена верно!');
    }
  })
});