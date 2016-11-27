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
      console.log('action button clicked');
      const buttons = [
        {
          text: '<a href="home/rate-student.html">Rate This Person</a>'
        },
        {
          text: '<a href="bookmarks/index.html">Save This Person</a>'
        },
        {
          text: 'Cancel',
          color: 'red'
        },
      ];
      myApp.actions(buttons);
    });
  });

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
