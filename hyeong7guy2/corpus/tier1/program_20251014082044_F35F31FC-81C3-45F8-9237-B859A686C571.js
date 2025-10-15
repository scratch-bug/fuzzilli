const v0 = class {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            const v17 = new Int8Array();
            Array.apply(Array, v17);
            WebAssembly.validate(v17);
            try { this(a13); } catch (e) {}
            function f23() {
                return this;
            }
            function f24(a25) {
                const v27 = Temporal.PlainDateTime;
                try { v27(-1, a3, -1, a4); } catch (e) {}
                for (let v29 = 0; v29 < 5; v29++) {
                    const v31 = {
                        get g() {
                            return this;
                        },
                    };
                }
                v0.length = 3;
                new ArrayBuffer();
                const v36 = new BigUint64Array(a8);
                return v36;
            }
            f24.prototype = f24;
            Object.defineProperty(this, "e", { get: f23, set: f24 });
            this.e = -1;
        }
        const v37 = new F10(F1, f5, F10, a4);
        v37.e = v37;
        return v37;
    }
    f5(f5, a3, a4);
    %OptimizeFunctionOnNextCall(f5);
}
const v39 = new F1();
new F1(v0, v39);
new F1();
