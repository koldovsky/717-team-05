// IIFE
(function () {

    const clockContainer = document.querySelector('.clock');

    function updateTime() {
        clockContainer.innerText = new Date().toLocaleTimeString();
    }
    setInterval(updateTime, 1000);
})();