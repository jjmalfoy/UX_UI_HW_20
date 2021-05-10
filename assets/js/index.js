
// Function to jump to a certain element in the DOM
function jumpToElement(element) {
    if (element != null && typeof element === 'string') {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(element).offset().top
        }, 500);
    } else {
        console.log('Error jumping to element.')
    }

}


// Jump to projects section when you click on that button
$("#projects-button").on("click", () => {
    // jump to projects-section-box
    jumpToElement("#projects-section-box")
})


// About button changes text when you select on it to change between HOME and ABOUT ME
// This is a brute force naive implementation and should be cleaned up.
// All strings used throughout the site should be kept in a constants file and referred to.
// This eliminates the need for changing the same thing in multiple places if you want to modify
// static text content within the site.
$("#about-button").on("click", () => {
    var buttonText = $("#about-button").text();

    console.log('got hur')

    if (buttonText.includes('ABOUT ME')) {
        // Hide projects box
        $("#header-wrapper").css("display", "none");
        // Show about me section
        $("#about-me-section-box").css("display", "flex");
        $("#about-button").html("HOME")
    } else {
        console.log('got here projects')
        // remove about me section
        $("#about-me-section-box").css("display", "none");
        // show home page
        $("#header-wrapper").css("display", "grid");
        // change button back to about me
        $("#about-button").html("ABOUT ME");
    }
});

