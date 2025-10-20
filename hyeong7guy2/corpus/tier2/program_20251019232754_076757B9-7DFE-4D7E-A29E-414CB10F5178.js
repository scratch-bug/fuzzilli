function f1() {
    return f1;
}
WebAssembly.instantiateStreaming(WebAssembly, WebAssembly, f1).catch(f1);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10, a11, a12) {
            const v14 = DataView.prototype;
            try { v14.getFloat64(); } catch (e) {}
            function F16(a18) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v20 = new Int8Array();
            function F21(a23, a24) {
                if (!new.target) { throw 'must be called with new'; }
                let v22 = this;
                ({"buffer":v22,"byteLength":F16,"length":a24,} = v20);
            }
            try { v14.getInt8(); } catch (e) {}
            return f9;
        }
        %OptimizeMaglevOnNextCall(f9);
        f9();
        function f27(a28) {
        }
        return f27;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v29 = new F4();
class C30 {
    static [v29](a32, a33, a34) {
    }
    static [v29](a36, a37, a38) {
    }
}
