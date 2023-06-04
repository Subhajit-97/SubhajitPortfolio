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

// alert("Welcome To Portfolio of Mr. Subhajit Dey");

// function
function update()
{
  alert("Will update very soon");
}

// access the img 
 let slideImages = document.querySelectorAll('.slides img');
// access the next and prev  buttons
 let next = document.querySelector('.next');
 let prev = document.querySelector('.prev');
 // access the indicators
 let dots = document.querySelectorAll('.dot');
 var counter = 0;
 // code for next button
 next.addEventListener('click',slideNext);
 function slideNext()
  {
     slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
       if(counter >= slideImages.length-1)
             {
                counter = 0;
             }
       else
             {
               counter++;
             }
             slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
             indicators();
  }
// code for prev button
prev.addEventListener('click',slidePrev);
function slidePrev()
{
 slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
 if(counter == 0)
 {
   
   counter = slideImages.length-1;
 }
 else
 {
   counter--;
 }
 slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
 indicators();
}
// auto sliding

function autoSliding()
{
  deletInterval = setInterval(timer,4000);
  function timer()
  {
    slideNext();
    indicators();
  }
}
autoSliding();

// stop auto sliding when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover',function()
{
  clearInterval(deletInterval);
});
// resume auto sliding when mouse is out
container.addEventListener('mouseout',autoSliding);

// add and remove active class from the indicators
function indicators()
{
  for(i=0; i < dots.length; i++)
  {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[counter].className += ' active';
}

// add click event to the indicators
function switchImage(currentImage)
{
   currentImage.classList.add('active');
   var imageID = currentImage.getAttribute('attr');
   if(imageID > counter)
   {
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    counter = imageID;
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
   }
   else if(imageID == counter)
   {
    return;
   }
   else
   {
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    counter = imageID;
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
   }
   indicators();
}


// // css slider with caption
// let flag = 0;
// function controller(x)
// {
//   flag = flag+x;
//   slideshow(flag);
// }
// slideshow(flag);
// function slideshow(num)
// {
//   let Slide = document.getElementsByClassName('slide');
//   if (num == Slide.length)
//   {
//     flag = 0;
//     num = 0;

//   }
//   if (num < 0)
//   {
//     flag = Slide.length-1;
//   }
//   for(let y of Slide)
//   {
//     y.style.display = "none";
//   }
//   Slide[num].style.display = "block";
// }