//  this function toggles the accordionn when clicked
// Get accordion button
const accordion = document.getElementsByClassName('accordion');

// Loop through all the accordions and add a click event to them
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function toggleAccordion() {
        const panel = this.nextElementSibling;

        // Add the active class to the accordion 
        this.classList.toggle("accordion-active");

        // open the accordion panel when clicked
        panel.style.maxHeight ?
            panel.style.maxHeight = null :
            panel.style.maxHeight = panel.scrollHeight + "px";

    })
}
