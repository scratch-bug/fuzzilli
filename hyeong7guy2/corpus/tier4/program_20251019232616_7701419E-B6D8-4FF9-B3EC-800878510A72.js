function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2() {
    return F0;
}
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a5;
}
function f9() {
    let v11 = -428404919 >>> Int16Array;
    v11--;
    new F3(F0, f2, F0);
    v11--;
    class C15 {
    }
    function f16(a17, a18) {
        return -428404919;
    }
    return f16(v11);
}
f9();
f9();
%OptimizeFunctionOnNextCall(f9);
f9();
