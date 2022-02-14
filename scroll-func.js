window.onscroll = () => {
  if (window.scrollY === 0) {
    $('.input-div').fadeOut(200);

    setTimeout(function() {
      $('.intro-div').fadeIn(200);
    }, 200);
  } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    $('.intro-div').fadeOut(200);

    setTimeout(function() {
      $('.input-div').fadeIn(200).removeClass('invisible');
    }, 200);
  }
}