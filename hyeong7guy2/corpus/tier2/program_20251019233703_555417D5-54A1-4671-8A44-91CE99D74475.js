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
            const v16 = new F10(a6, v3);
            return v16;
        }
        f7(v3, f7);
        f7();
        function f20() {
            return v3;
        }
        WebAssembly.compileStreaming().catch(f20);
        ("a").replaceAll(/(?<=a)/usg);
    }
}
new v3();
