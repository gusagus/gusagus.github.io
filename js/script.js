//event link
$('.page-scroll').on('click', function(e) {
  //ambil isi href
  var isi = $(this).attr('href');

  //lalu tangkap elemen section
  var elemenisi = $(isi);
  //memulai animate scroll

 $('html, body').animate({
   scrollTop: elemenisi.offset().top - 50
 }, 600, 'swing');

  e.preventDefault();
});


//parallax

//About
$(window).on('load', function() {
  $('.pKiri').addClass('pMuncul');
  $('.pKanan').addClass('pMuncul');
});

//scroll
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  //jumbotron

  $('.jumbotron img').css({
    'transform' : 'translate(0px, '+ wScroll/5 +'%)'
  });
  $('.jumbotron h1').css({
    'transform' : 'translate(0px, '+ wScroll/5 +'%)'
  });
  $('.jumbotron p').css({
    'transform' : 'translate(0px, '+ wScroll/4 +'%)'
  });

  //Portfolio
  if (wScroll > $('.portfolio').offset().top - 300) {
    $('.portfolio .thumbnail').each(function(i) {
      setTimeout(function() {
        $('.portfolio .thumbnail').eq(i).addClass('muncul');
      }, 300 *(i+1));
    });
  }
});
