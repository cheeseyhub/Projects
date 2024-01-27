


/* ======LOCOMOTIVE ============= */
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
/* ======LOCOMOTIVE ============= */


/* ====TIME====== */
const date = document.getElementById('date')
const time = document.getElementById('time')
const nav = document.getElementById('nav')
console.log(nav)
setInterval(function timer()  {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let hour = currentDate.getHours();
    let mins = currentDate.getMinutes();
     mins < 10 ? mins =`0${mins}`:mins ;
     hour < 10 ? hour = `0${hour}`: hour; 
     date.innerHTML = `${year} &COPY;`
     hour < 12 ? time.innerText = `${hour} : ${mins} AM EST` :time.innerText = `${hour} : ${mins} PM EST` ;
    
    
},60)

/* || TIME */
/* \=========MOUSE CIRCLE=========== */
let timeout;
function mouseSkew(){
 
  var xScale = 1;
  var yScale = 1;
  let previousX = 0;
  let previousY = 0;
  window.addEventListener('mousemove', (details)=>{
    clearTimeout(timeout);
    xScale = gsap.utils.clamp(0.8,1.2,details.x - previousX);
    yScale = gsap.utils.clamp(0.8,1.2,details.y - previousY);

    previousX = details.x;
    previousY = details.y;

    mouseCircle(xScale,yScale);

  timeout =  setTimeout(function(){
      const circle = document.getElementById('mini-circle');
      circle.style.transform = `translate(${details.clientX}px,${details.clientY}px) scale(1,1)`;
    
    },100)
      });

    
}

const main = document.getElementById('main');
function mouseCircle(xScale,yScale) {
  main.addEventListener('mousemove', (e)=>{
    let  mouseX = e.clientX;
    let  mouseY = e.clientY;
    const circle = document.getElementById('mini-circle');
    circle.style.transform = `translate(${mouseX}px,${mouseY}px) scale(${xScale},${yScale})`;
    
      
  
  }
  )
}

/* ========MOUSE CIRCLE ========= */
/* =======First section animations ========== */
function firstPageAnim(){
  var tl = gsap.timeline();

  tl.from("#nav",{
    y:'-10',
    opacity:0,
    duration:1 ,
    ease:Expo.easeInOut
  })
  .to('.slide-elem',{
    y:0,
    duration:1,
    delay:-1,
    ease:Expo.easeInOut,
    stagger:0.2
  })
   .from('#top__footer',{
    y:-10,
    opacity:0,
    duration:1,
    ease:Expo.easeInOut
   }
    )
}
/* =======First page animations ========== */
/* ==========Images on hover ========== */
let imageBoxs = document.querySelectorAll('.box');
 
 
 imageBoxs.forEach(box => {
  let diffrot = 0;
  let rotate = 0;
  box.addEventListener('mousemove', (details) => {
   diffrot = details.clientX - rotate;
    rotate = details.clientX;
    
    gsap.to(box.querySelector('img'),{
      opacity:1,
     
      top:(details.clientY - box.getBoundingClientRect().top) /20,
      left:details.clientX ,
      rotate:gsap.utils.clamp(-20,20,diffrot)
    
    })
  })
  box.addEventListener('mouseout', (details) => {
    gsap.to(box.querySelector('img'),{
      opacity:0,
      ease:Power3,
    })
  })
}) 
 
/* ==========Images on hover ========== */
firstPageAnim()
mouseCircle();
mouseSkew();