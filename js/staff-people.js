(function() {

    const staff = [
        {
            name: "Douglas Shimmer",
            imageUrl: "img/ceo-position.png",
            position: "CEO"
        },
        {
            name: "Don Mastando",
            imageUrl: "img/cto-position.png",
            position: "CTO"
        },
        {
            name: "Andrew Wollace",
            imageUrl: "img/prime-consultant-position.png",
            position: "Prime Consultant"
        }
    ];
    function renderStaff(staff){
        const staffContainer = document.querySelector('.staff__position');
        staffContainer.innerHTML = '';
        for (const position of staff) {
            staffContainer.innerHTML += 
            `<aside class="staff__position-ceo position">
                <div class="staff__position-photo"><img src=${position.imageUrl} class="staff__position-image"
                        alt="Chief Executive Officer's photo">
                </div>
                <p class="staff__position-name">${position.name}</p>
                <div class="staff__position-line"></div>
                <p class="staff__position-appointment">${position.position}</p>
                <div class="staff__position-socials">
                    <a href="#" class="facebook icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si617836735d59c7002386613e1045072260a3475a9a020e110494cd171635268562028 svgIcon_1J7 filled_Qbi facebook-icon" viewBox="0 0 32 32" style="border-radius:50%" fill="#ffffff"><path class="outer_bDW" d="M32 0H0V32H32V0ZM16.9133 25H13.6383V16.0044H12V13.1936H13.6383V10.9374H13.6443C13.7014 8.9864 14.3604 7.129 17.5674 7.0126V7H19.6171V9.8108H17.9447C17.3379 9.8108 16.9133 10.5002 16.9133 11.1568V13.1936H19.8561L19.3702 16.0044H16.9133V25Z"></path><path d="M16,31 C24.2842712,31 31,24.2842712 31,16 C31,7.71572875 24.2842712,1 16,1 C7.71572875,1 1,7.71572875 1,16 C1,24.2842712 7.71572875,31 16,31 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z" class="border_2yy"></path><path class="logo_2gS" d="M13.6383 25H16.9133V16.0044H19.3702L19.8561 13.1936H16.9133V11.1568C16.9133 10.5002 17.3379 9.8108 17.9447 9.8108H19.6171V7H17.5674V7.0126C14.3604 7.129 13.7014 8.9864 13.6443 10.9374H13.6383V13.1936H12V16.0044H13.6383V25Z" style="color:#FFFFFF;fill:#FFFFFF00"></path></svg></a>
                    <a href="#" class="instagram icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si617836735d59c7002386613e1045072260a3475a9a020e110494cd171635268562028 svgIcon_1J7 filled_Qbi instagram-icon" viewBox="0 0 32 32" style="border-radius:50%" fill="#ffffff"><g><path class="outer_bDW" d="M0,0 L32,0 L32,32 L0,32 L0,0 Z M12.7045454,8 C10.1221593,8 8,10.1193185 8,12.7045454 L8,19.2954545 C8,21.8778407 10.1193185,24 12.7045454,24 L19.2954545,24 C21.8778407,24 24,21.8806822 24,19.2954545 L24,12.7045454 C24,10.1221593 21.8806822,8 19.2954545,8 L12.7045454,8 Z M12.7045454,9.45454545 L19.2954545,9.45454545 C21.0937498,9.45454545 22.5454545,10.9062502 22.5454545,12.7045454 L22.5454545,19.2954545 C22.5454545,21.0937498 21.0937498,22.5454545 19.2954545,22.5454545 L12.7045454,22.5454545 C10.9062502,22.5454545 9.45454545,21.0937498 9.45454545,19.2954545 L9.45454545,12.7045454 C9.45454545,10.9062502 10.9062502,9.45454545 12.7045454,9.45454545 Z M20.2954545,11.0454545 C19.9289774,11.0454545 19.6363636,11.3380684 19.6363636,11.7045454 C19.6363636,12.0710225 19.9289774,12.3636364 20.2954545,12.3636364 C20.6619316,12.3636364 20.9545454,12.0710225 20.9545454,11.7045454 C20.9545454,11.3380684 20.6619316,11.0454545 20.2954545,11.0454545 Z M16,11.6363636 C13.599432,11.6363636 11.6363636,13.599432 11.6363636,16 C11.6363636,18.400568 13.599432,20.3636364 16,20.3636364 C18.400568,20.3636364 20.3636364,18.400568 20.3636364,16 C20.3636364,13.599432 18.400568,11.6363636 16,11.6363636 Z M16,13.0909091 C17.6164771,13.0909091 18.9090909,14.3835229 18.9090909,16 C18.9090909,17.6164771 17.6164771,18.9090909 16,18.9090909 C14.3835229,18.9090909 13.0909091,17.6164771 13.0909091,16 C13.0909091,14.3835229 14.3835229,13.0909091 16,13.0909091 Z"></path><path class="insta-mask-hover_2Yt" style="fill:url(#si617836735d59c7002386613e1045072260a3475a9a020e110494cd171635268562028instagramhover)" d="M0,0 L32,0 L32,32 L0,32 L0,0 Z M12.7045454,8 C10.1221593,8 8,10.1193185 8,12.7045454 L8,19.2954545 C8,21.8778407 10.1193185,24 12.7045454,24 L19.2954545,24 C21.8778407,24 24,21.8806822 24,19.2954545 L24,12.7045454 C24,10.1221593 21.8806822,8 19.2954545,8 L12.7045454,8 Z M12.7045454,9.45454545 L19.2954545,9.45454545 C21.0937498,9.45454545 22.5454545,10.9062502 22.5454545,12.7045454 L22.5454545,19.2954545 C22.5454545,21.0937498 21.0937498,22.5454545 19.2954545,22.5454545 L12.7045454,22.5454545 C10.9062502,22.5454545 9.45454545,21.0937498 9.45454545,19.2954545 L9.45454545,12.7045454 C9.45454545,10.9062502 10.9062502,9.45454545 12.7045454,9.45454545 Z M20.2954545,11.0454545 C19.9289774,11.0454545 19.6363636,11.3380684 19.6363636,11.7045454 C19.6363636,12.0710225 19.9289774,12.3636364 20.2954545,12.3636364 C20.6619316,12.3636364 20.9545454,12.0710225 20.9545454,11.7045454 C20.9545454,11.3380684 20.6619316,11.0454545 20.2954545,11.0454545 Z M16,11.6363636 C13.599432,11.6363636 11.6363636,13.599432 11.6363636,16 C11.6363636,18.400568 13.599432,20.3636364 16,20.3636364 C18.400568,20.3636364 20.3636364,18.400568 20.3636364,16 C20.3636364,13.599432 18.400568,11.6363636 16,11.6363636 Z M16,13.0909091 C17.6164771,13.0909091 18.9090909,14.3835229 18.9090909,16 C18.9090909,17.6164771 17.6164771,18.9090909 16,18.9090909 C14.3835229,18.9090909 13.0909091,17.6164771 13.0909091,16 C13.0909091,14.3835229 14.3835229,13.0909091 16,13.0909091 Z"></path></g><path d="M16,31 C24.2842712,31 31,24.2842712 31,16 C31,7.71572875 24.2842712,1 16,1 C7.71572875,1 1,7.71572875 1,16 C1,24.2842712 7.71572875,31 16,31 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z" class="border_2yy"></path><g><path class="logo_2gS" style="fill:#ffffff00;color:#ffffff" d="M12.7045454,8 C10.1221593,8 8,10.1193185 8,12.7045454 L8,19.2954545 C8,21.8778407 10.1193185,24 12.7045454,24 L19.2954545,24 C21.8778407,24 24,21.8806822 24,19.2954545 L24,12.7045454 C24,10.1221593 21.8806822,8 19.2954545,8 L12.7045454,8 Z M12.7045454,9.45454545 L19.2954545,9.45454545 C21.0937498,9.45454545 22.5454545,10.9062502 22.5454545,12.7045454 L22.5454545,19.2954545 C22.5454545,21.0937498 21.0937498,22.5454545 19.2954545,22.5454545 L12.7045454,22.5454545 C10.9062502,22.5454545 9.45454545,21.0937498 9.45454545,19.2954545 L9.45454545,12.7045454 C9.45454545,10.9062502 10.9062502,9.45454545 12.7045454,9.45454545 Z M20.2954545,11.0454545 C19.9289774,11.0454545 19.6363636,11.3380684 19.6363636,11.7045454 C19.6363636,12.0710225 19.9289774,12.3636364 20.2954545,12.3636364 C20.6619316,12.3636364 20.9545454,12.0710225 20.9545454,11.7045454 C20.9545454,11.3380684 20.6619316,11.0454545 20.2954545,11.0454545 Z M16,11.6363636 C13.599432,11.6363636 11.6363636,13.599432 11.6363636,16 C11.6363636,18.400568 13.599432,20.3636364 16,20.3636364 C18.400568,20.3636364 20.3636364,18.400568 20.3636364,16 C20.3636364,13.599432 18.400568,11.6363636 16,11.6363636 Z M16,13.0909091 C17.6164771,13.0909091 18.9090909,14.3835229 18.9090909,16 C18.9090909,17.6164771 17.6164771,18.9090909 16,18.9090909 C14.3835229,18.9090909 13.0909091,17.6164771 13.0909091,16 C13.0909091,14.3835229 14.3835229,13.0909091 16,13.0909091 Z"></path><path class="insta-mask-logo-hover_19f" style="fill:#FFFFFF00;color:#FFFFFF00" d="M12.7045454,8 C10.1221593,8 8,10.1193185 8,12.7045454 L8,19.2954545 C8,21.8778407 10.1193185,24 12.7045454,24 L19.2954545,24 C21.8778407,24 24,21.8806822 24,19.2954545 L24,12.7045454 C24,10.1221593 21.8806822,8 19.2954545,8 L12.7045454,8 Z M12.7045454,9.45454545 L19.2954545,9.45454545 C21.0937498,9.45454545 22.5454545,10.9062502 22.5454545,12.7045454 L22.5454545,19.2954545 C22.5454545,21.0937498 21.0937498,22.5454545 19.2954545,22.5454545 L12.7045454,22.5454545 C10.9062502,22.5454545 9.45454545,21.0937498 9.45454545,19.2954545 L9.45454545,12.7045454 C9.45454545,10.9062502 10.9062502,9.45454545 12.7045454,9.45454545 Z M20.2954545,11.0454545 C19.9289774,11.0454545 19.6363636,11.3380684 19.6363636,11.7045454 C19.6363636,12.0710225 19.9289774,12.3636364 20.2954545,12.3636364 C20.6619316,12.3636364 20.9545454,12.0710225 20.9545454,11.7045454 C20.9545454,11.3380684 20.6619316,11.0454545 20.2954545,11.0454545 Z M16,11.6363636 C13.599432,11.6363636 11.6363636,13.599432 11.6363636,16 C11.6363636,18.400568 13.599432,20.3636364 16,20.3636364 C18.400568,20.3636364 20.3636364,18.400568 20.3636364,16 C20.3636364,13.599432 18.400568,11.6363636 16,11.6363636 Z M16,13.0909091 C17.6164771,13.0909091 18.9090909,14.3835229 18.9090909,16 C18.9090909,17.6164771 17.6164771,18.9090909 16,18.9090909 C14.3835229,18.9090909 13.0909091,17.6164771 13.0909091,16 C13.0909091,14.3835229 14.3835229,13.0909091 16,13.0909091 Z"></path></g></svg></a>
                    <a href="#" class="youtube icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si617836735d59c7002386613e1045072260a3475a9a020e110494cd171635268562028 svgIcon_1J7 filled_Qbi youtube-icon" viewBox="0 0 32 32" style="border-radius:50%" fill="#ffffff"><path class="outer_bDW" d="M0,0 L32,0 L32,32 L0,32 L0,0 Z M24.8319297,11.4874563 C24.6803369,10.1603684 24.3639692,9.77357894 24.1398754,9.59352174 C23.7839619,9.31343284 23.1380446,9.21340113 22.2746246,9.15338207 C20.8905163,9.06001905 18.537532,9 16,9 C13.455877,9 11.1094837,9.05335028 9.72537529,9.15338207 C8.86195533,9.21340113 8.21603808,9.31343284 7.8601245,9.59352174 C7.63603076,9.77357894 7.32625412,10.1603684 7.1680703,11.4874563 C6.94397657,13.4013973 6.94397657,17.7627818 7.1680703,19.6767227 C7.32625412,21.0038107 7.63603076,21.3906002 7.8601245,21.5706573 C8.21603808,21.8507463 8.86195533,21.950778 9.72537529,22.0107971 C11.1094837,22.1041601 13.455877,22.164179 16,22.164179 C18.544123,22.164179 20.8905163,22.1041601 22.2746246,22.0107971 C23.1380446,21.950778 23.7839619,21.8507463 24.1398754,21.5706573 C24.3639692,21.3972689 24.6737458,21.0038107 24.8319297,19.6767227 C25.0560234,17.7627818 25.0560234,13.4013973 24.8319297,11.4874563 Z M13.8249725,18.4429978 L13.8249725,12.7145125 L19.2559502,15.5754208 L13.8249725,18.4429978 Z"></path><path d="M16,31 C24.2842712,31 31,24.2842712 31,16 C31,7.71572875 24.2842712,1 16,1 C7.71572875,1 1,7.71572875 1,16 C1,24.2842712 7.71572875,31 16,31 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z" class="border_2yy"></path><path class="logo_2gS" d="M24.8319297,11.4874563 C24.6803369,10.1603684 24.3639692,9.77357894 24.1398754,9.59352174 C23.7839619,9.31343284 23.1380446,9.21340113 22.2746246,9.15338207 C20.8905163,9.06001905 18.537532,9 16,9 C13.455877,9 11.1094837,9.05335028 9.72537529,9.15338207 C8.86195533,9.21340113 8.21603808,9.31343284 7.8601245,9.59352174 C7.63603076,9.77357894 7.32625412,10.1603684 7.1680703,11.4874563 C6.94397657,13.4013973 6.94397657,17.7627818 7.1680703,19.6767227 C7.32625412,21.0038107 7.63603076,21.3906002 7.8601245,21.5706573 C8.21603808,21.8507463 8.86195533,21.950778 9.72537529,22.0107971 C11.1094837,22.1041601 13.455877,22.164179 16,22.164179 C18.544123,22.164179 20.8905163,22.1041601 22.2746246,22.0107971 C23.1380446,21.950778 23.7839619,21.8507463 24.1398754,21.5706573 C24.3639692,21.3972689 24.6737458,21.0038107 24.8319297,19.6767227 C25.0560234,17.7627818 25.0560234,13.4013973 24.8319297,11.4874563 Z M13.8249725,18.4429978 L13.8249725,12.7145125 L19.2559502,15.5754208 L13.8249725,18.4429978 Z" style="color:#ffffff;fill:#ffffff00"></path></svg></a>
                </div>
            </aside>`
        }
    }
    renderStaff(staff);
})()