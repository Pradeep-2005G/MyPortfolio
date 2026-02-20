// Theme toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", ()=>{
  document.body.classList.toggle("light");
});

// Typing animation
const text = ["Web Developer", "Electrical Engineer", "Freelancer", "Problem Solver" , " Graphic Designer" , "Cyber Analyst"];
let i=0,j=0,current="",isDeleting=false;
const typingEl = document.querySelector(".typing");

function type(){
  if(i<text.length){
    if(!isDeleting && j<=text[i].length){
      current=text[i].substring(0,j++);
    }else if(isDeleting && j>=0){
      current=text[i].substring(0,j--);
    }
    typingEl.innerHTML=current;
    if(j===text[i].length){isDeleting=true;}
    if(isDeleting && j===0){isDeleting=false;i=(i+1)%text.length;}
  }
  setTimeout(type,120);
}
type();
