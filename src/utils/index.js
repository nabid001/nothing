const mobileNav = () =>{
    const navButton = document.querySelector(".hamburger");
    const activeState = document.querySelector(".active");

    let isMobileNavOpen = false;

    navButton.addEventListener("click", () =>{
        isMobileNavOpen = !isMobileNavOpen;

        if(isMobileNavOpen){
            activeState.style.display = "flex";
            document.body.style.overflowY = "hidden"
        } else {
            activeState.style.display = "none";
            document.body.style.overflowY = "auto"
        }

        
    })
}
mobileNav();
 