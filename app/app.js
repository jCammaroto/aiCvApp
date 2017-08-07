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
        _alice.applyGreeting = null;
        if(_jc.user === "") {
            _alice.writeSomeText("#initialMessage", vocabulary.newUser[_jc.language]);
        }
        _alice.newUserRegistration("angelo", _jc);
    }, 4400);

}(window));

