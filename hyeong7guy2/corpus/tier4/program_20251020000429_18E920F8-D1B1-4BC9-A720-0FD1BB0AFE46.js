function f0(a1, a2) {
    a2 | a2;
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        Error.prepareStackTrace = Error;
        Error().stack;
    }
    new F4();
    return f0;
}
f0();
