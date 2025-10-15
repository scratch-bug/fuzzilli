function f1(a2, a3) {
    function f4(a5) {
        return a3;
    }
    a3 | a3;
    function F9(a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        a12++;
        this.e = a12;
    }
    new F9("2147483647", -3612);
    arguments[Symbol] = f4;
    return -3612;
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1();
