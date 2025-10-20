function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            a7 === a7;
            a7 == a4;
        }
        [,a4] = "-65537";
        f6(a4);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
    f5();
    %PrepareFunctionForOptimization(f5);
    %OptimizeMaglevOnNextCall(f5);
}
const v12 = new F1(F1, F1);
class C13 {
}
class C14 extends C13 {
    static [v12](a16, a17, a18) {
    }
}
