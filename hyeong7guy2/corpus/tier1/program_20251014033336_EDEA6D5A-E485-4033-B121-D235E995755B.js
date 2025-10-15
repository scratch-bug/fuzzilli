function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9007199254740990;
    this.d = -9007199254740990;
    const t4 = {};
    t4.g = F1;
    const v4 = {};
    v4.g = F1;
    v4.d = this;
    const v5 = {};
    v5.g = F1;
    v5.d = this;
    v5.f = this;
    const v6 = {};
    v6.g = F1;
    v6.d = this;
    v6.h = this;
}
new F1();
new F1();
new F1();
new F1();
function f11() {
    return F1;
}
let v12;
try { v12 = f11.isPrototypeOf(F1); } catch (e) {}
function f13() {
    return f11;
}
new BigUint64Array(9);
Symbol.toPrimitive = Symbol;
const v18 = Symbol.iterator;
const v32 = {
    [v18]() {
        let v20 = 10;
        const v31 = {
            next() {
                v20--;
                const v24 = v20 == 0;
                const v30 = {
                    get h() {
                        super[v24] = 0;
                        return this;
                    },
                    o(a27, a28, a29) {
                    },
                    done: v24,
                    value: v20,
                };
                return v30;
            },
        };
        return v31;
    },
};
v32.g = v32;
function f33() {
    const v36 = Array(1048576);
    let v37;
    try { v37 = v36.find(); } catch (e) {}
    const v38 = v37 ?? v37;
    for (let i41 = 0, i42 = 10; i42; i41 >>> i41, i42 >>> i42, i42--) {
        Object.defineProperty(Array, v38, { writable: true, value: v12 });
        const v56 = new SharedArrayBuffer(5, { maxByteLength: 4143531776 });
        new Uint8ClampedArray(v56);
        const v59 = Array(1048576);
        v59.f = v59;
    }
}
f33.length = f33;
const v61 = ({ next: f33 }).next;
v61.d = v61;
const v62 = v61();
v62 ?? v62;
