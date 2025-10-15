const v1 = Symbol.iterator;
const v21 = {
    [v1]() {
        let v3 = 10;
        v1[1] = this;
        async function* f7(a8, a9, a10, a11) {
            const v12 = await Object;
            yield* [Symbol,a10,v12,v12];
            return Object;
        }
        try { f7(v3, v1, Symbol, undefined); } catch (e) {}
        const v20 = {
            next() {
                v3--;
                const v18 = v3 == 0;
                const v19 = { done: v18, value: 0 };
                return undefined;
            },
        };
        return v20;
    },
};
const v23 = new WeakMap();
const v24 = Symbol.split;
v24.valueOf = v21;
v1[2147483648] ??= v21;
async function* f25(a26, a27, a28, a29) {
    yield await a27;
    return WeakMap;
}
try { f25(Symbol, v23, v1, v24); } catch (e) {}
function f33() {
    return v21;
}
const v35 = Symbol.iterator;
const v44 = {
    [v35]() {
        let v37 = 10;
        const v43 = {
            next() {
                v37--;
                const v41 = v37 == 0;
                return { done: v41, value: v37 };
            },
        };
        return this;
    },
};
const v45 = `
    async function* f46(a47, a48) {
    }
`;
const v50 = eval(v45);
function f51() {
}
function f52(a53) {
}
for (let i55 = 0; i55 < 100000; ++i55) {
    const v74 = {
        x: 1.1,
        y: 1.1,
        next() {
        },
        m(a65, a66, a67, a68) {
            const v70 = Symbol.months;
            const v72 = {
                [v70]() {
                },
            };
            try {
            } catch(e73) {
            } finally {
            }
        },
    };
    f52(v74);
}
try { v50.next(Symbol); } catch (e) {}
let v78 = 0;
v78++;
function F83(a85, a86) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a85;
}
const v87 = new F83(1000000000.0, 1000000000.0);
new F83(F83, v87);
const v90 = Symbol.iterator;
const v111 = {
    [v90]() {
        let v92 = 10;
        const v110 = {
            next() {
                v92--;
                const v103 = {
                    construct(a96, a97) {
                        function F98() {
                            if (!new.target) { throw 'must be called with new'; }
                            this.f = -256;
                        }
                        new F98();
                        return Reflect;
                    },
                };
                function f105() {
                    return v103;
                }
                new Proxy(f105, v103);
                const v108 = v92 == 0;
                return { done: v108, value: v92 };
            },
        };
        return v110;
    },
};
const v112 = [-268435456,-49107,127,-805620340,57677,4856,4294967295,4067,127,-1891315524];
[-1000.0,-854.9122822783173,2.2250738585072014e-308,0.40569821734712497,1.0,2.2250738585072014e-308,-1e-15,-970591.8455992056,1000000000000.0];
[0.0,-5.815645492439376,0.1620199790886775,750792.9169711757];
[-374129.4828143829,1000.0,-292399.50170357036,-1000000000.0];
function f116() {
    return v112;
}
new WeakMap();
new Uint8ClampedArray(4);
new Uint8Array(256);
const v128 = {
    get a() {
    },
};
[-2147483649,14,257,-2147483648,-1100576073,268435439,-1644609205];
function F131(a133, a134) {
    if (!new.target) { throw 'must be called with new'; }
    try {
    } catch(e135) {
    }
}
new F131(Map, 38107n);
const v137 = /XOya[a-z]Ra\Da[a-z]+/mvgsd;
if ("fN") {
}
function f140() {
}
gc({ execution: "async" });
const v143 = class {
    #valueOf() {
    }
}
new v143();
const v146 = ["I",v137];
const v152 = {
    valueOf() {
        for (let [v149,v150] of v146) {
        }
        return -1000.0;
    },
};
Uint8Array.BYTES_PER_ELEMENT = Uint8Array;
class C155 extends Uint8Array {
}
new C155();
try { WeakMap.call(-1000.0); } catch (e) {}
-Infinity;
function f161() {
    return 257;
}
%PrepareFunctionForOptimization(f161);
%OptimizeMaglevOnNextCall(f161);
