const mainImg = document.querySelector(".main-img")
const img = document.querySelectorAll(".img")


img.forEach(elem => {
    elem.addEventListener("click", (event) => {
        mainImg.src = elem.
            images.forEach((elem) => elem.classList.remove("border"))
        event.target.classList.add("border")
    })
})














