function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = [];
            v8[11] = Infinity;
            const v9 = v8[4];
            class C11 {
            }
            v9?.e;
            C11.toString();
            v9 >>> 7;
        }
        f6(f6);
        f6(f6);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v17 = new F1();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
