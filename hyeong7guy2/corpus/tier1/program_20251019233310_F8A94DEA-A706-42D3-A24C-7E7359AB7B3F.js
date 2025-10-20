for (let i2 = 0, i3 = 10; i3; i3--) {
}
function F9(a11) {
    if (!new.target) { throw 'must be called with new'; }
}
const v12 = class extends F9 {
    constructor(a14, a15) {
        super();
        function f16(a17, a18) {
            a18 | a18;
            function F20(a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
                function F25(a27, a28) {
                    if (!new.target) { throw 'must be called with new'; }
                    Object.defineProperty(a27, 2, { writable: true, enumerable: true, value: a28 });
                    new a27(Uint8ClampedArray);
                    function f30() {
                        function f31(a32) {
                            let v33 = -1098098658;
                            function F37(a39, a40) {
                                if (!new.target) { throw 'must be called with new'; }
                                this.b = a28;
                                a40++;
                                this.e = a40;
                            }
                            const v42 = new F37("2147483647", -3612);
                            v42.b = f31;
                            new F37(F20, F25);
                            let v44 = 30349n;
                            ({"b":v44,"e":v33,...Int32Array} = v42);
                            return this;
                        }
                        return f31;
                    }
                    Object.defineProperty(this, "toString", { get: f30 });
                }
                const v45 = new F25(F25);
                v45.toString();
            }
            new F20(a17, a17);
            return this;
        }
        f16();
        %PrepareFunctionForOptimization(f16);
        %OptimizeMaglevOnNextCall(f16);
        f16(this, F9);
        function f51() {
            return this;
        }
        WebAssembly.compileStreaming(v12, v12).catch(f51);
    }
}
new v12(v12, v12);
