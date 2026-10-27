/**
 * @return {Function}
 */
function createHelloWorld(){
    return function message(...args){
        return "Hello World";
    };
};

const f = createHelloWorld();

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */