document.getElementById("main-app").addEventListener("click", enlarge);

function enlarge() {
    document.getElementsByClassName("modal-backdrop").classList.remove("show");
    document.getElementsByClassName("modal").classList.remove("show");
}
