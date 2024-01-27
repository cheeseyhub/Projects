/* ==Animations======*/
gsap.to('nav', {
    duration:1,
    height:'15vh',
    backgroundColor: '#000',
    scrollTrigger:{
    trigger: 'nav',
    scroller:'body',
    
    start:'top -10%',
    end:'top -11%',
    scrub:2
}
})
gsap.to('main',{
  backgroundColor: '#000',
  scrollTrigger:{
  trigger:'main',
  scroller:'body',
markers :true,
  start:'top -10%',
  end:'top -20%',
  scrub:2
}
})
/* const cursorCircle =  document.getElementById('circle');
const blurCircle = document.getElementById('circle-blur');
document.addEventListener('mousemove',(details)=>{
cursorCircle.style.left = details.clientX+'px';
cursorCircle.style.top  = details.clientY+'px';
blurCircle.style.left   = details.clientX +'px';
blurCircle.style.top    = details.clientY +'px';
})
 */
/*===Animations======*/