function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function f3(a4, a5) {
        return a4;
    }
    this[Symbol.split] = f3;
}
new F0(F0);
