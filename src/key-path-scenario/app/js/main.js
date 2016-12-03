(function() {
  'use strict';

  const myApp = new Framework7();
  const $$ = Dom7;

  const mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
  });

  // `Home` view
  myApp.onPageInit('home', function (page) {
    console.log('home');
    addActive(0);
  });

  // `Bookmarks` view
  myApp.onPageInit('bookmarks', function (page) {
    console.log('bookmarks');
    addActive(1);

    $$('#col2-8IKRT-p2').on('click', function () {
      $$('#row4-8IKRT-p2').toggleClass('row4-8IKRT-show');
    });
    $$('#col2-8IKRT-p6').on('click', function () {
      $$('#row4-8IKRT-p6').toggleClass('row4-8IKRT-show');
    });
    $$('#col2-8IKRT-p7').on('click', function () {
      $$('#row4-8IKRT-p7').toggleClass('row4-8IKRT-show');
    });
    $$('#col2-8IKRT-p1').on('click', function () {
      $$('#row4-8IKRT-p1').toggleClass('row4-8IKRT-show-student');
    });
    $$('#col2-8IKRT-p3').on('click', function () {
      $$('#row4-8IKRT-p3').toggleClass('row4-8IKRT-show-student');
    });
    $$('#col2-8IKRT-p5').on('click', function () {
      $$('#row4-8IKRT-p5').toggleClass('row4-8IKRT-show-student');
    });
  });

  // `Settings` view
  myApp.onPageInit('settings', function (page) {
    console.log('settings');
    addActive(2);
  });

  myApp.onPageInit('person-1', function (page) {
    console.log('person-1');

    // `More` Button in Person View
    $$('.action-button').on('click', function () {
      const buttons = [
        { text: '<a href="home/rate-student.html">Rate This Student</a>' },
        { text: 'Save This Student' },
        { text: 'Cancel', color: 'red' },
      ];
      myApp.actions(buttons);
    });
  });

  myApp.onPageInit('person-2', function (page) {
    console.log('person-2');

    $$('.action-button').on('click', function () {
      const buttons = [
        { text: '<a href="home/rate-professor.html">Rate This Professor</a>' },
        { text: 'Save This Professor' },
        { text: 'Cancel', color: 'red' }
      ];
      myApp.actions(buttons);
    });
  });

  myApp.onPageInit('rate-student', function (page) {
    console.log('rate-student');
    showAlert(
      '.btn-rate-student',
      'You have successfully submitted a rating'
    );
  });

  myApp.onPageInit('rate-professor-continue', function (page) {
    console.log('rate-professor-continue');
    showAlert(
      '.btn-rate-professor-continue',
      'You have successfully submitted a rating'
    );
  });

  myApp.onPageInit('rating-submission-confirmation', function (page) {
    console.log('rating-submission-confirmation');
    showAlert(
      '.btn-save-coupon',
      'You have successfully saved this coupon'
    );
  })

  function showAlert(btn, msg) {
    $$(btn).on('click', function () {
      myApp.alert(msg, 'Success!');
    });
  }

  function addActive(id) {
    const links = $$('.toolbar-inner').children();
    const activeLink = links[id];

    $$(links).each(function (idx, value) {
      if ($$(value).hasClass('active')) {
        $$(value).removeClass('active');
      }
    });

    $$(activeLink).addClass('active');
  }
})();
