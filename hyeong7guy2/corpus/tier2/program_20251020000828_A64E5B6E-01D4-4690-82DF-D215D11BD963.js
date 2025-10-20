function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                gc();
            }
            new F10(v3, f7);
            return v3;
        }
        f7();
        f7(v3, v3);
        function f20() {
            return this;
        }
        WebAssembly.compileStreaming().catch(f20);
        ("").replaceAll(/a\nb\bc/usg);
    }
}
new v3(F0, v3);
