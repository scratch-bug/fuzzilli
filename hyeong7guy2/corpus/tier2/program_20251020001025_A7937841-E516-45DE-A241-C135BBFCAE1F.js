function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = "1";
}
const v3 = new F1();
new F1();
new F1();
new Uint32Array(6);
function f9() {
    return v3;
}
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -6;
    function F18(a20, a21) {
        if (!new.target) { throw 'must be called with new'; }
        function f22() {
            function f23(a24) {
                function f25(a26, a27, a28, a29) {
                    return a24[Symbol.asyncDispose];
                }
                try { f25(this, f23, F18, a20); } catch (e) {}
                return "🙌🏿";
            }
            f23(f23(a21));
            %OptimizeMaglevOnNextCall(f23);
            return f23;
        }
        Object.defineProperty(this, "toString", { get: f22 });
    }
    const v37 = new F18(F18, F18);
    class C38 {
        static [v37](a40, a41, a42) {
        }
    }
}
const v43 = %WasmStruct();
[];
new F15();
function f46() {
}
const v48 = [];
function f49() {
}
function f50(a51) {
}
Object.defineProperty(v48, "toString", { get: f49, set: f50 });
function F52(a54, a55) {
    if (!new.target) { throw 'must be called with new'; }
    function f56() {
    }
}
F52.toString = f46;
for (let i59 = 0;
    i59 < 1000;
    (() => {
        i59++;
        function F64() {
            if (!new.target) { throw 'must be called with new'; }
            SharedArrayBuffer.b = 1995;
            new SharedArrayBuffer(128, { maxByteLength: 2147483649 });
        }
        new F64();
    })()) {
}
