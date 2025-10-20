function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            try {
                const v11 = BigInt.asUintN(60425, -229684853n);
                const v12 = "object" <= a7;
                function f13() {
                    return BigInt;
                }
                function f14() {
                    return f6;
                }
                function F15(a17) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                function f18() {
                    return f13;
                }
                const v19 = class extends F15 {
                }
                function F20(a22, a23) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                function f24(a25, a26, a27, a28) {
                    return a27;
                }
                f24(f13, v12);
                function f30() {
                    return this;
                }
                function f31() {
                    return a7;
                }
                function f32() {
                    return f6;
                }
                class C33 {
                    static [v11](a35, a36) {
                    }
                }
                function f37(a38) {
                    return F1;
                }
                function f39(a40, a41) {
                    return a40;
                }
                function f42(a43) {
                    return a43;
                }
            } catch(e44) {
            }
            return a7;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v45 = new F1();
class C46 {
    static [v45](a48, a49, a50) {
    }
    static [v45](a52, a53, a54) {
    }
}
