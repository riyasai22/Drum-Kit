const instrumentSet=document.querySelector(".instrument_set");
function drums(key)
{
  instrumentSet.innerHTML+=
    `<div class="instrument">
       <button class="${key} drum">${key}</button>
      <div class="img"><img src="images/${key}.png" alt="img" /></div>
    </div>`;
}
const d1=new drums("q");
const d2=new drums("w");
const d3=new drums("e");
const d4=new drums("r");
const d5=new drums("t");
const d6=new drums("y");
const d7=new drums("u");

const drum=document.querySelectorAll(".drum");

for(let i=0;i<drum.length;i++)
{
  drum[i].addEventListener("click", function() {
    var drumHTML=this.innerHTML;
    playSound(drumHTML);
    Animate(drumHTML);
  });
}
document.addEventListener("keypress",(e)=>{
  playSound(e.key);
  Animate(e.key);
});

function playSound(key)
{
  switch(key)
  {
    case "q":
      var q=new Audio("sounds/q.mp3");
      q.play();
      break;
    case "w":
      var w=new Audio("sounds/w.mp3");
      w.play();
      break;
    case "e":
      var e=new Audio("sounds/e.mp3");
      e.play();
      break;
    case "r":
      var r=new Audio("sounds/r.mp3");
      r.play();
      break;
    case "t":
      var t=new Audio("sounds/t.mp3");
      t.play();
      break;
    case "y":
      var y=new Audio("sounds/y.mp3");
      y.play();
      break;
    case "u":
      var u=new Audio("sounds/u.mp3");
      u.play();
      break;
  }
}

function Animate(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(()=>{
    activeButton.classList.remove("pressed");
  }, 100);
}
