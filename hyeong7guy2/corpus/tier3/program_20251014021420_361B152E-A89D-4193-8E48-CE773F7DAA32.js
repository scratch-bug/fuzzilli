function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function* f7(a8, a9, a10) {
        yield Set;
        return f7;
    }
    f7(Set, Set, this);
    f7();
    %OptimizeMaglevOnNextCall(f7);
    f7();
}
new F1();
new F1();
