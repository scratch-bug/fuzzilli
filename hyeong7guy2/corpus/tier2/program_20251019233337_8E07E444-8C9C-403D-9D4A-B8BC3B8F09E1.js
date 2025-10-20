const v0 = {};
const v1 = [v0,v0,v0,v0];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v9 = a8 >>> a8;
            const v10 = v1.constructor;
            const v12 = v10(f6, v10)[1];
            v12(v1, f7, v0);
            v12(v9, v0);
        }
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v15 = new F2(v0, v0);
class C16 {
    static [v15](a18, a19, a20) {
    }
    static [v15](a22, a23, a24) {
    }
}
