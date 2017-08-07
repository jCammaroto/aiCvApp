// (function (global, $, jc) {
//     var Alice = function () {
//         return new Alice.init();
//     };

//     Alice.prototype = {
//         applyGreeting: function (id, cancel) {
//             var self = this;
//             var _a = Alice();
//             var idCalled = id || "#"+self.id;
//             var terms = _a.vocabulary.greetingsArrayPresentation;
//             if(cancel) terms = [""];
//             var ct = $(idCalled).data("terms") || 0;
//             $(idCalled).data("terms", ct == terms.length - 1 ? 0 : ct + 1).text(terms[ct]).fadeIn()
//                 .delay(2000).fadeOut(200, _a.applyGreeting);
//             //return this;
//         },
//         writeSomeText: function (someText, id) {
//         }
//     };


//     Alice.init = function () {
//         var self = this;
//         self.vocabulary = vocabulary;
//     };

//     Alice.init.prototype = Alice.prototype;
//     global.Alice = global.alice = Alice;
// }(window, jQuery, JcFramework))
