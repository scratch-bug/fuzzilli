function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            const v10 = a9 | a9;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                function F17(a19, a20) {
                    if (!new.target) { throw 'must be called with new'; }
                    new a19(Uint8ClampedArray);
                    function f22() {
                        function f23(a24) {
                            let v25 = -1098098658;
                            function F29(a31, a32) {
                                if (!new.target) { throw 'must be called with new'; }
                                this.e = a15;
                                a32++;
                                this.e = a32;
                            }
                            const v34 = new F29("2147483647", -3612);
                            const v35 = new F29();
                            v35.b = this;
                            v35.b = v35;
                            let v36 = 30349n;
                            ({"b":v36,"e":v25,...Int32Array} = v34);
                            return a24;
                        }
                        return f23;
                    }
                    Object.defineProperty(this, "toString", { get: f22 });
                }
                const v37 = new F17(F17);
                v37.toString(v37, a15, v37);
                function f39(a40, a41, a42) {
                    return a5;
                }
                f39(a9, arguments);
            }
            new F12(F12, v10);
            return F12;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f48() {
            return f48;
        }
        WebAssembly.compileStreaming().catch(f48);
    }
}
new v3();
