function f0(a1) {
    async function f2(a3, a4) {
        for (let i5 = a3, i6 = f0;
            i6;
            (() => {
                function F9(a11) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v12 = class extends F9 {
                    constructor(a14, a15) {
                        super();
                        function f16(a17, a18) {
                            function F19(a21, a22) {
                                if (!new.target) { throw 'must be called with new'; }
                                try {
                                    const v23 = class extends this {
                                    }
                                    `-63824`;
                                } catch(e25) {
                                }
                            }
                            const v26 = new F19();
                            return v26;
                        }
                        f16();
                        f16();
                        function f30() {
                            return f30;
                        }
                        WebAssembly.compileStreaming(WebAssembly).catch(f30);
                    }
                }
                new v12();
                i6--;
            })()) {
        }
        return await a4;
    }
    f2(f0, a1);
    f2(f0, f0);
    %OptimizeFunctionOnNextCall(f2);
    return f2;
}
f0();
