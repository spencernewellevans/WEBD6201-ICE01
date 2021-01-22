/* Custom JavaScript goes here */

// IIFE - Immediately Invoked Function Expression
// Anonymous self-executing expression
// limits scope leak

(function()
{

    function Start()
    {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);

})();