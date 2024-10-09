// global vars
const openBtn = document.getElementById("openBtn");
const replayBtn = document.getElementById("replayBtn");

// console.log(openBtn, replayBtn);

// functions

window.addEventListener("DOMContentLoaded", domStart());

function domStart() {
    openBtn.addEventListener("click", clickOpen);
    addClass(btnList(), "visible");
};

function btnList() {
    return newBtnList = [openBtn, replayBtn];
};

function addClass(elems, className) {
    elems.forEach(elem => {
        elem.classList.add(className);
    });
};

function clickOpen() {
    const content = document.getElementById("content");
    // console.log(content);
    expandMain();
    openBtn.onclick(content.classList.add("visible"));
};

function expandMain() {
    const main = document.querySelector("main");
    console.log(main);
    main.classList.add("lengthen");
};