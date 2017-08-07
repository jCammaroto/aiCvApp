(function (global) {

    // Init project.
    // Get the curretn laguage and set it to the framework.
    var userLang = navigator.language || navigator.userLanguage;
    var _jc = jc("it_IT");

    // Instanziate Alice!
    var _alice = alice;

    // Apply introduction animation
    _alice.applyGreeting("#initialMessage", false);

    // set Timeout to cancel function and continue with our presentation.
    setTimeout(function () {
        _alice.removeGreeting("#initialMessage");
        if(_jc.user === "") {
            _alice.writeSomeText("#newMessage", vocabulary.newUser[_jc.language]);
            $("#inputBox").show().animateCss("fadeIn");
        }
        //_alice.newUserRegistration("angelo", _jc);
    }, 4400);

}(window));

