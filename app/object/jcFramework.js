/*
    My Custom JCFramework
    Written by: Angelo Cammaroto
    Create date: 07/08/2017
    Update date: 07/08/2017
    -----------------------------
    Contacts:
        mail: angelo.cammaroto@gmail.com
        skype: icammaroto
        mobile: +39 3283989650
*/

// Initialize Framework and create a global execution context
; (function (global, $) {


    // Add animate css to jQuery
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);
            });
            return this;
        }
    });

    // Create my custon new object
    var JcFramework = function (language) {
        return new JcFramework.init(language);
    };

    var supportedLangs = {
        it: 'it',
        en: 'en',
        // Add more language
    };

    // Logger messages 
    var logMessages = {
        en: 'Logged In',
        it: 'Inizio sessione'
    };

    // Prototype holds methods (to save memory space)
    JcFramework.prototype = {
        convertLang: function (lang) {
            // Convert language get from navigator or from the user.
            // Addo more stuff.         
            if (lang.includes("it") ||
                lang.includes("italiano") ||
                lang.includes("italian")) this.language = supportedLangs["it"];
            if (lang.includes("en") ||
                lang.includes("english") ||
                lang.includes("inglese")) this.language = supportedLangs["en"];

            // user lang is not supported
            if (!lang.includes("it") && !lag.includes("en")) this.language = supportedLangs["en"];
        },
        validate: function () {
            // check if language is supported.
            if (!supportedLangs[this.language]) {
                this.convertLang(this.language);
            }

        },
        setLanguage: function (lang) {
            // set the language
            this.language = lang;

            // validate
            this.validate();

            // make chainable
            return this;
        },
        getFromLocalStorage: function (key) {
            if(global.localStorage) {
                var value = global.localStorage.getItem(key);
                this.user = value;
            }
            return this;
        },
        setInLocalStorage: function (key, value) {
            if (global.localStorage) {
                global.localStorage.setItem(key, value);
                this.user = value;
            }
            return this;
            
        }

    };

    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    JcFramework.init = function (language) {
        var self = this;
        self.language = language || "en"; //navigator.language || navigator.userLanguage;
        self.user = global.localStorage.getItem(USERNAME) ||  "";
        self.state = null;
        self.validate();
    };

    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    JcFramework.init.prototype = JcFramework.prototype;

    // attach jcFramework to the global object and provide a shorthand ease out poor fingers
    global.JcFramework = global.jc = JcFramework;

}(window, jQuery));