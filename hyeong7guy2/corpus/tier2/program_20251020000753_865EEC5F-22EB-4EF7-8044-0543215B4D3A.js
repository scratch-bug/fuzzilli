function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = [];
            v8[11] = Infinity;
            let v9 = v8[4];
            Math.clz32(v9);
            ++v9;
        }
        f6(f6);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v15 = new F1(F1, Infinity);
class C16 {
    static [v15](a18, a19, a20) {
    }
}
