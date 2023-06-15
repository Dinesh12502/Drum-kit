for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var butinnerHTML=this.innerHTML;
    helpSound(butinnerHTML);
    buttonAnimation(butinnerHTML);
    
});}
document.addEventListener("keypress",function(event){
    helpSound(event.key);
    buttonAnimation(event.key);
})
function helpSound(key){
    switch (key) {
        case "d":
            var audio0=new Audio('./sounds/tom-1.mp3');
            audio0.play();
            break;
        case "i":
            var audio1=new Audio('./sounds/tom-2.mp3');
            audio1.play();
            break;
        case "n":
            var audio2=new Audio('./sounds/tom-3.mp3');
            audio2.play();
            break;
        case "e":
            var audio3=new Audio('./sounds/tom-4.mp3');
            audio3.play();
            break;
        case "s":
            var audio4=new Audio('./sounds/crash.mp3');
            audio4.play();
            break;
        case "h":
            var audio5=new Audio('./sounds/kick-bass.mp3');
            audio5.play();
            break;
        case "k":
            var audio6=new Audio('./sounds/snare.mp3');
            audio6.play();
            break;   
        default:
            console.log(key);
     }
}
function buttonAnimation(currentKey) {

    var acti = document.querySelector("." + currentKey);
  
    acti.classList.add("pressed");
  
    setTimeout(function() {
      acti.classList.remove("pressed");
    }, 100);
  
  }