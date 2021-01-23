/* Custom JavaScript goes here */

// IIFE - Immediately Invoked Function Expression
// Anonymous self-executing expression
// limits scope leak

"use strict";

(function()
{
    function displayHome()
    {
        let paragraphOneText = "This is a simple site to demonstrate DOM manipulation for ICE 1";

        let paragraphOneElement = document.getElementById("paragraphOne");

        paragraphOneElement.textContent = paragraphOneText;
        paragraphOneElement.className = "fs-5"
        
        // CREATION
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
    
        // INSERTION
        // insertion before a node example
        //newParagraph.before(paragraphDiv);

        // insertion after a node example
        newParagraph.after(paragraphDiv);

        // DELETION
        // example of removing a single element
        //paragraphOneElement.remove();

        // removeChild example
        mainContent.removeChild(paragraphOneElement);

        // MODIFICATION
        //mainContent.firstElementChild.textContent = "Welcome Home!"
        mainContent.innerHTML = 
        `<h1 id="firstHeading">Welcome to WEBD6201 - Lab 1</h1>
        <p id="paragraphOne" class="fs-3">This is the first paragraph</p>
        `;
    }

    function displayAbout()
    {
        
    }

    function displayProjects()
    {
        
    }

    function displayServices()
    {
        
    }

    function displayContact()
    {
        
    }

    function Start()
    {
        console.log("App Started...");

        switch (document.title) 
        {
          case "Home":
            displayHome();
            break;
          case "About":
            displayAbout();
            break;
          case "Projects":
            displayProjects();
            break;
          case "Services":
            displayServices();
            break;
          case "Contact":
            displayContact();
            break;
        }
        
        

    }

    window.addEventListener("load", Start);

})();