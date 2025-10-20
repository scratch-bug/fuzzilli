function f1() {
}
WebAssembly.instantiateStreaming().catch(f1);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10, a11, a12) {
            const v14 = DataView.prototype;
            try { v14.getFloat64(); } catch (e) {}
        }
        %OptimizeMaglevOnNextCall(f9);
        f9();
        function f17(a18) {
        }
        return f17;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v19 = new F4();
class C20 {
    static [v19](a22, a23, a24) {
    }
    static [v19](a26, a27, a28) {
    }
}
