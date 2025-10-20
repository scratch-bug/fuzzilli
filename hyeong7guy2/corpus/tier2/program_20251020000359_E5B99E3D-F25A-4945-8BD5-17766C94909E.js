function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7() {
                ("p").substr();
                return ("p").startsWith();
            }
            class C11 {
            }
            const v12 = class {
                [C11](a14, a15) {
                }
            }
            const v17 = Array(a6);
            function f18() {
                if (v17) {
                }
                return F0;
            }
            function f19() {
                return Array;
            }
            function f20(a21) {
                return C11;
            }
            class C22 extends f20 {
            }
            const v23 = f19();
            function F24(a26, a27) {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F24(f4, a2);
            const v29 = {};
            function f30(a31) {
                return v23;
            }
            Object.defineProperty(v29, "g", { enumerable: true, set: f30 });
            for (let v32 = 0; v32 < 5; v32++) {
            }
            f7();
            f7();
            return f5;
        }
        f5();
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v37 = new F0(F0, F0);
v37.toString();
