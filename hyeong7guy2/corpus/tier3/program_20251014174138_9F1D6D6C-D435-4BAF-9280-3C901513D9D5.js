function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        ("symbol").localeCompare("symbol", "symbol");
        return F0;
    }
    f4(a3);
    f4();
    %OptimizeMaglevOnNextCall(f4);
    f4();
}
new F0();
