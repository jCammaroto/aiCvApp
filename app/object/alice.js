var alice = {
    applyGreeting: function (id) {
        var self = this;
        var idCalled = id || "#" + self.id;
        var terms = vocabulary.greetingsArrayPresentation;
        var ct = $(idCalled).data("terms") || 0;
        $(idCalled).data("terms", ct == terms.length - 1 ? 0 : ct + 1).text(terms[ct]).fadeIn()
            .delay(2000).fadeOut(200, this.applyGreeting);
    },
    removeGreeting: function(id) {
        var self = this;
        $(id).hide();
    },
    writeSomeText: function (id, text) {
        $(id).text(text).show().animateCss("fadeIn");
    },
    newUserRegistration: function (user, _jc) {
        _jc.setInLocalStorage(USERNAME, user);
        console.log(_jc.getFromLocalStorage(USERNAME).user);;
    },

}