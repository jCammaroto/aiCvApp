/* Macro for Alice */
var USERNAME = "username";

/* State of Alice */
var state = {
    // Inital State with Greetings.
    initialState: 0,
    
    // Detect a new user online.
     newUser: 1,
    
    // An old user detected. 
    oldUser: 2,

    // Generic state to determinate the next one.
    genericState: 3,

    // Error state name undefined
    errorStateName: 4,

    // Error generic - Text to complex
    genericStateError: 5,
};