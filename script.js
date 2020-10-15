let drop_area;

drop_area = document.getElementById("drop-area")
drop_area.addEventListener("dragenter", dragenter, false)
drop_area.addEventListener("dragover", dragover, false)
drop_area.addEventListener("drop", drop, false)

function dragenter(e) {
    e.stopPropagation()
    e.preventDefault()
}


function dragover(e) {
    e.stopPropagation()
    e.preventDefault()
}

function drop(e) {
    e.stopPropagation()
    e.preventDefault()

    const dt = e.dataTransfer
    const files = dt.files
    drop_area.append("<p>" + files[0].name + "<\p>");


}
