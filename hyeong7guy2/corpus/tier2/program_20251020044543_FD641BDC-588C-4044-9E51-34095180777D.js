const v0 = [];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8() {
            }
            function f9() {
            }
            class C10 {
            }
            new C10();
            const v12 = class {
            }
            const v13 = {};
            const v14 = class extends v12 {
            }
            const v15 = class {
            }
            v15.toString();
            function f17() {
                return f8;
            }
            const v18 = class extends f17 {
            }
            class C19 {
            }
            try { C19.constructor(); } catch (e) {}
            for (let v21 = 0; v21 < 5; v21++) {
            }
            function f22() {
            }
            f22.e = f22;
            const v23 = {};
            for (let v24 = 0; v24 < 5; v24++) {
            }
            function f25(a26) {
            }
            f25.toString();
            for (let v28 = 0; v28 < 5; v28++) {
                v28 + v28;
            }
            for (let v30 = 0; v30 < 5; v30++) {
                v30 + v30;
            }
            v0.constructor;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v33 = new F1();
class C34 {
    static [v33](a36, a37, a38) {
    }
    static [v33](a40, a41, a42) {
    }
}
