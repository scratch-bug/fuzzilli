function f1() {
    return WebAssembly;
}
const v3 = WebAssembly.instantiateStreaming().catch(f1);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10, a11, a12) {
            const v14 = DataView.prototype;
            try { v14.getFloat64(); } catch (e) {}
            function F16(a18) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v20 = new Int8Array(v3, a7, a10);
            function F21(a23, a24) {
                if (!new.target) { throw 'must be called with new'; }
                let v22 = this;
                ({"buffer":v22,"byteLength":F16,"length":a24,} = v20);
            }
            let v25;
            try { v25 = v14.getInt8(); } catch (e) {}
            function F26(a28, a29) {
                if (!new.target) { throw 'must be called with new'; }
                try { v25(); } catch (e) {}
            }
            return v14;
        }
        %OptimizeMaglevOnNextCall(f9);
        f9(f9, v3, F4);
        function f32(a33) {
        }
        return f32;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v34 = new F4();
class C35 {
    static [v34](a37, a38, a39) {
    }
    static [v34](a41, a42, a43) {
    }
}
