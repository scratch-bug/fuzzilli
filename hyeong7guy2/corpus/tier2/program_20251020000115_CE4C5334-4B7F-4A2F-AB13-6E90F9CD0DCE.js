function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            gc();
        }
        const v13 = new F7(this, F7);
        const v14 = v13.constructor;
        new v14(v14, F0, F7, v14);
        function f17() {
            return a6;
        }
        WebAssembly.compileStreaming().catch(f17);
        const v20 = /(?<=a)/usg;
        v20.b = v20;
        ("a").replaceAll(v20);
    }
}
new v3(F0, F0);
