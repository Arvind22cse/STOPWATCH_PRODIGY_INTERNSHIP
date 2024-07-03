const display=document.getElementById("display");
let timer=null;
let starttime=0;
let elapsedtime=0;
let isrunning=false;
function start(){
if(!isrunning){
    starttime=Date.now()-elapsedtime;//1000000001500-1500=1000000000000
    timer=setInterval(update,10);
    isrunning=true;
}
}
function stop(){
if(isrunning){
    clearInterval(timer);
    elapsedtime=Date.now()-starttime;
    isrunning=false;
}
}
function reset(){
    clearInterval(timer);
     starttime=0;
    elapsedtime=0;
    isrunning=false;
    display.textContent="00:00:00:00"
}
function update(){
    const currentTime=Date.now();  // 1000000001500
    elapsedtime=currentTime-starttime; // 1000000001500 - 1000000000000 = 1500 (milliseconds)
    let hours=Math.floor(elapsedtime/(1000*60*60)); // Math.floor(1500 / 3600000) = 0
    let minutes=Math.floor(elapsedtime/(1000*60)%60); // Math.floor((1500 / 60000) % 60) = 0
    let seconds=Math.floor(elapsedtime/1000 % 60);  // Math.floor((1500 / 1000) % 60) = 1
    let milliseconds=Math.floor(elapsedtime % 1000/10);  // Math.floor(1500 % 1000 / 10) = 50

    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    milliseconds=String(milliseconds).padStart(2,"0");
    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`;  // "00:00:01:50"
}