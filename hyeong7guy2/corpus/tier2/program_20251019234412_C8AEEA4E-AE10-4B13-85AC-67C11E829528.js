function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = eval();
            const v9 = v8 ?? v8;
            v9 ?? v9;
            const v12 = new Uint32Array(a3);
            const v13 = v12.length;
            v13 || v13;
            return a3;
        }
        f5(F0);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v17 = new F0();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
