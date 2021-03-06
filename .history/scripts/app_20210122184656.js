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
        paragraphOneElement.className = "fs-5"

        // Step 1. create the element
        let newParagraph = document.createElement("p");
        // Step 2. configure the element
        newParagraph.setAttribute("id","paragraphTwo");
        newParagraph.textContent = "...And this is paragraph two"
        // Step 3. select parent element
        let mainContent = document.getElementsByTagName("main")[0];
        // Step 3. insert the element
        mainContent.appendChild(newParagraph);
        newParagraph.className = "fs-6";

        let paragraphDiv = document.createElement("div");
        let paragraphThree =  `<p id="paragraphThree" class="fs-7 fw-bold">And this is the third paragraph</p>`;
        paragraphDiv.innerHTML = paragraphThree;
    
        // insertions
        newParagraph.before(paragraphDiv);

    }

    window.addEventListener("load", Start);

})();