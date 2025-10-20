function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                a14[1] = a14;
                new a14(Uint8ClampedArray);
            }
            new F12(F12);
        }
        new F7();
        function f20() {
            return a5;
        }
        WebAssembly.compileStreaming().catch(f20);
    }
}
new v3();
