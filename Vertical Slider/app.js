const Slider = document.querySelector('.slider-container')
const Leftslide = document.querySelector('.left-slide')
const Rightslide = document.querySelector('.right-slide')

const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')

const slideLength = Rightslide.querySelectorAll('div').length

Leftslide.style.top = `-${(slideLength - 1) * 100}vh`

let activeIndex = 0

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = Slider.clientHeight
    
    if(direction=== 'up'){
        activeIndex++ ;
        if(activeIndex > slideLength - 1){
            activeIndex = 0
        }
    
    }
    else if(direction === 'down'){
        activeIndex-- ;
        if(activeIndex < 0){
            activeIndex = slideLength - 1
        }
    }
    Rightslide.style.transform = `translateY(-${activeIndex * sliderHeight}px)`
    Leftslide.style.transform = `translateY(${activeIndex * sliderHeight}px)`

    
}

