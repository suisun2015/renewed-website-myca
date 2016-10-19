// Google Fonts
WebFontConfig = {
  google: { families: [ 'Lato:400,700,300:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

// Initialize Share-Buttons
// language option
var currentPage = document.location.pathname.match(/[^\/]+$/)[0];

if(currentPage === 'main.html') {
  $.contactButtons({
    //effect  : 'slide-on-scroll',
    effect  : '',
    buttons : {
      'english':    { class: 'english separated', use: true, link: '/main.html' },
      'facebook':   { class: 'facebook',   use: true, link: 'https://www.facebook.com/mycassociates/', extras: 'target="_blank"' },
      'weixin':     { class: 'weixin',     use: true, link: '#none',                                   extras: 'data-toggle="modal" data-target="#WeChatModal"' },
      'yeeyi':      {
        class: 'yeeyi',
        use: true,
        link: 'http://www.yeeyi.com/bbs/forum.php?mod=viewthread&tid=2740667&highlight=%BB%AA%C8%CB%D7%A8%D2%B5%C9%CC%CE%F1%BB%E1%BC%C6%CB%B0%CE%F1%B7%FE%CE%F1%A3%AC%C8%AB%C4%EA%CC%D7%B2%CD%B6%A8%BC%DB%CE%DE%B6%EE%CD%E2%B7%D1%D3%C3%A3%AC%D0%C2%C9%FA%D2%E2%CC%D8%BC%DB%A3%AC%2B%CB%E6%CA%B1%BD%E2%B4%F0%A3%AC%C9%CF%C3%C5',
        extras: 'target="_blank"'
      },
      'cpa':        { class: 'cpa',        use: true, link: 'http://www.cpaaustralia.com.au/', extras: 'target="_blank"' }
    }
  });
} else if(currentPage === 'service.html') {
  $.contactButtons({
    //effect  : 'slide-on-scroll',
    effect  : '',
    buttons : {
      'english':    { class: 'english separated', use: true, link: '/about.html' },
      'facebook':   { class: 'facebook',   use: true, link: 'https://www.facebook.com/mycassociates/', extras: 'target="_blank"' },
      'weixin':     { class: 'weixin',     use: true, link: 'http://weixin://dl/chat?MYCASSOCIATE' },
      'yeeyi':      {
        class: 'yeeyi',
        use: true,
        link: 'http://www.yeeyi.com/bbs/forum.php?mod=viewthread&tid=2740667&highlight=%BB%AA%C8%CB%D7%A8%D2%B5%C9%CC%CE%F1%BB%E1%BC%C6%CB%B0%CE%F1%B7%FE%CE%F1%A3%AC%C8%AB%C4%EA%CC%D7%B2%CD%B6%A8%BC%DB%CE%DE%B6%EE%CD%E2%B7%D1%D3%C3%A3%AC%D0%C2%C9%FA%D2%E2%CC%D8%BC%DB%A3%AC%2B%CB%E6%CA%B1%BD%E2%B4%F0%A3%AC%C9%CF%C3%C5',
        extras: 'target="_blank"'
      },
      'cpa':        { class: 'cpa',        use: true, link: 'http://www.cpaaustralia.com.au/', extras: 'target="_blank"' }
    }
  });
} else if(currentPage === 'contact.html') {
  $.contactButtons({
    //effect  : 'slide-on-scroll',
    effect  : '',
    buttons : {
      'english':    { class: 'english separated', use: true, link: '/contact.html' },
      'facebook':   { class: 'facebook',   use: true, link: 'https://www.facebook.com/mycassociates/', extras: 'target="_blank"' },
      'weixin':     { class: 'weixin',     use: true, link: 'http://weixin://dl/chat?MYCASSOCIATE' },
      'yeeyi':      {
        class: 'yeeyi',
        use: true,
        link: 'http://www.yeeyi.com/bbs/forum.php?mod=viewthread&tid=2740667&highlight=%BB%AA%C8%CB%D7%A8%D2%B5%C9%CC%CE%F1%BB%E1%BC%C6%CB%B0%CE%F1%B7%FE%CE%F1%A3%AC%C8%AB%C4%EA%CC%D7%B2%CD%B6%A8%BC%DB%CE%DE%B6%EE%CD%E2%B7%D1%D3%C3%A3%AC%D0%C2%C9%FA%D2%E2%CC%D8%BC%DB%A3%AC%2B%CB%E6%CA%B1%BD%E2%B4%F0%A3%AC%C9%CF%C3%C5',
        extras: 'target="_blank"'
      },
      'cpa':        { class: 'cpa',        use: true, link: 'http://www.cpaaustralia.com.au/', extras: 'target="_blank"' }
    }
  });
}
