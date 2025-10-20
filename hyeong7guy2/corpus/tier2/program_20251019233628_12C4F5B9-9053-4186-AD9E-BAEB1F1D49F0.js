const v0 = {};
const v1 = [v0,v0,v0,v0];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        const v7 = {};
        function f8(a9) {
            const v10 = a9 >>> a9;
            const v11 = v1.constructor;
            const t9 = v11(f6, v11, v7, v10)[1];
            t9(v10, v0);
            return v10;
        }
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v15 = new F2();
class C16 {
    static [v15](a18, a19, a20) {
    }
    static [v15](a22, a23, a24) {
    }
}
