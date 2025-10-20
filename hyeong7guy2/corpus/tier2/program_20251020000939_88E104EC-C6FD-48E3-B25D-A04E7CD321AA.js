try {
    function F0() {
        if (!new.target) { throw 'must be called with new'; }
        this.a = this;
    }
    const v3 = %WasmStruct();
    [];
    new F0();
    function f6() {
    }
    const v8 = [];
    function f9() {
    }
    function f10(a11) {
    }
    Object.defineProperty(v8, "toString", { get: f9, set: f10 });
    function F12(a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        function f16() {
        }
    }
    F12.toString = F12;
    for (let i19 = 0;
        i19 < 1000;
        (() => {
            i19++;
            function F24() {
                if (!new.target) { throw 'must be called with new'; }
                SharedArrayBuffer.b = SharedArrayBuffer;
                new SharedArrayBuffer(128, { maxByteLength: 2147483649 });
            }
            new F24();
        })()) {
    }
} catch(e33) {
}
