
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  document.getElementById("b1").addEventListener("click",()=>{scrollToSection("intro")});
document.getElementById("b2").addEventListener("click",()=>{scrollToSection("work")});
// document.getElementById("b3").addEventListener("click",()=>{scrollToSection("work")});
document.getElementById("b4").addEventListener("click",()=>{scrollToSection("contact")});
