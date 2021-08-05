const mainImg = document.querySelector(".main-img")
const images = document.querySelectorAll(".img ")



// images.forEach(item =>{
//     item.addEventListener("click", ()=>{
//         mainImg.src = item
//     })
// })


images.forEach(item => {
    item.addEventListener("click", (event) => {
        mainImg.src = item.src
            images.forEach((elem) => elem.classList.remove("border"))
        event.target.classList.add("border")
    })
})













