function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
function f3() {
    return F0;
}
function f4(a5) {
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10() {
            function f11(a12) {
                function F14(a16, a17) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                for (let v18 = 0; v18 < 5; v18++) {
                    F14.d >>>= 100000;
                }
                arguments[2];
            }
            f11(f11);
            f11();
            %OptimizeMaglevOnNextCall(f11);
            return f11;
        }
        Object.defineProperty(this, "toString", { get: f10 });
    }
    const v23 = new F6(F6, F6);
    class C24 {
        static [v23](a26, a27, a28) {
        }
    }
    return a5;
}
Object.defineProperty(C2, "g", { get: f3, set: f4 });
C2.g = F0;
