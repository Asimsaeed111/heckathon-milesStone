let animatedButton = document.getElementById("toggle-skills") as HTMLButtonElement
let Skills = document.getElementById("skills") as HTMLElement

animatedButton.addEventListener('click', ()=>{
    if(Skills.style.display ==="none"){
        Skills.style.display = "block"
    }
    else{
        Skills.style.display = "none"
    }
})
