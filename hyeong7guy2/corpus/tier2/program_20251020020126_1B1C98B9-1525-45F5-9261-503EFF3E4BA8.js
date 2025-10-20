for (let i3 = 0, i4 = 10; i4; i4--) {
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    async function f14(a15, a16) {
        for (let i19 = 0, i20 = 10; i20; i20--) {
        }
        for (let v27 = 0; v27 < 5; v27++) {
            function F28(a30) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v31 = class extends F28 {
                constructor(a33, a34) {
                    super();
                    function f35(a36, a37) {
                        function F39(a41, a42) {
                            if (!new.target) { throw 'must be called with new'; }
                            const t17 = {};
                            t17[2367412113] &= 1e-15;
                            let v46 = undefined;
                            v46 = a34;
                        }
                        new F39();
                        return a37;
                    }
                    f35(v31, a34);
                    %PrepareFunctionForOptimization(f35);
                    %OptimizeMaglevOnNextCall(f35);
                    f35(a34, this);
                    function f51() {
                        return this;
                    }
                    WebAssembly.compileStreaming().catch(f51);
                }
            }
            new v31(v31, a15);
            const v55 = Symbol.asyncDispose;
            const v57 = {
                [v55]() {
                },
            };
            v57.f ^= v27;
            await using v58 = v57;
        }
        return a12;
    }
    f14(this, F10);
}
new F10(F10, F10);
new F10();
