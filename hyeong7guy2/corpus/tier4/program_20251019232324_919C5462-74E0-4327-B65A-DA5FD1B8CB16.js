class C1 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        ("object").localeCompare("object", "object", C1, BigInt64Array);
        return this;
    }
    f6(C1, F2, C1);
    %OptimizeFunctionOnNextCall(f6);
}
new F2(C1, F2);
new F2();
new F2();
