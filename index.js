function receivesAFunction(cb){
    return cb();
}

const returnsANamedFunction = () => {
    const callback = function(){}
    return callback;
};

function returnsAnAnonymousFunction(){
    return () => {};
}