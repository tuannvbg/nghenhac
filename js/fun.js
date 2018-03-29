// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//      dots[i].className = dots[i].className.replace("w3-opacity-off","");
//   }
//   x[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += "w3-opacity-off";
// }


function hide_float_left() {
  var content = document.getElementById('float_content_left');
    var hide = document.getElementById('hide_float_left');
      if (content.style.display == "none")
        {
        content.style.display = "block";
           hide.innerHTML = '<a href="javascript:hide_float_left()">Tắt quảng cáo [X]</a>';
        }
      else 
        { 
          content.style.display = "none";
          hide.innerHTML = '<a href="javascript:hide_float_left()">Xem quảng cáo...</a>';
        }
      }

