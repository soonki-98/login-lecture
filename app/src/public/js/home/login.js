"use strict";

const id = document.querySelector("#id"),
    pw = document.querySelector("#pass"),
    loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", login => {
    const req = {
        id: id.value,
        psword: pw.value,
    };
    
    fetch("/login", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    }).then((res) => res.json())
      .then((res) => console.log(res));
})