let share = document.querySelectorAll(".share");
let shareBox = document.querySelector(".share-box");

share.forEach(idx =>{

    idx.addEventListener("click", () => {
        shareBox.classList.toggle("open")
        console.log("clicked")
    });
})
