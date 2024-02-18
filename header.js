// Selecting elements
const hiddenSearchBtn = document.querySelector("#hidden-search-btn");
const middleSection = document.querySelector(".middle-section");
const header=document.querySelector("header");


window.addEventListener("resize", () => {
    console.log(window.innerWidth);
});
// Function to check if inner width is less than 812 pixels
function isInnerWidthLessThan812() {
    return window.innerWidth < 812;
}

if(window.innerWidth<812){
    console.log(window.innerWidth);
    // Event listener for the hidden search button
    hiddenSearchBtn.addEventListener("click", () => {
    middleSection.style.display = "flex";
    hiddenSearchBtn.style.display="none";

    document.body.addEventListener("click",(event)=>{
        // check is event happened inside the navbar 
        var isClickInsideNavbar = header.contains(event.target);
        // if event is outside the navbar this code gets execute
        if(!isClickInsideNavbar){
            // just hide the search element 
            middleSection.style.display = "none";
            hiddenSearchBtn.style.display="block";
        }
        
    });
    
});
}
