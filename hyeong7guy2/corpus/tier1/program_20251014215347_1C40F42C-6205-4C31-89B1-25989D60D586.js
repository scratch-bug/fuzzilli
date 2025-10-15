let v1 = -1;
const v3 = [-6,-6,-6,-6,2.2250738585072014e-308];
e = v1;
function f6(a7, a8, a9) {
    return a8;
}
f6(e);
const v12 = new Int16Array(3);
const v14 = Symbol.iterator;
const v35 = {
    [v14]() {
        let v16 = 10;
        const v32 = {
            next() {
                v16--;
                const v20 = v16 == 0;
                const v23 = {
                    b: v20,
                    value: v16,
                    [Symbol]() {
                        v1 = this;
                    },
                    get a() {
                    },
                };
                return v23;
            },
            valueOf(a25, a26) {
            },
            maxByteLength: 3,
            p(a28, a29, a30, a31) {
            },
        };
        return v32;
    },
    set g(a34) {
    },
    imp: v12,
    a: e,
    imp: v3,
};
[-16.701474373147676,-1e-15,NaN,901867.897609097,1.0,2.2250738585072014e-308,2.220446049250313e-16,-1000000000000.0];
Map.valueOf = Symbol;
function f40() {
    return 750;
}
f40.valueOf = f40;
class C41 extends f40 {
}
function f42() {
    return C41;
}
Object.defineProperty(f42, "initial", { value: C41 });
const t53 = WebAssembly.Memory;
const v45 = new t53(f42);
const v46 = {};
function f47(a48) {
    return a48;
}
Object.defineProperty(v46, "p1", { set: f47 });
function f49(a50) {
    v46.p1 = a50;
}
for (let i52 = 0;
    (() => {
        const v54 = i52 < 20000;
        for (let i57 = 0, i58 = 10; i57;) {
            eval();
        }
        return v54;
    })();
    ++i52) {
    f49(2.2);
}
try { v45.grow(Map); } catch (e) {}
