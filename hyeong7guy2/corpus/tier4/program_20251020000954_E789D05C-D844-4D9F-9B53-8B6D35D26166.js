function f1(a2, a3, a4, a5) {
    return a4;
}
f1[3] = 9;
const t4 = globalThis.Float16Array;
const v8 = new t4(f1);
v8.includes(9);
