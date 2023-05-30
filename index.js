//Typing Animation

var options = {
    strings: ['Subhajit Dey', 'Test Analyst',  'Web Developer'],
    typeSpeed: 80,
    backSpeed:80,
    loop: true
  };
var typed = new Typed('.typing', options);


// Download Button

let button = document.querySelector("div a");
button.addEventListener("click",()=>
{
   const span = document.querySelector("a span");
   button.style.paddingRight='10px';
   span.style.visibility="visible";
   setTimeout(()=>
   {
       span.style.visibility="hidden";
       button.style.transition="0.3s ease-in-out";
       button.style.paddingRight="0px";
   },3000);
})

// alert

alert("Welcome To Portfolio of Mr. Subhajit Dey");