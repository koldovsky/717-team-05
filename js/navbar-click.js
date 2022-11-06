(function(){
    const navBurgetrList = document.querySelector('#navburger');
    const navigatinLinks = document.querySelectorAll('.header__nav__item>a');
    navigatinLinks.forEach((navLink) => {
        navLink.addEventListener("click", (_) => {
            if(navBurgetrList.classList.contains('show')){
              document.body.classList.remove("overflow: hidden; padding-right: 17px;");
              navBurgetrList.classList.remove("show");
            }
        })
     }
    );
})()