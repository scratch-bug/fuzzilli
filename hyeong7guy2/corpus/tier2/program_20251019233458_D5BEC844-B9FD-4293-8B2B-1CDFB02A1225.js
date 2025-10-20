function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            function f10() {
                return [0.39346707945810944,-991803.8963643727];
            }
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                function f16() {
                    function f17(a18) {
                        Array().forEach(f16);
                        function F22(a24, a25, a26) {
                            if (!new.target) { throw 'must be called with new'; }
                        }
                        F22.constructor = f10;
                        const t19 = F22.constructor;
                        const v28 = t19();
                        v28[15] = f16;
                        v28.pop();
                    }
                    f17();
                    f17();
                    %OptimizeMaglevOnNextCall(f17);
                    return f17;
                }
                Object.defineProperty(this, "toString", { get: f16 });
            }
            const v32 = new F12(F0, a9);
            class C33 {
                static [v32](a35, a36, a37) {
                }
            }
            return a6;
        }
        f7(v3, f7(f7, f7));
        function f41() {
            return a5;
        }
        WebAssembly.compileStreaming(v3).catch(f41);
    }
}
new v3(F0, v3);
