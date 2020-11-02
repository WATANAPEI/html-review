export default function addModalAction() {
    //const modalButton = document.querySelector("#modalOpen");
    const modal = document.getElementById("modal");
    //const modalButton = document.querySelector("#modalOpen");
    const modalButton = document.getElementById("modalOpen");

    const ms = 400;
    modal.style.transition = "opacity" + ms + "ms";

    modalButton.addEventListener("click", () => {
        setTimeout(() => {
            modal.classList.add("is_open")}
        , 1);
        setTimeout(() => {
            modal.style.opacity = "1"}, 50);
    });

    let modalClose = document.querySelectorAll(".js-modal-close");
    for(let i = 0; i < modalClose.length; i++) {
        modalClose[i].addEventListener("click", () => {
            setTimeout(()=>{modal.style.opacity="0"}, 1);
            setTimeout(()=> { modal.classList.remove("is_open")}, ms);
        });
    }
}