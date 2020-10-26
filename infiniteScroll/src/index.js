document.querySelectorAll("#main").forEach(elem => {
    elem.onscroll = function() {
        if(this.scrollTop + this.clientHeight >= this.scrollHeight) {
            let template = document.querySelector("#template");
            this.appendChild(template);
        }
    }
})