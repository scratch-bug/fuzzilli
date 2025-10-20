function f0() {
    return f0;
}
class C1 extends f0 {
}
function f2() {
    const v4 = [0.39346707945810944,-991803.8963643727];
    v4[15] |= 256;
    return v4;
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            C1 ** -4294967296;
            Array().forEach(f9);
            function F17(a19, a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F17.constructor = f2;
            const t20 = F17.constructor;
            t20();
        }
        f10();
        f10();
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v26 = new F5(f2, F5);
class C27 {
    static [v26](a29, a30, a31) {
    }
}
