document.addEventListener('DOMContentLoaded', () => {
    const space_bar = document.getElementById('space_bar');

    // Event listener for the spacebar
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            spaceBar(); //spacebar pressed call the function
        }
    });
});

function spaceBar() {
    window.location.href = '/Client/Views/home.html'; // Redirect to home
}


// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
spaceSS();

function spaceSS() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(spaceSS, 3000);
}