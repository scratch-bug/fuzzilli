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
            new F10(F0, f7);
            return v3;
        }
        f7();
        const v18 = f7();
        function f20() {
            return v18;
        }
        WebAssembly.compileStreaming().catch(f20);
        const v23 = /a\nb\bc/usg;
        v23.h = v23;
        ("a").replaceAll(v23);
    }
}
new v3();
