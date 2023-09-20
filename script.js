var timer = 60;
var score = 0;
var hitrn = 0;
function bubble(){
    var clutter = "";
 console.log(val);
for (var i = 1; i<=115; i++) {
 var val = Math.floor(Math.random()*10);
 clutter += ` <div class="bubble">${val}</div>`
}

document.querySelector(".mbtm").innerHTML = clutter;
}
function runtimer(){
   var timerint= setInterval(function(){
        if (timer > 0) {
           
        
            timer --;
            document.querySelector("#timer").textContent= timer;

        }else{
            clearInterval(timerint);
            document.querySelector(".mbtm").innerHTML =`<h1>GAME OVER </h1>`
        }
    },1000)
}
function getnewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
function increasescored(){
score += 10;
document.querySelector("#scoreval").textContent = score;
}
document.querySelector(".mbtm").addEventListener("click",function(dtes){
var u = Number(dtes.target.textContent);
if (hitrn == u){
    increasescored();
    bubble();
    getnewhit();
}
})


bubble();
runtimer();
getnewhit();