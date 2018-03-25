//Toggle Navbar Color on Open, Add Padding to Bottom of Open Navbar
$('.navbar-toggler').click(function(){
    $('.navbar').toggleClass('bg-black navbar-toggle-padding');
});

//Close nav menu when item clicked
$(document).click('.navbar-toggler',function(e) {
    if( $(e.target).is('a') ) {
        $('#navbarNavDropdown').removeClass('show');
        $('.navbar').removeClass('bg-black navbar-toggle-padding');
    }
});