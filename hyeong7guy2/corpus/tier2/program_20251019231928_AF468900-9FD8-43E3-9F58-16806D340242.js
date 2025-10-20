function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 9007199254740991;
    this.c = 9007199254740991;
    this.b = 9007199254740991;
}
const v3 = new F0();
const v4 = new F0();
const v6 = new Map();
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    const v13 = v6?.toString;
    try { new v13(); } catch (e) {}
    this.d = a10;
}
const v15 = new F8(true, Map, F8);
Object["isFrozen"](v15);
const v19 = [v3,F0,v3,v4,v3];
const v21 = /Mo(?:a?)*(?:foo)?/duygmi;
const v22 = { __proto__: v21 };
function F23(a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    const v28 = globalThis.console;
    v28.profileEnd();
    Temporal ?? Temporal;
    v28.profile();
}
new F23();
const v34 = class extends F0 {
    static {
        function f36(a37, a38) {
            const v40 = class extends F8 {
                static #m(a42, a43, a44, a45) {
                    let v46 = 0;
                    do {
                        try {
                        } catch(e47) {
                        }
                        gc({ execution: "async", type: "minor" });
                        v46++;
                    } while (v46 < 4)
                    return a45;
                }
            }
            new v40();
            arguments[0] = arguments;
            return a38;
        }
        %PrepareFunctionForOptimization(f36);
        %OptimizeMaglevOnNextCall(f36);
        function f57() {
        }
        const v59 = {};
    }
    static [v19](a61) {
        const v72 = {
            next() {
                const v71 = {
                    o(a67, a68, a69) {
                    },
                    h: 2113,
                    get e() {
                    },
                };
            },
        };
        const v74 = new SharedArrayBuffer(2113, v72);
        new Float64Array(v74);
    }
}
new v34();
const v78 = [-150.83198282372882,0.9661443619833191,-5.186742367592835e+307,0.6744472609711906,3.4706690340321416e+307,520.2040642541915,-1.0];
const v79 = {};
try { v79.f = v78; } catch (e) {}
const v80 = {};
new Map();
for (let v83 = 0; v83 < 5; v83++) {
}
function f84() {
}
function f85(a86, a87) {
    class C89 extends Float32Array {
    }
}
