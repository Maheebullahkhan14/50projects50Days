const circles = document.querySelectorAll('.circle')
const Nextbtn = document.getElementById('Next')
const PrevBtn = document.getElementById('prev')
const Progress_bar = document.getElementById('progress-bar')

var currentactive = 1

Nextbtn.addEventListener('click',function(){
    currentactive++ 
    if(currentactive > circles.length){
        currentactive = circles.length
    }
    update()
})

PrevBtn.addEventListener('click',function(){
    currentactive--;

    if(currentactive < 1){
        currentactive = 1
    }
    update()
})

function update(){
    circles.forEach((circle ,index) =>{
        // console.log(circle)
        if(index < currentactive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    var activeCircles = document.querySelectorAll('.active')

    Progress_bar.style.width = (activeCircles.length-1)/(circles.length - 1) * 100 + '%'
    
    if(currentactive == 1){
        PrevBtn.disabled = true
    }else if(currentactive == circles.length){
        Nextbtn.disabled = true
    }else{
        PrevBtn.disabled = false
        Nextbtn.disabled = false
    }



}