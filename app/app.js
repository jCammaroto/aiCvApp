(function (global) {

    // Init project.
    // Get the curretn laguage and set it to the framework.
    var userLang = navigator.language || navigator.userLanguage;
    var _jc = jc("it_IT");

    // Instanziate Alice!
    var _alice = alice;
    
    // Apply introduction animation
    _alice.applyGreeting("#initialMessage", false);

    // set Timeout to cancel function.
    setTimeout(function (){
        _alice.applyGreeting = null;
    }, 15000);
    

}(window));

