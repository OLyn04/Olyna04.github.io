const widthSpan = document.getElementById("current-w");
const heightSpan = document.getElementById("current-h");

function update_wh(){
  if(widthSpan && heightSpan){
      widthSpan.textContent = window.innerWidth;
      heightSpan.textContent = window.innerHeight; 
  }
}

update_wh();    
window.addEventListener("resize", update_wh);
