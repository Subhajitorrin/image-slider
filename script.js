function setImagesAndText() {
    let slides = document.querySelectorAll('.slide')
    slides.forEach((ele, index) => {
        ele.style.left = `${index * 100}%`
    })
    let text = document.querySelectorAll('.text')
    text.forEach((ele, index) => {
        ele.style.left = `${index * 100}%`
    })
}
setImagesAndText()

let superindex = 0;
function slide(index) {
    let slides = document.querySelectorAll('.slide')
    slides.forEach((ele) => {
        ele.style.transform = `translateX(-${index * 100}%)`
    })
    let text = document.querySelectorAll('.text')
    text.forEach((ele) => {
        ele.style.transform = `translateX(-${index * 355}%)`
    })
}

// setInterval(() => {
//     if(superindex>4)superindex=0
//     slide(superindex)
//     superindex++
// }, 3000);

let plate1 = document.querySelector("#plate1");
let plate2 = document.querySelector("#plate2");
let plate3 = document.querySelector("#plate3");
let plate4 = document.querySelector("#plate4");
let plate5 = document.querySelector("#plate5");
plate1.addEventListener('click', () => {
    removeActive()
    plate1.classList.add("active");
    slide(0)
})
plate2.addEventListener('click', () => {
    removeActive()
    plate2.classList.add("active");
    slide(1)
})
plate3.addEventListener('click', () => {
    removeActive()
    plate3.classList.add("active");
    slide(2)
})
plate4.addEventListener('click', () => {
    removeActive()
    plate4.classList.add("active");
    slide(3)
})
plate5.addEventListener('click', () => {
    removeActive()
    plate5.classList.add("active");
    slide(4)
})

let plates = document.querySelectorAll(".item");
function removeActive() {
    plates.forEach((plate) => {
        plate.classList.remove("active");
    });
}
