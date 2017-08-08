var alice = {
    state: 0,
    applyGreeting: function (id) {
        var self = this;
        var idCalled = id || "#" + self.id;
        var terms = vocabulary.greetingsArrayPresentation;
        var ct = $(idCalled).data("terms") || 0;
        $(idCalled).data("terms", ct == terms.length - 1 ? 0 : ct + 1).text(terms[ct]).fadeIn()
            .delay(2000).fadeOut(200, this.applyGreeting);
    },
    removeGreeting: function (id) {
        var self = this;
        $(id).hide();
    },
    writeSomeText: function (id, text, value) {
        
        if (text && text.includes("$")) {
            if (text.includes("$name")) {
                text = text.replace("$name", value);
            }
        }
        $(id).text(text).show().animateCss("fadeIn");
    },
    newUserRegistration: function (user, _jc, callback) {
        if (nameDictionary.includes(user.toUpperCase())) {
            // Success registration!
            _jc.setInLocalStorage(USERNAME, user);
            callback(state["genericState"]);
            console.log(_jc.getFromLocalStorage(USERNAME).user);;
        } else {
            //Error - Name not recognized
            callback(state["errorStateName"]);
        }

    },

}