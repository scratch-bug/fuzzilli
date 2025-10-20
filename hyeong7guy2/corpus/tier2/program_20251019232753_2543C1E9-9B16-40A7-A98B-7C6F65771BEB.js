const v0 = [];
Array();
64 < 64;
try { Int16Array(); } catch (e) {}
new Int16Array();
function f10() {
    function f11(a12, a13) {
        f11();
        function f15(a16, a17, a18, a19) {
            const v20 = async (a21, a22, a23, a24) => {
                await a23;
                return f11;
            };
        }
        f15(128);
        let v27 = -2.220446049250313e-16;
        v27++;
        const v30 = new SharedArrayBuffer();
        const v32 = new DataView();
        with (v30) {
            const v34 = Promise.catch;
            try { v34.call(); } catch (e) {}
        }
        const v36 = class {
            constructor(a38, a39) {
            }
        }
        gc();
        function F42(a44, a45) {
            if (!new.target) { throw 'must be called with new'; }
            const t30 = globalThis.measureMemory;
            t30();
        }
        F42();
        v36();
        v36();
        function F52(a54, a55, a56, a57) {
            if (!new.target) { throw 'must be called with new'; }
        }
        F52();
        return v32;
    }
    f11();
    %PrepareFunctionForOptimization(f11);
    %OptimizeMaglevOnNextCall(f11);
    f11();
    return f10;
}
new Uint32Array();
class C63 {
}
function f64() {
    BigInt64Array.length = BigInt64Array;
    function F66(a68, a69, a70) {
        if (!new.target) { throw 'must be called with new'; }
        this.d = a68;
    }
    function f71() {
        const v72 = `
            const v76 = {
                next() {
                    return { done: 10 };
                },
            };
            const t64 = v76.next;
            t64();
            function f81() {
                return f71;
            }
            function f82() {
                function f83() {
                    Error(v72).stack;
                    return { done: 1809 };
                }
                f83.arguments;
                return { next: f83 };
            }
            const v90 = Symbol.iterator;
            const v91 = [-2147483648,4,-1266721465,8,9223372036854775807];
            const v92 = v91.__defineSetter__;
            try { v92(); } catch (e) {}
            function F94(a96, a97) {
                if (!new.target) { throw 'must be called with new'; }
                function f98() {
                    function f99(a100) {
                        const v101 = v0();
                        v101.findIndex();
                        try { v101.forEach(); } catch (e) {}
                        eval();
                        return v91;
                    }
                    return f99;
                }
                Object.defineProperty(this, "toString", { get: f98 });
            }
            const v106 = { [v90]: f82 };
            v106.c = v106;
            f81.bind(null, ...v106);
        `;
        eval(v72);
    }
    return f71;
}
function f111(a112) {
}
Object.defineProperty(C63, "toString", { configurable: true, enumerable: true, get: f64, set: f111 });
class C113 {
    static [C63](a115, a116, a117) {
    }
}
