const v1 = new Set();
class C2 extends Set {
    static {
        gc();
    }
    [-1] = Set;
}
const v6 = new C2();
const v8 = Symbol.iterator;
const v17 = {
    [v8]() {
        let v10 = 10;
        const v16 = {
            next() {
                v10--;
                const v14 = v10 == 0;
                const v15 = {
                    done: v14,
                    done: v14,
                    a: this,
                    maxByteLength: 0,
                    value: 0,
                };
                return v15;
            },
        };
        return v16;
    },
};
const v18 = [256];
const v21 = { ...v18 };
try { v21.isOneByteString(v8, v18, v8); } catch (e) {}
function f23() {
    function f24(a25) {
        return a25;
    }
    f24.apply(f24, f24, f24, 5);
    return f24;
}
function F28(a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = C2;
    this.e = a31;
    this.c = v17;
}
new F28(5, -20385);
const v33 = new F28(F28, v6);
const v34 = new F28(v33, v1);
new F28(v34, v34);
for (let i42 = 0; i42 < 100000; ++i42) {
}
const v53 = class extends Float32Array {
}
new v53();
const v55 = /[\d-\d]{12,3bRnq0?/yi;
function F79(a81, a82, a83) {
    if (!new.target) { throw 'must be called with new'; }
    const t57 = F79.constructor;
    t57(v55, 0);
}
function f86() {
    with (d8) {
        const t62 = test.FastCAPI;
        const v90 = new t62();
        try { v90.sum_uint64_as_bigint(-268435456, d8, d8, d8, v90); } catch (e) {}
    }
    return 115;
}
F79.constructor = f86;
new F79(-268435456, 2, BigInt64Array);
