document.querySelectorAll(".iconBtn").forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        const leftMenu = document.querySelector("#left-menu");
        if (leftMenu.classList.contains('closed')){
            leftMenu.classList.remove('closed');
        }
        else{
            leftMenu.classList.add('closed');
        }
    })
})