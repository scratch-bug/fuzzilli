function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            try { Math(Math, Math, Math, a2, Math); } catch (e) {}
            let v9 = -1024;
            const v10 = v9--;
            Math.clz32(v9);
            return v10;
        }
        f5();
        f5(a3);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { configurable: true, enumerable: true, get: f4 });
}
const v14 = new F0();
class C15 {
    static [v14](a17, a18, a19) {
    }
}
