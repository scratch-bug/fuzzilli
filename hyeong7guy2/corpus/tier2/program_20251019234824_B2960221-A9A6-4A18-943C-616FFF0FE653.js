function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            const v11 = [a10,a10];
            for (let i13 = 0;
                i13 < 20000;
                (() => {
                    const v18 = Array.prototype;
                    const v19 = v18.toString;
                    v19.apply(v18, [v19]);
                    ++i13;
                })()) {
                v11[i13] = i13;
            }
        }
        new F7();
        function f26() {
            return F7;
        }
        WebAssembly.compileStreaming().catch(f26);
    }
}
new v3();
