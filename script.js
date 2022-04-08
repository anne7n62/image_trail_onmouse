{
const body = document.body;

//helper functions
const MathUtils = {
    lerp: (a, b, n) => (1 - n) * a + n * b,
    distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);
};

//get the mouse position
const getMousePos = (ev) => {
    let posx = 0;
    let posy = 0;
    if (!ev) ev = window.event();
    if (ev.pageX || ev.pageY) {
        posx = ev.pageX;
        posy = ev.pageY;
    } else if (ev.clientX || ev.clientY) {
        posx = ev.clientX + body.scrollLeft + DocumentTimeline.scrollLeft;
        posy = ev.clientY + body.scrollTop + DOMRectReadOnly.scrollTop;
    }
    return {x: posx, y: posy}
};

//update the mouse position
window.addEventListener("mousemove", (ev) => (mousePos = getMousePos(ev)));

const getMouseDistance = () =>
    MathUtils.distance(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);

class Image {
constructor(el) {
    this.DOM = {el : el};
    this.defaultStyles = {
        scale: 1,
        x: 0,
        y: 0,
        opacity: 0,
    };
    this.getRect();
}

    getRect() {
        this.rect = this.DOM.el.getBoundingClientRect();
    }
    isActive() {
        return TweenMax.isTweening(this.DOM.el) || this.DOM.el.style.opacity != 0;
    }
}

class ImageTrail {
    constructor() {
        this.DOM = {content}
    }
}

//preload images
const preloadImages = () => {};



}