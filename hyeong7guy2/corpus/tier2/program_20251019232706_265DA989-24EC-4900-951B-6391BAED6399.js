function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                function F15(a17, a18, a19, a20) {
                    if (!new.target) { throw 'must be called with new'; }
                    Float64Array["16" + a8];
                }
                new F15();
            }
            new F10();
            return a8;
        }
        f7();
        const v27 = f7(this);
        function f29() {
            return v27;
        }
        WebAssembly.compileStreaming(this, a5).catch(f29);
    }
}
new v3();
