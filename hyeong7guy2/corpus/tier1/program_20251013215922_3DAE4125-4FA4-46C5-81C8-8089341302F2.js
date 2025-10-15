const v5 = {
    construct(a1, a2) {
        const t0 = a2[0];
        t0[0] = 1.1;
        return a1;
    },
};
function f7() {
}
const v8 = new Proxy(f7, v5);
for (let i10 = 0; i10 < 25000; i10++) {
    Reflect.construct(v8, [[]]);
}
[];
const v24 = %WasmArray();
class C29 extends Int32Array {
}
class C32 extends WeakSet {
    static 4294967296 = Int16Array;
}
function f33() {
}
class C34 {
}
gc({ f: f33, execution: "async" });
const v39 = `-63824${C34}512`;
try { v39.blink(); } catch (e) {}
