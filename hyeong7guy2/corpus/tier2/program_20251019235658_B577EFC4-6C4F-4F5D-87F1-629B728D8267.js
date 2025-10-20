function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [f5];
            let v8;
            try { v8 = v7(v7, a6, F0, f5); } catch (e) {}
            return `toHex${v8}g`;
        }
        f5();
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v12 = new F0();
class C13 {
    static [v12](a15, a16, a17) {
    }
}
