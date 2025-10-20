const v0 = -Infinity;
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super();
        function f8() {
            const v9 = v0 << v0;
            Math.floor(!(-v9));
            return v9;
        }
        function F14(a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            function f18() {
                function f19(a20) {
                    function F21(a23, a24, a25) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    F21.constructor = f8;
                    const t20 = F21.constructor;
                    t20(f18);
                }
                f19(f19(v0));
                %OptimizeMaglevOnNextCall(f19);
                return f19;
            }
            Object.defineProperty(this, "toString", { get: f18 });
        }
        const v30 = new F14();
        class C31 {
            static [v30](a33, a34, a35) {
            }
        }
        function f37() {
            return F1;
        }
        WebAssembly.compileStreaming(a6, v4).catch(f37);
    }
}
new v4();
