function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        delete arguments[1];
    }
    new F6(F6, undefined);
}
new F0(F0, F0);
