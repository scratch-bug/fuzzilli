function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = new Uint32Array();
            v8.fill(v8, a3);
            const v10 = v8.length;
            v10 + v10;
        }
        f5(f5);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v14 = new F0(F0, F0);
class C15 {
    static [v14](a17, a18, a19) {
    }
}
const v21 = Symbol.iterator;
const v23 = globalThis.encodeURI;
try { v23(v21); } catch (e) {}
