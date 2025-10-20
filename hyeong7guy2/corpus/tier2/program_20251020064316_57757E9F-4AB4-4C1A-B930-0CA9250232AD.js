function f0() {
    return f0;
}
const v1 = class extends f0 {
    constructor(a3, a4) {
        super();
        function f5(a6, a7) {
            function F8() {
                if (!new.target) { throw 'must be called with new'; }
                const v10 = [];
                const v11 = [v10,a7];
                function F12(a14, a15) {
                    if (!new.target) { throw 'must be called with new'; }
                    const v17 = { type: "🙌🏿", arguments: v11 };
                    const t14 = JSON.stringify;
                    t14(v17);
                }
                new F12(F12, v10);
            }
            const v22 = new F8();
            return v22;
        }
        f5();
        function f25() {
            return this;
        }
        WebAssembly.compileStreaming().catch(f25);
    }
}
new v1();
