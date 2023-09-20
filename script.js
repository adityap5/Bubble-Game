// var image =document.querySelector("img");
// var heart = document.querySelector("i");
// var crsr = document.querySelector(".cursor")
// var body = document.querySelector("body");
// image.addEventListener("dblclick",function(){
//  heart.style.opacity ="0.6";
//  heart.style.scale ="1";

//  setTimeout(function(){
//  heart.style.opacity ="0";
//  },800) ;
//  setTimeout(function(){
//    heart.style.scale ="0";
//    },800) ;
// })
 
// body.addEventListener("mousemove",function(dets){
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";

// })
var timer = 60;
var score = 0;
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
        }
    },1000)
}
function getnewhit(){
    var rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;
}
function scored(){
score += 10;
document.querySelector("#scoreval").textContent= score;
}



bubble();
runtimer();
getnewhit();