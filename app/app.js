(function (global) {

    // Init project.
    // Get the curretn laguage and set it to the framework.
    var userLang = navigator.language || navigator.userLanguage;
    var _jc = jc("it_IT");

    // Instanziate Alice!
    var _alice = alice;

    // Setting state to init state
    _alice.state = state["initialState"];

    // Apply introduction animation
    _alice.applyGreeting("#initialMessage", false);

    // set Timeout to cancel function and continue with our presentation.
    setTimeout(function () {
        _alice.removeGreeting("#initialMessage");
        if (_jc.user === "") {
            // Set state for a new user            
            _alice.state = state["newUser"];
            _alice.writeSomeText("#newMessage", vocabulary.newUser[_jc.language]);
        }
        if (_jc.user !== "") {
            // Set state for an old user 
            _alice.state = state["oldUser"];
            _alice.writeSomeText("#newMessage", vocabulary.oldUser[_jc.language], _jc.user);
        }
        $("#inputBox").show().animateCss("fadeIn");
        $("#inputBox").keypress(function (e) {
            if (e.which == 13) { // enter key
                switch (_alice.state) {
                    case 1:
                        _alice.newUserRegistration($('#inputBox').val(), _jc, function (status) {
                            if (status === state["errorStateName"]) {
                                _alice.state = state["initialState"];
                                _alice.writeSomeText("#newMessage", vocabulary.errorRegistrationUser[_jc.language][(Math.random() * 3)]);
                            }
                            if (status === state["genericState"]) {
                                _alice.state = state["genericState"];
                                _alice.writeSomeText("#newMessage", vocabulary.oldUser[_jc.language], _jc.user);
                                $("#inputBox").val("");
                            }
                        });
                        break;

                }
            }
        });
        //_alice.newUserRegistration("angelo", _jc); 
    }, 4400);

}(window));



// .addEventListener('keypress', function (e) {
//     var key = e.which || e.keyCode;
//     if (key === 13) { // 13 is enter
//       // code for enter
//     }
// });
