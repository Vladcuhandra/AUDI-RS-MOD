slideIndex = 1;

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  slideIndex = n;
  if (n > slides.length - 1) {slideIndex = 0} 
  if (n < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block"; 
  dots[slideIndex].className += " active";
}

function plusSlides(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

function validation() { // Pārbauda, vai ievade ir pareiza (vārds satur tikai latīņu alfabēta burtus)
  var name = document.getElementById("input_name").value;
  var i;
  for (i = 0; i < name.length; i++) {
    if (!"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ".includes(name[i])) {
      // Pārbauda, vai attiecīgais simbols ir no latīņu alfabēta
      alert('Name has to contain only latin alphabet letters, please fix it!');
      return false;
    }
  }
  return true;
}