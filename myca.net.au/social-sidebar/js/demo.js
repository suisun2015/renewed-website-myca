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
      'chinese':    { class: 'chinese separated', use: true, link: '/sino/main.html' },
      'facebook':   { class: 'facebook',   use: true, link: 'https://www.facebook.com/mycassociates/',                  extras: 'target="_blank"' },
      'wordpress':  { class: 'wordpress',  use: true, link: 'https://mycaworldpress.wordpress.com/' },
      'youtube':    { class: 'youtube',    use: true, link: 'https://www.youtube.com/channel/UCjUpXJ-YR-q8-BW-0l3qPGA', extras: 'target="_blank"' },
      'ato':        { class: 'ato',        use: true, link: 'http://www.ato.gov.au/',                                   extras: 'target="_blank"' },
      'cpa':        { class: 'cpa',        use: true, link: 'http://www.cpaaustralia.com.au/',                          extras: 'target="_blank"' },
      'icca':       { class: 'icca',       use: true, link: 'http://www.charteredaccountants.com.au/',                  extras: 'target="_blank"' }
    }
  });
} else if(currentPage === 'about.html') {
  $.contactButtons({
    //effect  : 'slide-on-scroll',
    effect  : '',
    buttons : {
      'chinese':    { class: 'chinese separated', use: true, link: '/sino/service.html' },
      'facebook':   { class: 'facebook',   use: true, link: 'https://www.facebook.com/mycassociates/',                  extras: 'target="_blank"' },
      'wordpress':  { class: 'wordpress',  use: true, link: 'https://mycaworldpress.wordpress.com/' },
      'youtube':    { class: 'youtube',    use: true, link: 'https://www.youtube.com/channel/UCjUpXJ-YR-q8-BW-0l3qPGA', extras: 'target="_blank"' },
      'ato':        { class: 'ato',        use: true, link: 'http://www.ato.gov.au/',                                   extras: 'target="_blank"' },
      'cpa':        { class: 'cpa',        use: true, link: 'http://www.cpaaustralia.com.au/',                          extras: 'target="_blank"' },
      'icca':       { class: 'icca',       use: true, link: 'http://www.charteredaccountants.com.au/',                  extras: 'target="_blank"' }
    }
  });
} else if(currentPage === 'contact.html') {
  $.contactButtons({
    //effect  : 'slide-on-scroll',
    effect  : '',
    buttons : {
      'chinese':    { class: 'chinese separated', use: true, link: '/sino/service.html' },
      'facebook':   { class: 'facebook',   use: true, link: 'https://www.facebook.com/mycassociates/',                  extras: 'target="_blank"' },
      'wordpress':  { class: 'wordpress',  use: true, link: 'https://mycaworldpress.wordpress.com/' },
      'youtube':    { class: 'youtube',    use: true, link: 'https://www.youtube.com/channel/UCjUpXJ-YR-q8-BW-0l3qPGA', extras: 'target="_blank"' },
      'ato':        { class: 'ato',        use: true, link: 'http://www.ato.gov.au/',                                   extras: 'target="_blank"' },
      'cpa':        { class: 'cpa',        use: true, link: 'http://www.cpaaustralia.com.au/',                          extras: 'target="_blank"' },
      'icca':       { class: 'icca',       use: true, link: 'http://www.charteredaccountants.com.au/',                  extras: 'target="_blank"' }
    }
  });
}
