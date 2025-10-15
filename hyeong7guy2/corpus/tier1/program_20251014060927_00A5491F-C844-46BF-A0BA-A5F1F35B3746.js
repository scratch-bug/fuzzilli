for (let i2 = 0; i2 < 100000; ++i2) {
    const v8 = i2 === i2;
    Math.asinh(v8);
    Math.fround(v8);
    832.2104106439558 / v8;
}
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    function f18(a19, a20, a21) {
        function F22(a24, a25, a26, a27) {
            if (!new.target) { throw 'must be called with new'; }
            function f28() {
                return a21;
            }
            const v29 = class {
                static [Uint8Array] = a19;
            }
            function F30(a32, a33) {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F30(v29, a17);
            function f35(a36) {
                return a36;
            }
            Object.defineProperty(this, "e", { get: f28, set: f35 });
        }
        new F22(a17, F14, a19, a21);
        return F14;
    }
    f18();
    %OptimizeFunctionOnNextCall(f18);
}
new F14(Uint8Array, Uint8Array);
new F14();
new F14(F14, F14);
