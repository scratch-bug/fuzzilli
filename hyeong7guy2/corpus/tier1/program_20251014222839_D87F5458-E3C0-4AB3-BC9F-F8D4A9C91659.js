function f0() {
}
function f2() {
}
Symbol.iterator;
const v8 = class {
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function f13() {
        function f14(a15) {
            function F18(a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
                const v22 = this.constructor;
                try { new v22(v8, 11037); } catch (e) {}
            }
            new F18();
            new F18();
            eval();
        }
        %OptimizeMaglevOnNextCall(f14);
        return f14;
    }
    Object.defineProperty(this, "toString", { get: f13 });
}
const v29 = new F9();
class C30 {
    static [v29](a32, a33, a34) {
    }
}
