function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                try {
                    Int8Array.n();
                } catch(e16) {
                    e16.stack;
                }
            }
            const v18 = new F10(a8, F10);
            return v18;
        }
        function f20() {
            return f7;
        }
        WebAssembly.compileStreaming().catch(f20).finally(f7);
    }
}
new v3(F0, F0);
