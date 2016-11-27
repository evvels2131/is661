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
  });

  // `Top Lists` view
  myApp.onPageInit('top-lists', function (page) {
    console.log('top-lists');
    addActive(2);
  });

  // `Settings` view
  myApp.onPageInit('settings', function (page) {
    console.log('settings');
    addActive(3);
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
          text: 'Cancel',
          color: 'red'
        }
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
