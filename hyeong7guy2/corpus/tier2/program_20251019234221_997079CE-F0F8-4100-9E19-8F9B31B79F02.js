function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            try {
                function F7(a9, a10, a11, a12) {
                    if (!new.target) { throw 'must be called with new'; }
                    eval();
                }
                function F15(a17, a18) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                function f19() {
                    return F0;
                }
                F15();
                function F21(a23) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                function f24() {
                    return f24;
                }
                const v25 = {};
                const v26 = {};
                const v27 = class {
                }
                function f28() {
                    return f4;
                }
                const v29 = {};
                class C30 {
                }
                const v31 = {};
                function f32(a33) {
                    return a33;
                }
                function f34(a35, a36) {
                    return a36;
                }
                function f37(a38) {
                    return f37;
                }
            } catch(e39) {
            }
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v40 = new F0(F0, F0);
class C41 {
    static [v40](a43, a44, a45) {
    }
    static [v40](a47, a48, a49) {
    }
}
