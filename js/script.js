(function() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext("2d");
    let activeColor = "white";
    let ticking = false;
    let times = 0;

    function setColor(evt) {
        activeColor = evt.target.getAttribute('name');
        ctx.fillStyle = activeColor;
        if (!ticking) {
            window.requestAnimationFrame(paintCanvas);
        }
        ticking = true;
    }

    function paintCanvas() {
        ctx.fillRect(0, 0, times * 10, times * 10);
        if (times <= 19) {
            times++;
            window.requestAnimationFrame(paintCanvas)
        } else {
            times = 0;
            ticking = false;
        }
    }

    function quitFocus(evt) {
        evt.target.blur();
    }

    // all buttons
    const buttons = document.getElementsByClassName('button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', setColor);
        buttons[i].addEventListener('focus', quitFocus);
    }
})();