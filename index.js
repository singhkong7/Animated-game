alert("WELCOME TO ACTION HERO GAME");
document.onkeydown = function(e)
{
    keynum=e.keyCode;
    console.log("Key code is: ", keynum)
    {
        if(keynum===38)
        {
            dino=document.querySelector('.dino');
            dino.classList.add('animateDino');
            setTimeout(() => {
                dino.classList.remove('animateDino');
            },700);
            
        }
        if(keynum===39)
        {
            dino=document.querySelector('.dino');
            dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            dino.style.left= dinoX + 112 + "px";
        }
        if(keynum===37)
        {
            dino=document.querySelector('.dino');
            dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            dino.style.left= (dinoX - 112) + "px";
        }
        
    }
}
setInterval(() => 
{
    dino=document.querySelector('.dino');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top')); 
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left')); 
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));    
}, 100);