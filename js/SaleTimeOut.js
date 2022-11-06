// IIFE
(function () {

    const salecontainer = document.querySelector('.saleclock');
    const endSaleTime = new Date ('Nov 8 2022 00:00:00');

    function saleTimer () { 
        const timeLeft = endSaleTime - new Date();

        const days = Math.floor(timeLeft/ 1000 / 60 / 60 / 24);
        const hours = Math.floor(timeLeft/ 1000 / 60 / 60) % 24;
        const minutes = Math.floor(timeLeft/ 1000 / 60) % 60;
        salecontainer.innerText = `${days} days ${hours} hours ${minutes} min`;
        
    };
    function saleFlash () {
        salecontainer.innerText = 'Sale end in';
    };
               
    saleTimer(); 
    setInterval(saleFlash, 2000);
    setInterval(saleTimer, 4000);
    
    
       
})();