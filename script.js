const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 10)

function blurring() {
    load ++

    if(load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale()
    bg.style.filter = `blur(${blurScale()}px)`

    console.log(blurScale())
}

function scale() {
    return ((100-load)/100)
}
function blurScale () {
    return (20-(load/5))
}