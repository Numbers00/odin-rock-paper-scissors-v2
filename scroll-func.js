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
// let lastScrollTop = 0;

// // credits: https://stackoverflow.com/a/31223774
// // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
// window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
//   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//   if (st > lastScrollTop) {
//     $('.intro-div').fadeOut(200);

//     setTimeout(function() {
//       $('.input-div').fadeIn(200).removeClass('invisible');
//     }, 200);
//   } else {
//     $('.input-div').fadeOut(200);

//     setTimeout(function() {
//       $('.intro-div').fadeIn(200);
//     }, 200);
//   }
//   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
// }, false);