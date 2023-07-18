let cups = document.querySelectorAll(".small-cup")
let bigCup = document.querySelector(".cup")
let litre = document.querySelector(".lit")
let lHalf = document.querySelector(".remaining")
let pHalf = document.querySelector(".percentage")
let percent = document.querySelector(".percent")

//ml to l is vol divided by 1000
//the remained volume is gotten by substracting the actual vol in litres
// by total l which is 2
// the % is gotten by diving 100 by total cups
// depending on the index of the given cup

function addColors(index) {
    for (let i = 0; i <= index; i++) {
       cups[i].classList.add('active')
    }
}

function removeColors(index) {
    for (let i = index; i < cups.length; i++) {
        const element = cups[i];
        element.classList.remove("active")
    }
}

cups.forEach((el, index) =>{
    el.addEventListener('click', ()=>{
        addColors(index)
        removeColors(index)
        cups[index].classList.add("active")
    })
})
function fillPecentage() {
   for (let i = 0; i < cups.length; i++) {
        const el = cups[i];
    
        el.addEventListener("click", ()=>{
            percent.innerHTML = `${(100 / cups.length) * (i + 1)}%`
            pHalf.style.height = `${(100 / cups.length) * (i + 1)}%`
            lHalf.style.height = `${100 - ((100 / cups.length) * (i + 1))}%`
            litre.innerHTML = `${2 - (0.25 * (i +1))}L`
        })
    }
}

fillPecentage()