

function jumpToElement(element) {
    if (element != null && typeof element === 'string') {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(element).offset().top
        }, 500);
    } else {
        console.log('Error jumping to element.')
    }

}
$("#projects-button").on("click", () => {
    // jump to projects-section-box
    jumpToElement("#projects-section-box")
})

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

