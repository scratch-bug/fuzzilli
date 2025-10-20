function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                for (let i17 = 0, i18 = 10;
                    (() => {
                        const v19 = {};
                        let v20 = true;
                        for (let i22 = 0; i22 < 25000; i22++) {
                            const v28 = {};
                            v20 ? v19 : v28;
                            v20 = v28;
                        }
                        return i18;
                    })();
                    i18--) {
                }
                function F35(a37, a38, a39, a40) {
                    if (!new.target) { throw 'must be called with new'; }
                    Float64Array["16" + a8];
                }
                new F35(Float64Array, f7, v3, this);
            }
            new F10(a8, f7);
            return a8;
        }
        f7(F0, this);
        f7(this);
        function f49() {
            return F0;
        }
        WebAssembly.compileStreaming().catch(f49);
    }
}
new v3();
