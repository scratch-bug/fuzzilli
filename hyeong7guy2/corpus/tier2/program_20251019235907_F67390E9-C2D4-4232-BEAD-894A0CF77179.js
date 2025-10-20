const v1 = Symbol.iterator;
const v27 = {
    [v1]() {
        let v3 = 10;
        const v9 = {
            next() {
                v3--;
                const v7 = v3 == 0;
                return { done: v7, value: v3 };
            },
        };
        function f10() {
            class C11 {
                constructor(a13, a14) {
                    for (let v15 = 0; v15 < 5; v15++) {
                        function f16() {
                            return f16;
                        }
                        f16();
                        v15++;
                        super.b >>>= v15;
                    }
                }
            }
            function f20() {
                return f20;
            }
            WebAssembly.compileStreaming(C11, C11).catch(f20);
            const v23 = new C11();
            return v23;
        }
        f10();
        f10();
        %OptimizeFunctionOnNextCall(f10);
        f10();
        return v9;
    },
};
const v28 = [512,-1006639888,31890,9007199254740991,-37330,-65535,9007199254740990,62153];
function F29(a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a31;
    this.b = a31;
    this.e = a31;
}
new F29(v27);
new F29(v28);
new F29(F29);
new BigInt64Array(2038);
function F39(a41, a42) {
    if (!new.target) { throw 'must be called with new'; }
    function f43() {
        function f44(a45) {
            return a41;
        }
        function F46(a48, a49) {
            if (!new.target) { throw 'must be called with new'; }
            const v51 = globalThis.performance;
            const v52 = v51.measureMemory;
            v52(v52, v51, a41);
        }
        new F46();
        function f56() {
            function F57(a59, a60, a61, a62) {
                if (!new.target) { throw 'must be called with new'; }
                function F63(a65, a66) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f67() {
                        function f68(a69) {
                            let v70 = -1098098658;
                            function F74(a76, a77) {
                                if (!new.target) { throw 'must be called with new'; }
                                a77++;
                                this.e = a77;
                            }
                            const v79 = new F74("2147483647", -2);
                            async function f80(a81, a82) {
                                const v85 = Date().startsWith();
                                await f80;
                                return v85;
                            }
                            f80.apply(f80, f80);
                            f80();
                            %OptimizeFunctionOnNextCall(f80);
                            v79.b = v79;
                            let v89 = 30349n;
                            ({"b":v89,"e":v70,...Int32Array} = v79);
                        }
                        return f68;
                    }
                    Object.defineProperty(this, "toString", { get: f67 });
                }
                const v90 = new F63(F57, a61);
                class C91 {
                    static [v90](a93, a94, a95) {
                    }
                }
            }
            new F57(F57, f44, F57, this);
            return F57;
        }
        WebAssembly.instantiateStreaming().catch(f56);
        return f44;
    }
    Object.defineProperty(this, "toString", { get: f43 });
}
let v99 = -1000000000000.0;
let v100 = 1676310533;
const v103 = Symbol.iterator;
const v109 = {
    [v103]() {
        v100--;
        const v108 = {
            next() {
                return { done: v100 };
            },
        };
        return v108;
    },
};
const v112 = new Int16Array();
function f113() {
    v99 = v100;
    const v114 = new Date(Symbol, Date, 882, ...v112, ...v109);
    return v114;
}
f113();
%PrepareFunctionForOptimization(f113);
%OptimizeFunctionOnNextCall(f113);
f113();
const v117 = new F39();
class C118 {
    static [v117](a120, a121, a122) {
    }
}
