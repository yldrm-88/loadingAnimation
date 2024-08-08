window.addEventListener("load",()=>{
    const loadContainer=document.querySelector(".loader-container");
    setTimeout(()=>{
        loadContainer.style.display="none";
    },2000)
})