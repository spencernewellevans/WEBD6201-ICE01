/* Custom JavaScript goes here */

// IIFE - Immediately Invoked Function Expression
// Anonymous self-executing expression
// limits scope leak

"use strict";

(function()
{

    function Start()
    {
        console.log("App Started...");

        let paragraphOneText = "This is a simple site to demonstrate DOM manipulation for ICE 1";

        let paragraphOneElement = document.getElementById("paragraphOne");

        paragraphOneElement.textContent = paragraphOneText;
        paragraphOneElement.className = "fs-4"
    }

    window.addEventListener("load", Start);

})();