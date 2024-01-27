const circle = document.getElementById('circle');
const circleBorder = document.getElementById('circle-border');

const body = document.getElementById('body');

function mouseskew(){
    let xScale = 1;
    let yScale = 1;
     let preX = 0;
     let preY = 0;

     let timeout;
     body.addEventListener('mousemove',(e)=>{
        clearTimeout(timeout);
        xScale = gsap.utils.clamp(0.8,1.2,e.clientX - preX);
        yScale = gsap.utils.clamp(0.8,1.2,e.clientY - preY);

        preX = e.clientX;
        preY = e.clientY;
        console.log(xScale,yScale);
        circleMove(xScale,yScale);
     timeout = setTimeout(()=>{
           circleBorder.style.transform = 'scale(1,1)'
        },100)
     })
    
}
function circleMove(xScale, yScale) {
    body.addEventListener('mousemove',(e)=>{
    circle.style.left = `${e.clientX}px`;
    circle.style.top = `${e.clientY}px`; 
    
    circleBorder.style.transform = `scale(${xScale},${yScale})`;
    })


}
circleMove();
mouseskew();