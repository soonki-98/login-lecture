"use strict";

const id = document.querySelector("#id"),
    pw = document.querySelector("#pass"),
    loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", login => {
    const req = {
        id: id.value,
        pw: pw.value,
    };
})