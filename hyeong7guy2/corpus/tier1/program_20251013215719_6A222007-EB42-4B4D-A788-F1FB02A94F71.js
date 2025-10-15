function f1() {
    return 268435440;
}
let v2 = 15;
const v4 = new Float32Array(v2);
function f6() {
    return v2;
}
const v7 = [-Infinity];
const v10 = [-1e-15,-962199.9571917667,-2.0,0.2831909155558324,7.842150078187048e+307];
v4.d = -5.0;
const v13 = {
    apply: f1,
    call: f6,
    construct: f1,
    defineProperty: f6,
    deleteProperty: f6,
    getOwnPropertyDescriptor: f1,
    getPrototypeOf: f1,
    isExtensible: f1,
    ownKeys: f6,
    set: f6,
    setPrototypeOf: f6,
};
new Proxy(v7, v13);
const v18 = new Uint16Array();
const v22 = [-2.2250738585072014e-308,-342.66637632972174,1000.0,-1.6116358514114264,Infinity,-425.44103428277276,1.0];
class C24 {
}
function F26(a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
}
const v32 = class extends Array {
    static {
        const v34 = %WasmArray();
    }
    static get h() {
        return v32;
    }
    static {
        function f37(a38, a39) {
            return {};
        }
        const v41 = f37(7, v18);
        f37(v41, v41);
        f37(704087666, 2);
        f37(C24, this);
        const v45 = f37(Int16Array, 12);
        f37(v22, v10);
        f37(v45, C24);
    }
}
try { v32.h(); } catch (e) {}
const v49 = new v32();
function F50(a52, a53) {
    if (!new.target) { throw 'must be called with new'; }
    const v54 = this?.constructor;
    try { new v54(v49, a52); } catch (e) {}
    try { a53.keys(); } catch (e) {}
    this.f = a52;
    this.b = 2n;
}
++Float32Array;
const v61 = Symbol.iterator;
const v72 = {
    [v61]() {
        let v63 = 10;
        const v71 = {
            next() {
                v63--;
                const v67 = v63 == 0;
                return { done: v67, value: v63 };
            },
            f: f6,
            [Symbol]() {
                v2 = this;
            },
            [v61]() {
            },
        };
        return v71;
    },
};
function f73(a74, a75) {
    a74[0];
    Reflect.construct(a75, [a74]);
    return a74[0];
}
const v88 = {
    construct(a83, a84) {
        const t0 = a84[0];
        t0[0] = 1.1;
        return a83;
    },
};
function f90() {
}
const v91 = new Proxy(f90, v88);
const proxy = v91;
for (let i94 = 0;
    (() => {
        const v98 = [1,2];
        function f99() {
            v98[0] = 1.1;
        }
        const v101 = { valueOf: f99 };
        return i94 < 25000;
    })();
    i94++) {
    f73([], proxy);
}
[];
class C113 {
}
["function",[255,-256,-14,65535,512,512,10],f6];
const v118 = class {
}
try { Uint8Array.values(); } catch (e) {}
class C122 extends Int32Array {
}
function f123() {
}
class C124 {
}
function f125(a126, a127) {
}
