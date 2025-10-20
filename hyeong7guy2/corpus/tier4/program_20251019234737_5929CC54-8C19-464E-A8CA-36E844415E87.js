function f1(a2, a3, a4, a5) {
    return a4;
}
const t3 = globalThis.Float16Array;
const v8 = new t3(f1);
v8.includes(268435439);
