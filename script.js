document.getElementById("contact").addEventListener("click", (e)=>{
    e.stopPropagation();
    document.getElementById("contact-ops").classList.toggle("show");
});

document.getElementById("contact-ops").addEventListener("click", (e) => {
    e.stopPropagation(); // prevent clicks inside resume from closing it
});

document.body.addEventListener("click", ()=>{
    document.getElementById("contact-ops").classList.remove("show");
})

document.getElementById("resume-btn").addEventListener("click", (e)=>{
    e.stopPropagation();
    document.getElementById("resume").classList.toggle("show");
})

document.getElementById("resume").addEventListener("click", (e) => {
    e.stopPropagation(); // prevent clicks inside resume from closing it
});

document.body.addEventListener("click", ()=>{
    document.getElementById("resume").classList.remove("show");
})