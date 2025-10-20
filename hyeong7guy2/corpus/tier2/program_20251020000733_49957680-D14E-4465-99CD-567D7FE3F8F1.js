function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            return a6;
        }
        const v8 = ([1000000000000.0,-1000000000000.0,NaN,1e-15]).constructor;
        const v11 = new Proxy(v8, { get: f4 });
        try { new v11(); } catch (e) {}
        function f14(a15) {
            Object.defineProperty(arguments, 2, { configurable: true, value: Float64Array });
            for (const v17 in arguments) {
            }
            return F0;
        }
        f14();
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v19 = new F0(F0, F0);
class C20 {
    static [v19](a22, a23, a24) {
    }
}
