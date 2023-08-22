function showorno() {
  var x = document.getElementById("myDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function darkMode() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        // Whenever the user explicitly chooses light mode
        localStorage.theme = 'light'

        // Whenever the user explicitly chooses dark mode
        localStorage.theme = 'dark'

        // Whenever the user explicitly chooses to respect the OS preference
        localStorage.removeItem('theme')
}

// function mapsapple(){
// let cords = document.createElement("a");np
//   if(navigator.userAgent.match(/Mac|iPhone|iPad/)){
//     jizodb.1jizo.image
//   }

// }

// import exifr from './node_modules/exifr/dist/lite.esm.js';


// import exifr from 'exifr'

const uploadedImage = document.getElementById('image');

uploadedImage.onchange = function () {
  console.log(uploadedImage.files[0]);
  exifr.gps(uploadedImage.files[0]).then(data => console.log(data))
}