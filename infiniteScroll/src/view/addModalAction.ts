export default function addModalAction() {
    //const modalButton = document.querySelector("#modalOpen");
    const modal = document.getElementById("modal");
    //const modalButton = document.querySelector("#modalOpen");
    const modalButton = document.getElementById("modalOpen");
    const body = document.getElementById("body");

    const ms = 400;
    modal.style.transition = "opacity" + ms + "ms";

    modalButton.addEventListener("click", () => {
        setTimeout(() => { modal.classList.add("is_open")}, 1);
        //setTimeout(() => { body.classList.add("opacity-half")}, 50);
        setTimeout(() => { modal.classList.add("opacity-full")}, 50);
    });

    let modalClose = document.querySelectorAll(".js-modal-close");
    for(let i = 0; i < modalClose.length; i++) {
        modalClose[i].addEventListener("click", () => {
            setTimeout(()=>{modal.classList.remove("opacity-full")}, 1);
            //setTimeout(() => { body.style.opacity = "1"}, 50);
            setTimeout(()=> { modal.classList.remove("is_open")}, ms);
        });
    }
}