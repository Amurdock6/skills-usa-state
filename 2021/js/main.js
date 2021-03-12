window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    setTimeout( function() {
        preload.classList.add('preload-finish');
    }, 0 );
});


// jQuery(document).ready( function($) {
//     var revealClass = '.animated';
//     var targetClass = '.has-scroll-reveal:not(' + revealClass + ')';
//     var offset = 0; // Offset from bottom of viewport in pixels.

//     var winHeight = $(window).height();

//     // Recalc height of window in case of resize
//     $(window).bind('resizeEnd', function() {
//       winHeight = $(window).height();
//     });

//     // Fire when page loads
//     triggerAnimation(revealClass, targetClass, offset, winHeight);

//     // Also fire on scroll
//     $(window).on('scroll', function() {
//         triggerAnimation(revealClass, targetClass, offset, winHeight);
//     }); // window.on('scroll')

// }); // document.ready

// function triggerAnimation(revealClass, targetClass, offset, winHeight) {

//       // Get current scrollPos
//       var trigger = $(window).scrollTop() + winHeight - offset;

//       // Loop through elements we're affecting
//       $(targetClass).each(function() {
//         var elementOffset = $(this).offset().top;

//         if( elementOffset < trigger ) {

//           $(this).addClass( revealClass.replace('.','') );
//         }
//       });

// }

// $(window).resize(function() {

//     if(this.resizeTO) clearTimeout(this.resizeTO);

//     this.resizeTO = setTimeout(function() {
//         $(this).trigger('resizeEnd');
//     }, 30);

// });